module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "prettier",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/strict",
    "plugin:jest-dom/recommended",
    "next",
    "next/core-web-vitals",
  ],
  plugins: [
    "jsx-a11y",
    "react",
    "react-hooks",
    "jest-dom",
    "testing-library",
    "@typescript-eslint",
    "prettier",
  ],
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  rules: {},
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
};
