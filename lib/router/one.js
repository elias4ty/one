const index = require('../../src/ctr/one/index');

module.exports = function(router){
  router.get('/',async (ctx) => {
      console.log('index')
      ctx.body = this.nun.render('one/index.html',{
        title : 'shouye'
      });
  });
}
