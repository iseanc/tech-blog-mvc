const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

// const sequelize = new Sequelize(
//   // Database name
//   'blog_db',
//   // User
//   'root',
//   // Password
//   'password',
//   {
//     // Database location
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306
//   }
// );

module.exports = sequelize;