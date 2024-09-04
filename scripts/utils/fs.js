import {mkdir, writeFile} from 'node:fs/promises';
import {dirname, join as joinPath} from 'node:path';

/**
 * Gets path of a `Dirent` object.
 *
 * @param {import('node:fs').Dirent} dirent
 * @returns {string}
 */
export const getFilePath = dirent => joinPath(dirent.parentPath, dirent.name);

/**
 * Writes content to file, creating any parent directories if necessary.
 *
 * @param {string} path
 * @param {string} content
 * @returns {Promise<void>}
 */
export const safeWriteFile = async (path, content) => {
  try {
    await mkdir(dirname(path), {recursive: true});
  } catch {
    // Parent directory already exists.
  }
  await writeFile(path, content);
};
