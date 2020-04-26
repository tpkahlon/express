# @tpkahlon/tiny

[![npm (scoped)](https://img.shields.io/npm/v/@tpkahlon/tiny.svg)](https://www.npmjs.com/package/@bamblehorse/tiny)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@tpkahlon/tiny.svg)](https://www.npmjs.com/package/@tpkahlon/tiny)

Removes all spaces from a string.

## Install

```js
npm i @tpkahlon/tiny
```

## Usage

```js
const tiny = require("@tpkahlon/tiny");

tiny("So much space!");
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```
