const nunjucks = require('nunjucks');

module.exports = function(){

    return function* (next){
        console.log('123123',global.BASE_PATH+'/src/views')
        this.nun = nunjucks.configure(global.BASE_PATH+'/src/views',{
            watch : true
        })

        yield * next
    }
}
