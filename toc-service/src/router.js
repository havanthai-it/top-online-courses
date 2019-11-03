const courseRoutes = require('./api/course/course.route');
const categoryRoutes = require('./api/category/category.route');

const initRoutes = (app) => {

  app.use('/api/v1/course', courseRoutes);
  app.use('/api/v1/category', categoryRoutes);

  app.use((req, res, next) => {
    const error = new Error('Not found!');
    error.status = 404;
    next(error);
  });
  
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
  });

}

module.exports = initRoutes;
