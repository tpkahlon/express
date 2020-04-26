const mymodule = require("./mymodule");

const cb = function (err, data) {
  if (err) {
    console.log(err);
    return;
  }
  return data.forEach((f) => console.log(f));
};

mymodule(process.argv[2], process.argv[3], cb);
