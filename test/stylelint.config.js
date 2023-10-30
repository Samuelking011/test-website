module.exports = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-order'],
  rules: {
    'order/order': [
      'custom-properties',
      'dollar-variables',
      'declarations',
      'rules',
      'at-rules',
    ],
    'order/properties-alphabetical-order': true, // Enfore alphabetical order of properties
    'selector-pseudo-element-colon-notation': 'single', // Use single colon for pseudo-elements (::before)
    //"plugin/stylelint-css": true,
    //"property-no-unknown": true
    //"at-rule-no-unknown": null,
    //"css/at-rule-no-unknown": true,
    //"no-descending-specificity": null
  },
};
