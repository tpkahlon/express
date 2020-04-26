"use strict";

const fs = require("fs");

var wordsArray =
  fs.readFileSync(process.argv[2]).toString().split("\n").length - 1;

console.log(wordsArray);
