const todo = require('../models/Todos')
class SiteController{
    index(req, res, next){
        
        todo.find()
       .then(todo =>{
           res.render('pages/index.ejs', {todos: todo })
       })
       .catch(next);
    }
    pagenotfound(req, res, next){
        res.send('PAGE NOT FOUND');
    }
    aboutpage(req, res, next){
        res.render('pages/about.ejs');
    }
}
module.exports = new SiteController;