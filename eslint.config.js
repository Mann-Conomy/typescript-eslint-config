const tseslint = require("typescript-eslint");
const eslint = require("@mann-conomy/eslint-config");

module.exports = tseslint.config({
    extends: [
        ...eslint,
        ...tseslint.configs.recommended,
    ],
    rules: {
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/consistent-type-imports": "error"
    }
});
