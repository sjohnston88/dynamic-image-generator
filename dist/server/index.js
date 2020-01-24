"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _createImage = _interopRequireDefault(require("../app/createImage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  SERVER_PORT
} = process.env;
const port = parseInt(SERVER_PORT, 10) || 8080;
const server = (0, _express.default)();
server.disable('x-powered-by');
server.get('/', (req, res) => (0, _createImage.default)(req, res));
server.get('/defined.png', (req, res) => {
  req.query = {
    text: 'defined image',
    fontColor: 'white',
    fontWeight: 'bold',
    fontFamily: 'Indie Flower',
    xPos: '300',
    yPos: '220'
  };
  return (0, _createImage.default)(req, res);
});

const startServer = () => server.listen(port, err => {
  if (err) throw err;
  console.info(`🚀  Server ready at http://localhost:${port}`);
});

var _default = startServer;
exports.default = _default;