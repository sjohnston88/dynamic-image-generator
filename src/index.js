const express = require("express");
const path = require("path");
const createImage = require("./createImage");

const { SERVER_PORT } = process.env;
const port = parseInt(SERVER_PORT, 10) || 8080;

const server = express();
server.disable("x-powered-by");
server.use(express.static("images"));

server.get("/", (req, res) => {
  return createImage(req, res);
});

server.listen(port, err => {
  if (err) throw err;

  // eslint-disable-next-line no-console
  console.info(`🚀  Server ready at http://localhost:${port}`);
});
