import {getArgs, spawnCmd} from './utils/console.js';

const ESLINT_EXTS = [
  'cjs',
  'cts',
  'html',
  'js',
  'json',
  'mjs',
  'mts',
  'ts',
  'vue',
  'yaml',
  'yml',
];

const STYLELINT_EXTS = ['css'];

const main = async () => {
  const argv = getArgs();
  const shouldFix = Boolean(argv.fix);

  try {
    if (ESLINT_EXTS.length) {
      await spawnCmd('eslint', [
        '.',
        '--ext',
        ESLINT_EXTS.map(ext => `.${ext}`).join(','),
        '--no-error-on-unmatched-pattern',
        shouldFix ? '--fix' : undefined,
      ]);
    }
    if (STYLELINT_EXTS.length) {
      await spawnCmd('stylelint', [
        `**/*.${
          STYLELINT_EXTS.length === 1
            ? STYLELINT_EXTS[0]
            : `{${STYLELINT_EXTS.join(',')}}`
        }`,
        '--allow-empty-input',
        shouldFix ? '--fix' : undefined,
      ]);
    }
  } catch (err) {
    console.error(err);
  }
};

main();
