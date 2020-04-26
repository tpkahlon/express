const http = require("http");

function cb(response) {
  response.setEncoding("utf8");
  response.on("data", function (data) {
    console.log(data);
  });
}

http.get(process.argv[2], cb);
// http.get("http://www.google.com", cb);
