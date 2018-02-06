exports.getCtr = function* (){
    console.log('index')
    this.body = this.nun.render('one/index.html',{
      title : 'shouye'
    });
}
