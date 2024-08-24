import {getArgs, spawnCmd} from './utils/console';

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
] as const;

const STYLELINT_EXTS = ['css'] as const;

const main = async () => {
  const argv = getArgs();
  const shouldFix = Boolean(argv.fix);

  try {
    await spawnCmd('eslint', [
      '.',
      '--ext',
      ESLINT_EXTS.map(ext => `.${ext}`).join(','),
      '--no-error-on-unmatched-pattern',
      shouldFix ? '--fix' : undefined,
    ]);
    await spawnCmd('stylelint', [
      `**/*.{${STYLELINT_EXTS.join(',')}}`,
      '--allow-empty-input',
      shouldFix ? '--fix' : undefined,
    ]);
  } catch (err) {
    console.error(err);
  }
};

main();
