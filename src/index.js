const express = require("express");
const createImage = require("./createImage");

const { SERVER_PORT } = process.env;
const port = parseInt(SERVER_PORT, 10) || 8080;

const server = express();
server.disable("x-powered-by");
server.get("/", (req, res) => createImage(req, res));

server.get("/defined.png", (req, res) => {
  req.query = {
    text: "defined image",
    fontColor: "white",
    fontWeight: "bold",
    fontFamily: "Indie Flower",
    xPos: "300",
    yPos: "220"
  };

  return createImage(req, res);
});

server.listen(port, err => {
  if (err) throw err;

  console.info(`🚀  Server ready at http://localhost:${port}`);
});
