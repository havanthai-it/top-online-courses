const PlatformDao = require('./platform.dao');

class PlatformService {

  static async getAll() {
    return PlatformDao.getAll();
  }

  static async insert(platform) {
    return PlatformDao.insert(platform);
  }

}

module.exports = PlatformService;
