const CategoryDao = require('./category.dao');

class CategoryService {
  
  static async get(id) {
    return CategoryDao.get(id);
  }

  static async getAll() {
    return CategoryDao.getAll();
  }

}

module.exports = CategoryService;
