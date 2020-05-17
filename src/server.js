const express = require('express');

const port = 3000;

const server = express();

server.use(express.json());

const routes = require('./routes');

server.use('/books', routes);

server.listen(port);
