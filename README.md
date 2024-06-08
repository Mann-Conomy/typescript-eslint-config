# typescript-eslint-config

A sharable TypeScript ESLint config for the Mann-Conomy Project.

[![npm version](https://img.shields.io/npm/v/@mann-conomy/typescript-eslint-config?style=flat-square&logo=npm)](https://npmjs.com/package/@mann-conomy/typescript-eslint-config)
[![npm downloads](https://img.shields.io/npm/d18m/@mann-conomy/typescript-eslint-config?style=flat-square&logo=npm)](https://npmjs.com/package/@mann-conomy/typescript-eslint-config)
[![Node.js version](https://img.shields.io/node/v/@mann-conomy/typescript-eslint-config?style=flat-square&logo=nodedotjs)](https://nodejs.org/en/about/releases/)
[![GitHub actions](https://img.shields.io/github/actions/workflow/status/Mann-Conomy/typescript-eslint-config/test.yml?branch=main&style=flat-square&logo=github&label=test)](https://github.com/Mann-Conomy/typescript-eslint-config/blob/main/.github/workflows/test.yml)
[![GitHub license](https://img.shields.io/github/license/Mann-Conomy/typescript-eslint-config?style=flat-square&logo=github)](https://github.com/Mann-Conomy/typescript-eslint-config/blob/main/LICENSE)

## Installation

Using [npm](https://www.npmjs.com/package/@mann-conomy/typescript-eslint-config):

```bash
$ npm install --save-dev @mann-conomy/typescript-eslint-config
```

Using [yarn](https://yarnpkg.com/package/@mann-conomy/typescript-eslint-config):

```bash
$ yarn add --dev @mann-conomy/typescript-eslint-config
```

## Usage

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
        "no-control-regex": "off"
    }
});
```

For reference, you can find the complete [TypeScript ESLint config here](https://github.com/Mann-Conomy/typescript-eslint-config/blob/main/eslint.config.js).

## License

[MIT](LICENSE)

Copyright 2024, The Mann-Conomy Project
