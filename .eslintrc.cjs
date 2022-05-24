module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  plugins: ["svelte3", "@typescript-eslint"],
  ignorePatterns: ["*.cjs"],
  overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
  settings: {
    "svelte3/typescript": () => require("typescript")
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2022
  },
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  rules: {
    "semi": [2, "always"],
    "default-param-last": [2],
    "default-case-last": [2],
    "no-constant-condition": [0, false],
    "no-negated-condition": [1],
    "no-with": [1],
    "prefer-arrow-callback": [2],
    "prefer-const": [1],
    "prefer-exponentiation-operator": [1],
    "require-await": [1],
    "sort-imports": [1, { "ignoreCase": true, "allowSeparatedGroups": true }],
    "sort-keys": [2, "asc", { "caseSensitive": false, "natural": true, "minKeys": 2 }],
    "spaced-comment": [1],
    "array-bracket-spacing": [1, "never"],
    "arrow-spacing": [1, { "before": true, "after": true }],
    "brace-style": [1, "1tbs", { "allowSingleLine": true }],
    "comma-dangle": [1, "never"],
    "comma-spacing": [1, { "before": false, "after": true }],
    "comma-style": [1, "last"],
    "curly": [1, "all"],
    "dot-location": [1, "property"],
    "eol-last": [1, "always"],
    "key-spacing": [1, { "beforeColon": false, "afterColon": true, "mode": "strict" }],
    "no-trailing-spaces": [1],
    "object-curly-spacing": [1, "always"],
    "operator-linebreak": [1, "before"],
    "padded-blocks": [1, "never"],
    "quotes": [1, "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
    "rest-spread-spacing": [1, "never"],
    "space-before-blocks": [1, "always"],
    "space-before-function-paren": [1, { "anonymous": "always", "named": "never", "asyncArrow": "always" }],
    "space-in-parens": [1, "never"],
    "template-curly-spacing": [1, "never"],
    "@typescript-eslint/naming-convention": [
      2,
      {
        "selector": "default",
        "format": ["camelCase"]
      },
      {
        "selector": "variable",
        "format": ["camelCase", "UPPER_CASE"]
      },
      {
        "selector": "parameter",
        "format": ["camelCase"],
        "leadingUnderscore": "allow"
      },
      {
        "selector": "memberLike",
        "modifiers": ["private"],
        "format": ["camelCase"],
        "leadingUnderscore": "require"
      },
      {
        "selector": "typeLike",
        "format": ["PascalCase"]
      }
    ]
  }
};
