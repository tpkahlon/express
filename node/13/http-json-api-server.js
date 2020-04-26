const http = require("http");
const url = require("url");
const server = http.createServer();
server.listen(process.argv[2]);

parseTime = (url, res) => {
  if (!url.query.iso) {
    throw new Error();
  }

  const date = new Date(url.query.iso);
  const formattedResponse = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(formattedResponse));
};

unixTime = (url, res) => {
  if (!url.query.iso) {
    throw new Error();
  }

  const date = new Date(url.query.iso);
  const formattedResponse = {
    unixtime: date.getTime(),
  };

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(formattedResponse));
};

server.on("request", (req, res) => {
  try {
    const myUrl = url.parse(req.url, true);

    switch (myUrl.pathname) {
      case "/api/parsetime":
        parseTime(myUrl, res);
        break;
      case "/api/unixtime":
        unixTime(myUrl, res);
        break;
      default:
        throw new Error();
    }

    throw new Error();
  } catch (error) {
    res.statusCode = 404;
    res.end();
  }
});
