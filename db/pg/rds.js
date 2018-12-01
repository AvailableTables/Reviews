const { Client } = require('pg');

module.exports =  new Client({
  host: 'reviewpg11.ci7ej4esfgf3.us-east-2.rds-preview.amazonaws.com',
  user:'AvailableTable',  
  database: 'reviewsdb',
  password: 'HackReactor18'
})
