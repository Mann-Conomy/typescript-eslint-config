---
name: "Feature request"
about: "Request a new rule or feature for the TypeScript ESLint config"
title: "[FEATURE] - "
labels: ["enhancement"]
---

## Feature description

Provide a clear and concise description of the feature or improvement you are requesting.

## Motivation

Explain why this feature or improvement is needed. Describe the problem it would solve or the use case it would address.

## Detailed explanation

Provide a detailed description of the proposed feature or improvement. If applicable, include examples to demonstrate how it would work.

## Example Usage

If applicable, provide an example of how the new feature or improvement would be configured in a `eslint.config.js`.

```js
import tseslint from "typescript-eslint";
import config from "@mann-conomy/typescript-eslint-config";

export default tseslint.config({
    extends: [
        ...config
    ],
    ignores: [
        "eslint.config.js"
    ],
    rules: {
        "new-rule": "error"
    }
});
```

## Expected behaviour

Describe what the expected behaviour or output would be when the feature is used.

## Additional context

Add any other context or information that might help us understand the request. This could include references to relevant documentation or community discussions.

## Alternatives considered

If applicable, describe any alternative solutions or features you considered and why you believe the proposed feature is the best option.

## Related Issues

If there are any related issues, please link them here.

---

**Please note that feature requests are considered based on their impact, feasibility, and alignment with the Mann-Conomy project's goals. Providing detailed and well-thought-out information will help in evaluating your request.**

Your feedback is invaluable. Thank you for helping improve the Mann-Conomy Project!
