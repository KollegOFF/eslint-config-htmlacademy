module.exports = {
  extends: 'eslint:recommended',
  rules: {
    // Possible Errors
    // https://eslint.org/docs/rules/#possible-errors
    // ---------------------------------------------
    'no-console': 'error',
    'no-template-curly-in-string': 'error',
    // Best Practices
    // https://eslint.org/docs/rules/#best-practices
    'accessor-pairs': 'error',
    'curly': 'error',
    'eqeqeq': ['error', 'always'],
    'no-alert': 'error',
    'no-multi-spaces': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'radix': 'error',
    // Strict Mode
    // https://eslint.org/docs/rules/#strict-mode
    'strict': ['error', 'global'],
    // Variables
    // https://eslint.org/docs/rules/#variables
    'no-shadow': ['error', {'hoist': 'all'}],
    'no-use-before-define': ['error', {'functions': false}],
    // Stylistic Issues
    // https://eslint.org/docs/rules/#stylistic-issues
    // ---------------------------------------------
    'camelcase': 'error',
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'functions': 'always-multiline',
    }],
    'comma-spacing': 'error',
    'eol-last': 'error',
    'indent': ['error', 2, {
      SwitchCase: 1,
    }],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'lines-between-class-members': ['error', 'always'],
    'no-multiple-empty-lines': 'error',
    'no-nested-ternary': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'quotes': ['error', 'single'],
    'semi': 'error',
    'semi-spacing': 'error',
    'semi-style': 'error',
    'space-before-blocks': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'switch-colon-spacing': 'error',
    // ECMAScript 6
    // https://eslint.org/docs/rules/#ecmascript-6
    // ---------------------------------------------
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'no-var': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
  },
};
