# Kmoni.js

[日本語で読む →](./README_JP.md)

## Overview

**Kmoni.js** is a TypeScript/JavaScript library for handling JSON data provided by the Strong Motion Monitor of [the National Research Institute for Earth Science and Disaster Resilience (NIED)](https://www.bosai.go.jp/) in Japan.

## Usage

### Install Package

```bash
npm install git+https://github.com/YDITS/kmoni.js.git
```

### Import Package

TypeScript:
```ts
import { KmoniClient } from "kmoni.js/src/index.js";
```

JavaScript (after build):
```js
import { KmoniClient } from "kmoni.js/dist/index.js";
```

## Build

### 1. Install Packages

```bash
npm install
```

### 2. Build

Compile to JavaScript

```bash
npm run build
```

Emitted JavaScript files will be output to the `dist/` directory.

## License

Licensed under the [MIT License](./LICENSE).

Copyright (C) よね/Yone
