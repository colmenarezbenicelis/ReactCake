let dotenv = require('dotenv').config();
const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host:  process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE
    }
  };
  module.exports = config;