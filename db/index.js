
const {Client} = require('pg')

module.exports =  new Client({
  user:'lotter',  
  database: 'reviewsdb'
})
