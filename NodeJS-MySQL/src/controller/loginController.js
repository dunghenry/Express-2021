let getLoginpage = (req, res) => {
    return res.render('login.ejs')
}

module.exports = {
    getLoginpage,
}