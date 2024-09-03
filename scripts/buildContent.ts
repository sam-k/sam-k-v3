import {contentType} from 'mime-types';
import {
  access,
  mkdir,
  opendir,
  readFile,
  rm,
  writeFile,
} from 'node:fs/promises';
import {
  dirname,
  extname,
  join as joinPath,
  relative as relativePath,
} from 'node:path';

const CONTENT_SRC_DIR = 'content/src/';
const CONTENT_BUILD_DIR = 'content-build/';

const main = async () => {
  try {
    await access(CONTENT_BUILD_DIR);
    await rm(CONTENT_BUILD_DIR, {recursive: true});
  } catch {
    // Build directory does not exist.
  }

  const assetMap = new Map<string, string>();
  for await (const dirent of await opendir(CONTENT_SRC_DIR, {
    recursive: true,
  })) {
    if (!dirent.isFile() || extname(dirent.name) === '.json') {
      continue;
    }
    const filePath = joinPath(dirent.path, dirent.name);
    assetMap.set(
      filePath.replace(CONTENT_SRC_DIR, ''),
      `data:${contentType(dirent.name)};base64,${await readFile(filePath, {
        encoding: 'base64',
      })}`
    );
  }

  const dir = await opendir(CONTENT_SRC_DIR, {recursive: true});
  for await (const dirent of dir) {
    if (!dirent.isFile() || extname(dirent.name) !== '.json') {
      continue;
    }

    const filePath = joinPath(dirent.path, dirent.name);
    const newFilePath = joinPath(
      CONTENT_BUILD_DIR,
      relativePath(CONTENT_SRC_DIR, filePath)
    );

    let fileStr = await readFile(filePath, 'utf8');
    for (const [assetRelativePath, dataUrl] of assetMap.entries()) {
      fileStr = fileStr.replaceAll(`"${assetRelativePath}"`, `"${dataUrl}"`);
    }
    try {
      await mkdir(dirname(newFilePath), {recursive: true});
    } catch {
      // Parent directory already exists.
    }
    await writeFile(newFilePath, fileStr);
  }
};

main();
