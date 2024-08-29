/** @type {import('stylelint').Config} */
const config = {
  extends: ['stylelint-config-standard'],
  rules: {
    'selector-class-pattern': '',
    'property-no-vendor-prefix': [
      true,
      {ignoreProperties: ['box-decoration-break']},
    ],
  },
};

module.exports = config;
