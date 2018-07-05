module.exports = {
  rules: {
    'array-bracket-spacing': 'error',
    'arrow-spacing': 'error',
    'brace-style': 'error',
    'comma-dangle': 'error',
    'comma-style': 'error',
    'curly': 'error',
    'eol-last': 'error',
    'eqeqeq': ['error', 'smart'],
    'indent': ['error', 4, { SwitchCase: 1 }],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'no-console': ['error', { allow: ['error'] }],
    'no-trailing-spaces': 'error',
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'no-unused-vars': ['error', { args: 'none' }],
    'no-use-before-define': 'error',
    'no-useless-escape': 'off',
    'no-with': 'error',
    'quote-props': ['error', 'as-needed', { keywords: true }],
    'quotes': ['error', 'double', { avoidEscape: true }],
    'semi': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', { anonymous: 'always', asyncArrow: 'always', named: 'never' }],
    'space-in-parens': 'error',
    'space-infix-ops': 'error'
  }
};
