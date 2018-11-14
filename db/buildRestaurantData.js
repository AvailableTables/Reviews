const buildData = require('./dummyData.js');
const model = require('../server/models/reviewModel.js');
//const db = require('./index.js');

// for (let x = 0; x < 100; x++) {
//   model.addRestaurant(buildData.restaurantDataMaker(), () => {});
// }
const fs = require('fs');



let amount = 1000000;
let str = 'id; location; lovedfor'
let x
for (x = 0; x <= amount; x++) {
  str += model.addRestaurant(buildData.restaurantDataMaker(), () => {});
}

console.log('restaurants')
fs.appendFile('./restaurants.csv', `${str}`, (err) => {
  if (err) throw err;
   console.log('The "restaurant random data" was appended to file!');
});
