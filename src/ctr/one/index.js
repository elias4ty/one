exports.getHtml = async (ctx) => {
    console.log('index')
    ctx.body = this.nun.render('one/index.html',{
      title : 'shouye'
    });
}
