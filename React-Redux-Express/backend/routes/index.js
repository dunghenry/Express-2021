const siteRouter = require('./site.js');
function route(app){
    app.use('/', siteRouter);
}

module.exports = route;