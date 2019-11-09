const mongoose = require('mongoose');

const Platform = require('./platform.model');

class PlatformeDao {

  static async getAll() {
    return Platform.find({}).exec();
  }

  static async insert(platform) {
    return platform.save();
  }

}

module.exports = PlatformeDao;
