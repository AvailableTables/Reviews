const mysql = require('mysql');

if (process.env.USER && process.env.PASSWORD) {
  var user = process.env.USER;
  var password = process.env.PASSWORD;
} else {
  const info = require('../config.js');
  var user = info.user;
  var password = info.password;
}
console.log(info.user, info.password)

const pool = mysql.createPool({
  // host: 'tableopen-reviews-db-free.ctqqauvpyeqz.us-east-1.rds.amazonaws.com',
  //port: 3306,
  user: user,
  password: password,
  database: 'tableOpenReviews'
});

module.exports = pool;