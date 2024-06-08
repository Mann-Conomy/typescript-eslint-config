const { ESLint } = require("eslint");
const configs = require("../eslint.config.js");
const { describe, expect, test } = require("@jest/globals");

describe("eslint.config.js", () => {
    // Create the TypeScript linter using the configs
    const eslint = createLinter(configs);

    test("should return a array-type error", async() => {
        // Arrange
        const code = createArrayWithIncorrectType();

        // Act
        const results = await eslint.lintText(code);

        const errors = results.reduce((accumulator, result) => accumulator + result.errorCount, 0);

        // Assert
        expect(errors).toBe(1);
    });

    test("should return a no-explicit-any error", async() => {
        // Arrange
        const code = createFunctionWithExplicitAny();

        // Act
        const results = await eslint.lintText(code);

        const errors = results.reduce((accumulator, result) => accumulator + result.errorCount, 0);

        // Assert
        expect(errors).toBe(2);
    });

    test("should return a consistent-type-imports error", async() => {
        const code = createCodeWithInconsistentImports();

        const results = await eslint.lintText(code);

        const errors = results.reduce((accumulator, result) => accumulator + result.errorCount, 0);

        // Assert
        expect(errors).toBe(1);
    });

    test("should contain no errors", async() => {
        // Arrange
        const code = createFunctionWithoutErrors();

        // Act
        const results = await eslint.lintText(code);

        const errors = results.reduce((accumulator, result) => accumulator + result.errorCount, 0);

        // Assert
        expect(errors).toBe(0);
    });
});

function createLinter(configs) {
    const { rules } = configs.pop();

    return new ESLint({
        baseConfig: {
            rules,
            plugins: ["@typescript-eslint"],
            parser: "@typescript-eslint/parser"
        }
    });
}

function createArrayWithIncorrectType() {
    return "const names: Array<string> = [];";
}

function createFunctionWithExplicitAny() {
    return "export function add(a: any, b: any) { \n\treturn a + b;\n}";
}

function createCodeWithInconsistentImports() {
    return "import { Linter } from \"eslint\";\nconst rules: Readonly<Linter.RulesRecord> = {};";
}

function createFunctionWithoutErrors() {
    return "export function add(a: number, b: number) { \n\treturn a + b;\n}";
}
