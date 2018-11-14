const buildData = require('./dummyData.js');
const model = require('../server/models/reviewModel.js');
// const db = require('./index.js');
const fs = require('fs')
//const fsPromises = fs.promises
var Promise = require("bluebird");
var appendFileProm = Promise.promisify(fs.appendFile);


//write stream


// for (let x = 0; x < 1000; x++) {
//   model.addReview(buildData.reviewDataMaker(), () => {});
// }

// fsPromises.appendFile


let amount = 500000;
//let str = 'id; userId; restaurantId; overallRating; foodRating; serviceRating; ambienceRating; valueRating; noiseLevel; dinedDate; reviewText; isRecommended; recommendFor' 
let str = ''
let x;
let count = 500000*10;
let row = ''
for (x = 0; x <= amount; x++) {
  count += 1;
  row = `\n ${count}; ${model.addReview(buildData.reviewDataMaker(), () => {})}`
  str += row;
}

// let store = [];
// store[0] = 'id; userId; restaurantId; overallRating; foodRating; serviceRating; ambienceRating; valueRating; noiseLevel; dinedDate; reviewText; isRecommended; recommendFor';

// for( let i = 1; i < 20; i++){
//   store[i] = '';
//   for (x = 0; x <= amount; x++) {
//     count += 1;
//     row = `\n ${count}; ${model.addReview(buildData.reviewDataMaker(), () => {})}`
//     store[i] += row;
//   }
// }
// console.log(count, store[0])


 

fs.appendFile('./reviews.csv', `${str}`, (err) => {
  if (err) throw err;
   console.log('The reviews were appended to file!');
});

// appendFileProm('./reviews.csv', `${str}`)
//   .then(()=> console.log('works'))
//   .catch((err)=> console.log(err))



  // let save = (repos) => {
  //   return Promise.all(repos.map(repo => {
  //     return Repo.findOneAndUpdate(
  //       {url: repo.url},
  //       {
  //         url: repo.url,
  //         name: repo.name,
  //         stars: repo.stargazers_count,
  //         id: repo.id,
  //         owner: repo.owner.login
  //       },
  //       {upsert: true}
  //     ).exec()
  //   }))
  //  }










  // Promise.all(store.map(chunk => {
  //   let app = ''
  //   for (x = 0; x <= amount; x++) {
  //     count += 1;
  //     row = `\n ${count}; ${model.addReview(buildData.reviewDataMaker(), () => {})}`
  //     app += row;
  //   }
  
  //   return fs.appendFile('./reviews.csv', `${app}`, (err) => {
  //     if (err) throw err;
  //   });
  
  // }))