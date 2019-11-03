const config = {
  app: {
    name: process.env.APP_NAME || 'TOC Service',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 4000
  },
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 27017,
    username: process.env.DB_USER || 'havanthai',
    password: process.env.DB_PASS || 'havanthai',
    database: process.env.DB_NAME || 'toc'
  }
}

module.exports = config;
