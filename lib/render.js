const nunjucks = require('nunjucks');

module.exports = function(){
    console.log('3333')
    return async (ctx,next) => {
        console.log('666')
        this.nun = nunjucks.configure(global.BASE_PATH+'/src/views',{
            watch : true
        })

        await next()
    }
}
