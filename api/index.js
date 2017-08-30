'use strict';
import Koa from 'koa';
import router from 'koa-router';
import logger from 'koa-logger';
import compress from 'koa-compress';

const app = new Koa();

app.use(compress());
app.use(logger());

const server = app.listen(5000);

console.dir(server);

export default app;
