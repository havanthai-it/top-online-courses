const mongoose = require('mongoose');

const Course = require('./course.model');

class CourseDao {

  static async get(id) {
    return Course.find({ _id: mongoose.Types.ObjectId(id) }).exec();
  }

  static async getAll() {
    return Course.find({}).exec();
  }

  static async insert(course) {
    return course.save();
  }

}

module.exports = CourseDao;
