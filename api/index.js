'use strict';
import 'babel-polyfill';
import Koa from 'koa';
import {
  resolve,
  join
} from 'path';
import koaRouter from 'koa-router';
import logger from 'koa-logger';
import compress from 'koa-compress';
import serve from 'koa-static-server';
import chalk from 'chalk';
const router = koaRouter();

const app = new Koa();

app.use(compress());
app.use(logger());
app.use(async(ctx, next) => {
  ctx.set({
    'Access-Control-Allow-Origin': '*',
    'something-more': 'is cool',
    blah: '2.0'
  });
  await next();
});

router.get('/something', ctx => ctx.body = 'Hello!')
app.use(router.routes());

app.use(async(ctx, next) => {
  console.log(chalk.red(ctx.path));
  console.log(chalk.yellow(__dirname));
  await next();
})
app.use(serve({
  rootDir: '../client/'
}));


app.listen(5000);

console.log(`Listening on port 5000`);

export default app;