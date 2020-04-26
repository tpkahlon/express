const fs = require("fs");
const http = require("http");
const port = Number(process.argv[2]);

const server = http.createServer((req, res) => {
  const file = process.argv[3];
  const readStream = fs.createReadStream(file);
  res.writeHead(200, { "content-type": "text/plain" });
  readStream.pipe(res);
  readStream.on("error", (err) => {
    res.end(err);
  });
});

server.listen(port, () =>
  console.log(`Your server is running at port ${port}`)
);
