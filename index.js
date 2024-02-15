const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("./index.html");
const about = fs.readFileSync("./about.html");
const contactMe = fs.readFileSync("./contact-me.html");
const notFound = fs.readFileSync("./404.html");
http
  .createServer(function (req, res) {
    const url = req.url;
    handleUrl(url, res);
  })
  .listen(8080);

function handleUrl(url, res) {
  if (url === "/") {
    serveFile(res, index);
  } else if (url === "/about") {
    serveFile(res, about);
  } else if (url === "/contact-me") {
    serveFile(res, contactMe);
  } else {
    serveFile(res, notFound, 404);
  }
}

function serveFile(res, file, status = 200) {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(status);
  res.end(file);
}
