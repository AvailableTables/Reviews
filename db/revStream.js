
//node --inspect ./db/revStream.js
//node ./db/revStream.js
/*
const buildData = require('./dummyData.js');
const model = require('../server/models/reviewModel.js');
var fs = require('fs')

const file = fs.createWriteStream('./db/test.csv');
var i = 1; 
const logEnd = () => {
  console.log(`batching appended up to ${i}`)
}
const streamGenerate = (batch, max) => {
  //maybe include req(build data ) to see if it clears the stack
  let str;
  if (i===1){
     str = 'id; userId; restaurantId; overallRating; foodRating; serviceRating; ambienceRating; valueRating; noiseLevel; dinedDate; reviewText; isRecommended; recommendFor'
  } else{
     str = ''
  }
  let count = 0

  while(count < batch) {
    str += `\n ${i}; ${model.addReview(buildData.reviewDataMaker())}`;
    i += 1;
    count +=1;
  }

  const isDone = file.write(str)
  console.log(i)
  //if i is less than the max, 
  if(i<max){
    console.log('i<max')
    file.once('drain', ()=>{
      streamGenerate(batch, max)
    });
  } else {

    file.once('drain', logEnd)

  }
}

streamGenerate(10, 100); 

*/
const buildData = require('./dummyData.js');
const model = require('../server/models/reviewModel.js');
var fs = require('fs');
// var stream = fs.createWriteStream(__dirname + '/out.csv');
var stream = fs.createWriteStream('reviews.csv');
var i = 0;
//var str = `\n ${i}; ${model.addReview(buildData.reviewDataMaker())}`;
var str = 'id; userId; restaurantId; overallRating; foodRating; serviceRating; ambienceRating; valueRating; noiseLevel; dinedDate; reviewText; isRecommended; recommendFor';
stream.write(str);
stream.on('drain', function() {
  //console.log(i, 'drained')
  if(i%5000000 === 0){
    console.log(i)
  }
  write();
});
write();

function write() {
  while (i < 100000000) { 
    str = `\n ${i++}; ${model.addReview(buildData.reviewDataMaker())}`;
   
    if (!stream.write(str)) {
      //console.log(i, 'return')
      return;
    }
  }
  console.log(i, 'end')
  stream.end();
}





/*
const buildData = require('./dummyData.js');
const model = require('../server/models/reviewModel.js');
var fs = require('fs')

var file = fs.createWriteStream('./db/test.csv');
var i = 1;
file.write('id; userId; restaurantId; overallRating; foodRating; serviceRating; ambienceRating; valueRating; noiseLevel; dinedDate; reviewText; isRecommended; recommendFor');
let count = 0;
let drain = 0;



function streamGenerate() {
  if (i++ < 6000000) {
    count += 1;
    file.write(`\n ${i}; ${model.addReview(buildData.reviewDataMaker())}`);

    if(i%1e6 === 0) {console.log('mill', i)}

    // if(i === 5000000) {}
    if(count> 10000) {
      count = 0;
      // drain +=1;
      file.on('drain', streamGenerate);
    } else {
      
      process.nextTick(streamGenerate);
    }
  }
} 
streamGenerate();
*/







