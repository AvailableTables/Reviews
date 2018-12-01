
const {Pool} = require('pg')


//var conn = `postgres://AvailableTable:password@hostname/databasename`;
var conn = `postgres:AvailableTable:HackReactor18@AvailableTable/reviewdb`;

// var db = pgp({
//   endPoint = `reviewdb.cluxsppahke6.us-east-1.rds.amazonaws.com`,
//   user = 'AvailableTable',
//   password = 'HackReactor18',
//   port = 5432,

// //reviewdb.cluxsppahke6.us-east-1.rds.amazonaws.com

// })




// var endPoint = `reviewdb.cluxsppahke6.us-east-1.rds.amazonaws.com`
// var user = 'AvailableTable'


// psql -h reviewdb.cluxsppahke6.us-east-1.rds.amazonaws.com -d mydb -U AvailableTable -P HackReactor18


module.exports =  new Pool({
  host: 'reviewpg11.ci7ej4esfgf3.us-east-2.rds-preview.amazonaws.com',
  user:'AvailableTable',  
  database: 'reviewsdb',
  password: 'HackReactor18'
})
