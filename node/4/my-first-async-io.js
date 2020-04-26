"use strict";

const fs = require("fs");

fs.readFile(process.argv[2], function (err, data) {
  if (err) return console.log(err);
  return console.log(data.toString().split("\n").length - 1);
});
