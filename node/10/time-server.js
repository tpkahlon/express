const net = require("net");
const port = Number(process.argv[2]);

const addZeroBefore = (n) => {
  return (n < 10 ? "0" : "") + n;
};

const myAction = (socket) => {
  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = addZeroBefore(date.getMonth() + 1);
  const dd = addZeroBefore(date.getDate());
  const hh = addZeroBefore(date.getHours());
  const min = addZeroBefore(date.getMinutes());
  const format = `${yyyy}-${mm}-${dd} ${hh}:${min}`;
  socket.end(`${format}\n`);
};

const server = net.createServer(myAction);

server.listen(port, () => console.log(`Listening on port ${port}`));
