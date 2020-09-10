module.exports = {
  "env": {
    "browser": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:functional/external-recommended",
    "plugin:functional/recommended",
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  "ignorePatterns": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "functional",
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": "off",
    "semi": [
      "error",
      "always"
    ],
    "arrow-body-style": "error",
    "arrow-parens": [
      "off",
      "as-needed"
    ],
    "camelcase": "error",
    "comma-dangle": "off",
    "complexity": "off",
    "curly": "error",
    "dot-notation": "error",
    "eol-last": "off",
    "eqeqeq": [
      "error",
      "smart"
    ],
    "guard-for-in": "error",
    "id-blacklist": [
      "error",
      "any",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined",
      "undefined"
    ],
    "id-match": "error",
    "max-classes-per-file": [
      "error",
      1
    ],
    "max-len": "off",
    "new-parens": "off",
    "newline-per-chained-call": "off",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-console": "error",
    "no-duplicate-imports": "error",
    "no-eval": "error",
    "no-extra-bind": "error",
    "no-invalid-this": "off",
    "no-multiple-empty-lines": "off",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-return-await": "error",
    "no-sequences": "error",
    "no-shadow": [
      "error",
      {
        "hoist": "all"
      }
    ],
    "no-template-curly-in-string": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "off",
    "no-undef-init": "error",
    "no-underscore-dangle": "error",
    "no-unused-expressions": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "one-var": [
      "error",
      "never"
    ],
    "prefer-const": "error",
    "prefer-object-spread": "error",
    "quote-props": "off",
    "react/prop-types": [0],
    "radix": "error",
    "space-before-function-paren": "off",
    "spaced-comment": "error",
    "functional/functional-parameters": "off",
    "functional/no-return-void": "off",
    "functional/no-expression-statement": "off",

    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    // handled by prettier instead
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-extra-parens": "off",
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/quotes": ["error", "single"],
    "@typescript-eslint/require-array-sort-compare": "off",
    // Handled by tsconfig --strict instead
    "@typescript-eslint/typedef": "off",
  },
  "settings": {
    "react": {
      "version": "detect",
    },
  },
};
