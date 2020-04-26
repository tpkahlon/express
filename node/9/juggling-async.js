const async = require("async");
const fetch = require("node-fetch");
const urls = process.argv.slice(2);

const cb = async (url) => {
  if (!url.includes("http")) {
    return {
      message: "URL is not valid",
    };
  }
  const response = await fetch(new URL(url));
  const text = await response.text();
  return text;
};

async.map(urls, cb, (err, results) => {
  if (err) throw err;
  return results.forEach((result) => {
    if (result.message) return console.log(result.message);
    return console.log(result);
  });
});
