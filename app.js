const koa = require('koa'),
      router = require('koa-router')(),
      one = require('./lib/router/one'),
      render = require('./lib/render');

global.BASE_PATH = __dirname;

var app = new koa();
app.use(render());

app.use(router.routes())
.use(router.allowedMethods());

one(router);

app.listen(8886,function () {
  console.log('listen at 8886')
})
