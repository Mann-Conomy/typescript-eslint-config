---
name: "Bug report"
about: "Report a bug with the TypeScript ESLint config"
title: "[BUG] - "
labels: ["bug"]
---

## Describe the bug

Please provide a clear and concise description of the bug. Include any relevant information that might help us understand the issue.

## Steps to reproduce the behaviour

Please provide detailed steps for reproducing the issue.
1. Import '...'
2. Add rules '....'
3. Compile '....'
4. Throws error

## Expected behaviour

A clear and concise description of what you expected to happen.

## Actual behaviour

A clear and concise description of what happens.

## TypeScript ESLint configuration

- **TypeScript ESLint version:** [e.g. 7.12.0]
- **TypeScript version:** [e.g. 5.4.5]
- **Node.js version:** [e.g. 20.12.2]
- **Rules:**
```js
import tseslint from "typescript-eslint";
import config from "@mann-conomy/typescript-eslint-config";

export default tseslint.config({
    extends: [
        ...config
    ],
    rules: {
        "no-control-regex": "off"
    }
});
```

## Environment

- OS: [e.g. Windows 11, macOS 14 Sonoma, Ubuntu 24.04]
- IDE: [e.g. Visual Studio Code, WebStorm]

## Stacktrace

If applicable, add any error messages you are receiving. Please include the full stacktrace or add a screenshot.

## Additional Context

Add any other context about the problem here, such as specific files or configurations that might be causing the issue. If the problem is specific to a particular setup, please provide details.

## Screenshots

If applicable, add screenshots to help explain your problem.

## Potential Solutions

If you have an idea of what might be causing the problem or how to fix it, please share it here.

## Related Issues

If there are any related issues, please link them here.

---

**Please note that if the issue is not reproducible, it may not be addressed. Make sure to provide as much information as possible.**

Your feedback is invaluable. Thank you for helping improve the Mann-Conomy Project!
