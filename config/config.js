module.exports = {
  development: {
    username: 'root',
    password: 'root',
    database: 'ProductGridSort',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: 'root',
    database: 'ProductGridSort',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: process.env.REACT_APP_DB_USERNAME,
    password: process.env.REACT_APP_DB_PASSWORD,
    database: process.env.REACT_APP_DB_DATABASE,
    host: process.env.REACT_APP_DB_HOST,
    dialect: 'mysql',
  },
};
