const CourseDao = require('./course.dao');

class CourseService {
  
  static async get(id) {
    return CourseDao.get(id);
  }

  static async getAll() {
    return CourseDao.getAll();
  }

  static async insert(course) {
    return CourseDao.insert(course);
  }

}

module.exports = CourseService;
