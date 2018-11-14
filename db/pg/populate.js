


// const buildData = require('./dummyData.js');
// const model = require('../server/models/reviewModel.js');

// for (let x = 0; x < 100; x++) {
//   model.addUser(buildData.userDataMaker(), () => {});
// }



  text= `\COPY restaurants(id, location, lovedfor) FROM 'restaurants.csv' DELIMITER ';' CSV HEADER;`



  const {Pool, Client} = require('pg') //lookup fs.append
  const fs = require('fs')


  const client = new Client({
    host: 'localhost',
    //user: 'availabletable',    // "pgseed": "psql -U availabletable postgres -f ./db/pg/testsch.sql",
  
    user:'postgres'
    // database: 'practice'       psql -U availabletable postgres -f ./db/pg/testsch.sql",

    //,  port: 3211
  })
  console.log('popul')
  client.connect()
  .then(()=>{console.log('connected to db')})
  .catch((err)=>{( err)=> console.log(err)})


  client.query(text)
    // .then(res => console.log(res.rows))
    .then(res=>console.log('queried done'))
    .catch(e => console.error(e.stack, e))
  
    .then(()=>{
      client.end(()=>{console.log('disconnected from db')})
    })
  


