const fs = require("fs");

module.exports = function (dirPath, extension, cb) {
  fs.readdir(dirPath.toString(), function (err, data) {
    if (err) return cb(err);
    const listings = [];
    const files = data.toString().split(",");
    for (let i = 0; i <= files.length - 1; i++) {
      if (!files[i].includes(".")) continue;
      const currentFile = files[i].split(".");
      const currentFileExt = currentFile[currentFile.length - 1];
      if (currentFileExt === extension) {
        listings.push(files[i]);
      }
    }
    return cb(null, listings);
  });
};
