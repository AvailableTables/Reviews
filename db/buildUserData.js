const buildData = require('./dummyData.js');
const model = require('../server/models/reviewModel.js');
const db = require('./index.js');
const fs = require('fs')

let amount = 1000000;
let str = 'id; username; hometown; numOfReviews; vip'
let x
for (x = 0; x <= amount; x++) {
  str += model.addUser(buildData.userDataMaker(), () => {});
}

console.log('app')
fs.appendFile('./users.csv', `${str}`, (err) => {
  if (err) throw err;
   console.log('The "data to append" was appended to file!');
});

//  console.log(str);
