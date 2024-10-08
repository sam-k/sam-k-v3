import {contentType} from 'mime-types';
import {access, opendir, readFile, rm} from 'node:fs/promises';
import {extname, join as joinPath, relative as relativePath} from 'node:path';
import showdown from 'showdown';
import {parse as parseYaml} from 'yaml';
import {getFilePath, safeWriteFile} from './utils/fs.js';

const CONTENT_SRC_DIR = 'content/src/';
const CONTENT_BUILD_DIR = 'content-build/';

const POST_ASSETS_PLACEHOLDER = '{POST_ASSETS}';

/**
 * Builds map of asset names to their base-64 encodings.
 *
 * @returns {Promise<Map<string, string>>}
 */
const buildAssetMap = async () => {
  /** @type {Map<string, string>} */
  const assetMap = new Map();
  for await (const dirent of await opendir(CONTENT_SRC_DIR, {
    recursive: true,
  })) {
    if (
      !dirent.isFile() ||
      extname(dirent.name) === '.json' ||
      extname(dirent.name) === '.md'
    ) {
      continue;
    }
    const srcFilePath = getFilePath(dirent);
    assetMap.set(
      srcFilePath.replace(CONTENT_SRC_DIR, ''),
      `data:${contentType(dirent.name)};base64,${await readFile(srcFilePath, {
        encoding: 'base64',
      })}`
    );
  }
  return assetMap;
};

/**
 * Builds Markdown metadata for lookups.
 *
 * @returns {Promise<void>}
 */
const buildMarkdownMetadata = async () => {
  /** @type {Map<string, Array<{filename: string} & Record<string, any>>>} */
  const metadataMap = new Map();

  for await (const dirent of await opendir(CONTENT_SRC_DIR, {
    recursive: true,
  })) {
    if (!dirent.isFile() || extname(dirent.name) !== '.md') {
      continue;
    }

    const srcFilePath = getFilePath(dirent);
    const fileDir = relativePath(CONTENT_SRC_DIR, joinPath(srcFilePath, '..'));

    const markdownConverter = new showdown.Converter({metadata: true});
    markdownConverter.makeHtml(await readFile(srcFilePath, 'utf8'));
    const metadata = {
      filename: dirent.name.replace(/.md$/, ''),
      ...parseYaml(markdownConverter.getMetadata(/* raw= */ true)),
    };
    if (metadataMap.has(fileDir)) {
      metadataMap.get(fileDir).push(metadata);
    } else {
      metadataMap.set(fileDir, [metadata]);
    }
  }

  for (const [fileDir, metadataArr] of metadataMap.entries()) {
    // Manual restore `$` characters.
    // See https://github.com/showdownjs/showdown/wiki/extensions#gotchas
    await safeWriteFile(
      joinPath(CONTENT_BUILD_DIR, fileDir, 'metadata.json'),
      JSON.stringify(
        {metadata: metadataArr},
        /* replacer= */ null,
        /* space= */ 2
      ).replaceAll('¨D', '$')
    );
  }
};

/**
 * Builds Markdown files for fetch, with asset paths replaced with data URLs.
 *
 * @param {ReadonlyMap<string, string>} assetMap
 * @returns {Promise<void>}
 */
const buildMarkdownFiles = async assetMap => {
  for await (const dirent of await opendir(CONTENT_SRC_DIR, {
    recursive: true,
  })) {
    if (!dirent.isFile() || extname(dirent.name) !== '.md') {
      continue;
    }

    const srcFilePath = getFilePath(dirent);
    const filePath = relativePath(CONTENT_SRC_DIR, srcFilePath);
    const buildFilePath = joinPath(CONTENT_BUILD_DIR, filePath).replace(
      /\.md$/,
      '.json'
    );

    let srcFileStr = (await readFile(srcFilePath, 'utf8'))
      .replaceAll(
        /\[\^(\d+(?:,\d+)*)]/g,
        /**
         * @param {string} _
         * @param {string} match
         */
        (_, match) =>
          `<sup>${match
            .split(',')
            .map(num => `<a href="#ref-${num}">${num}</a>`)
            .join(', ')}</sup>`
      )
      .replaceAll(
        /\[>(\d+)]:/g,
        /**
         * @param {string} _
         * @param {string} match
         */
        (_, match) => `<sup id="ref-${match}">${match}</sup>`
      );
    for (const [assetRelativePath, dataUrl] of assetMap.entries()) {
      srcFileStr = srcFileStr.replaceAll(
        `"${assetRelativePath.replace(
          joinPath('assets', filePath.replace(/\.md$/, '')),
          POST_ASSETS_PLACEHOLDER
        )}"`,
        `"${dataUrl}"`
      );
    }
    await safeWriteFile(
      buildFilePath,
      JSON.stringify(
        {markdown: srcFileStr},
        /* replacer= */ null,
        /* space= */ 2
      )
    );
  }
};

/**
 * Builds JSON files for fetch, with asset paths replaced with data URLs.
 *
 * @param {ReadonlyMap<string, string>} assetMap
 * @returns {Promise<void>}
 */
const buildJsonFiles = async assetMap => {
  for await (const dirent of await opendir(CONTENT_SRC_DIR, {
    recursive: true,
  })) {
    if (!dirent.isFile() || extname(dirent.name) !== '.json') {
      continue;
    }

    const srcFilePath = getFilePath(dirent);
    const buildFilePath = joinPath(
      CONTENT_BUILD_DIR,
      relativePath(CONTENT_SRC_DIR, srcFilePath)
    );

    let srcFileStr = await readFile(srcFilePath, 'utf8');
    for (const [assetRelativePath, dataUrl] of assetMap.entries()) {
      srcFileStr = srcFileStr.replaceAll(
        `"${assetRelativePath}"`,
        `"${dataUrl}"`
      );
    }
    await safeWriteFile(buildFilePath, srcFileStr);
  }
};

const main = async () => {
  // Initialize content build directory.
  try {
    await access(CONTENT_BUILD_DIR);
    await rm(CONTENT_BUILD_DIR, {recursive: true});
  } catch {
    // Build directory does not exist.
  }

  const assetMap = await buildAssetMap();
  await buildMarkdownMetadata();
  await buildMarkdownFiles(assetMap);
  await buildJsonFiles(assetMap);
};

main();
