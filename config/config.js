var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'bdw-blog'
    },
    port: 3000,
    db: 'mongodb://heroku_app35487756:1nab8042pott90dsqm3c323a2v@ds059651.mongolab.com:59651/heroku_app35487756'
  },

  test: {
    root: rootPath,
    app: {
      name: 'demo-api'
    },
    port: 3000,
    db: 'mongodb://localhost/bdw-blog-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'demo-api'
    },
    port: 3000,
    db: 'mongodb://localhost/bdw-blog-production'
  }
};

module.exports = config[env];
