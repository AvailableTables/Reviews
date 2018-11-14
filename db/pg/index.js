/*const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/practice', { logging: false, operatorsAliases: false });
db.sync({ force:true })
.then(() => create())

const create = () => {
  const User = db.define('user', {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    hometown: {
      type: Sequelize.STRING,
    },
    numofreviews: {
      type: Sequelize.INTEGER,
    }
  })

  User.create({
    username: 'Jon',
    hometown: 'Vale',
    numofreviews: 3,
    vip: true,
  })
    .then(user => console.log(user.username))

  User.findAll({
    where: {
      username: 'Jon'
    }
  })
    .then(user => console.log(`${user.username} found`))
}   */





// module.exports = db;

//const mysql = require('mysql');

// if (process.env.USER && process.env.PASSWORD) {
//   var user = process.env.USER;
//   var password = process.env.PASSWORD;
// } else {
//   const info = {
//     host: 'localhost',
//     dbuser: 'AvailableTable',
//     database: 'tableOpenReviews',
//     password: 'reviews'
//     // port: process.env.POSTGRES_PORT || 5432,
//   };

//   //const info = require('./pgconfig.js');
//   var user = info.user;
//   var password = info.password;
// }

//psql -h server -d databasename -U username -f data.sql


//console.log(info.user, info.password)

// const pool = mysql.createPool({
//   // host: 'tableopen-reviews-db-free.ctqqauvpyeqz.us-east-1.rds.amazonaws.com',
//   //port: 3306,
//   host: localhost,
//   user: user,
//   password: password,
//   database: 'tableOpenReviews'
// });


const {Pool, Client} = require('pg') //lookup fs.append
const fs = require('fs')



const buildData = require('../dummyData.js');
const model = require('../../server/models/reviewModel.js');

// for (let x = 0; x < 100; x++) {
//   model.addUser(buildData.userDataMaker(), () => {});
// }



// fs.appendFile('./db/pg/message.txt', 'data ', (err) => {
//   if (err) throw err;
//   console.log('The "data to append" was appended to file!');
// });





const client = new Client({
  host: 'localhost',
  //user: 'availabletable',    // "pgseed": "psql -U availabletable postgres -f ./db/pg/testsch.sql",

  user:'postgres',
  database: 'practice',
  password: 'reviews'
  //,  port: 3211
})
client.connect()
  .then(()=>{console.log('connected to db')})
  .catch((err)=>{( err)=> console.log(err)})

// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()

// })


// const queryReq = {
//   text: 'INSERT INTO users(username, hometown, numofreviews, vip) VALUES($1, $2, $3, $4)',
//   values: ['jon', 'Vale', 5, 1]
// }

//INSERT INTO tests(username)


const queryReq = `\COPY users(id, username, hometown, numOfReviews, vip) FROM 'users.csv' DELIMITER ';' CSV HEADER;`
// \COPY users(id, username, hometown, numOfReviews, vip) FROM 'users.csv' DELIMITER ';' CSV HEADER;
// \COPY restaurants(id, location, lovedfor) FROM 'restaurants.csv' DELIMITER ';' CSV HEADER;
// \COPY reviews(id, userId, restaurantId, overallRating, foodRating, serviceRating, ambienceRating, valueRating, noiseLevel, dinedDate, reviewText, isRecommended, recommendFor) FROM 'reviews.csv' DELIMITER ';' CSV HEADER;


// const queryReq = {
//   text: 'INSERT INTO users(username, numofreviews, hometown, vip) VALUES($1, $2, $3, $4)', 
//   values: ['john', 12,  'Vale', 1]
// }






// promise
client.query(queryReq)
  // .then(res => console.log(res.rows))
  .then(res=>console.log('queried done'))
  .catch(e => console.error(e.stack, e))

  .then(()=>{
    client.end(()=>{console.log('disconnected from db')})
  })
  


// const client = new Client({
//   user: 'dbuser',
//   host: 'database.server.com',
//   database: 'mydb',
//   password: 'secretpassword',
//   port: 3211,
// })
// client.connect()

// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })

// module.exports = pool;

