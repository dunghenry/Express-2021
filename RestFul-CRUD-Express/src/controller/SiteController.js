class SiteController{
    home(req, res){
        res.render('home.ejs')
    }
    pagenotfound(req, res){
        res.send("Page Not Found")
    }
    createUser(req, res){
        res.render('create-user.ejs')
    }
}

module.exports = new SiteController;