"use strict";

require('@babel/register')({
  ignore: [/node_modules/],
  cache: true
});

const startServer = require('./server').default;

startServer();