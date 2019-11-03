const mongoose = require('mongoose');

const Category = require('./category.model');

class CategoryDao {

  static async get(id) {
    return Category.find({ _id: mongoose.Types.ObjectId(id) }).exec();
  }

  static async getAll() {
    return Category.find({}).exec();
  }

}

module.exports = CategoryDao;
