const index = require('../../src/ctr/one/index');

module.exports = function(router){
  console.log('aaa')
  router.get('/',index.getCtr);
}
