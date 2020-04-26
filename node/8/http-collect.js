const http = require("http");

function cb(response) {
  response.setEncoding("utf8");
  let data = "";
  response.on("data", function (chunk) {
    data += chunk;
  });
  response.on("end", function () {
    console.log(data.length);
    console.log(data);
  });
}

http.get(process.argv[2], cb);
// http.get("http://www.google.com", cb);
