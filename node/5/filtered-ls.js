"use strict";

const fs = require("fs");

const dirPath = process.argv[2];
const fileExt = process.argv[3];

fs.readdir(dirPath, function (err, data) {
  if (err) return console.log(err);
  const files = data.toString().split(",");
  for (var i = 0; i <= files.length - 1; i++) {
    if (!files[i].includes(".")) continue;
    const currentFile = files[i].split(".");
    const currentFileExt = currentFile[currentFile.length - 1];
    if (currentFileExt === fileExt) {
      console.log(files[i]);
    }
  }
});
