/** @type {import('prettier').Config} */
const config = {
  // eslint-disable-next-line n/no-unpublished-require
  ...require('gts/.prettierrc.json'),
  organizeImportsSkipDestructiveCodeActions: true,
  plugins: ['prettier-plugin-organize-imports'],
};

module.exports = config;
