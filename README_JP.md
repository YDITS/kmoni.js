# Kmoni.js

[Read in English →](./README.md)

## 概要

**Kmoni.js** は、[防災科学技術研究所（NIED）](https://www.bosai.go.jp/)が提供する強震モニタのJSONデータを扱うJavaScriptライブラリです。

## 利用方法

### パッケージをインストールする

```bash
npm install git+https://github.com/YDITS/kmoni.js.git
```

### パッケージをインポートする

TypeScript:
```ts
import { KmoniClient } = from "kmoni.js/src/index.js";
```

JavaScript (ビルド後):
```js
import { KmoniClient } = from "kmoni.js/dist/index.js";
```

## ビルド

### 1. パッケージをインストールする

```bash
npm install
```

### 2. ビルド

JavaScript にコンパイルします。

```bash
npm run build
```

コンパイルされたJavaScriptファイルが `dist/` ディレクトリに出力されます。

## ライセンス

[MIT License](./LICENSE) のもとでライセンスされます。

Copyright (C) よね/Yone
