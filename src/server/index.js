import express from 'express';
import createImage from '../app/createImage';
import definedRoutes from '../app/definitions';

const { SERVER_PORT } = process.env;
const port = parseInt(SERVER_PORT, 10) || 8080;

const server = express();
server.disable('x-powered-by');

server.get('/', (req, res) => createImage(req, res));

definedRoutes.forEach(({ path, config }) => {
  server.get(`/${path}`, (req, res) => {
    return createImage(req, res, config);
  });
});

const startServer = () =>
  server.listen(port, err => {
    if (err) throw err;

    console.info(`🚀  Server ready at http://localhost:${port}`);
  });

export default startServer;
