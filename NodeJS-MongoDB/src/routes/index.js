const newsRouter = require('./news.js');
const siteRouter = require('./site.js');
const coursesRouter = require('./courses.js');
const meRouter = require('./me.js');
function route(app) {
  
  app.use('/news', newsRouter);
  app.use('/courses', coursesRouter);
  app.use('/me', meRouter);
  app.use('/', siteRouter);
}

module.exports = route;
