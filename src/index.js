'use strict';
const micro = require('micro');
const chalk = require('chalk');
const cors = require('./cors');
const PORT = 5000;

const handler = cors((req, res) => {
  res.end('Hello World');
});

const server = micro(handler);

server.listen(PORT);

console.log(chalk.cyan('Listening on port %d'), PORT);
