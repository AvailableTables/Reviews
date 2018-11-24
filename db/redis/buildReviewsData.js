//cat redisRev.csv | redis-cli --pipe
// LRANGE id:1000000 0 1

const buildData = require('./../dummyData.js');
const model = require('../../server/models/reviewModel.js');

var fs = require('fs');

var zlib = require('zlib'),

 
var key = 'add_your_key_here for redisKey';








var async = ''

const total = 100;
// const total = 500


const bites = 50;
var mil = 0;

var stream = fs.createWriteStream('./redisRev1.txt');

console.log('generating redis reviews csv')

var i = 0000001;

var t0 = Math.round((new Date().getTime())/1000);
var t =  Math.round((new Date().getTime())/1000);
var rand = 1;

var count = 0; 
//var batch = 'id;userId;restaurantId;overallRating;foodRating;serviceRating;ambienceRating;valueRating;noiseLevel;dinedDate;reviewText;isRecommended;recommendFor';
var batch = '' 
//     id;username;hometown;numOfReviews;vip;dineddate;overallrating;stringified;reviewtext;recommendfor
stream.write(batch);

 
const zip = zlib.deflate(redisValue, function (err, zippedValue) {
 
  if (err) {
    console.log('Error deflating!');
    return;
  }
  console.log(zippedValue, i)
 
  // you have to encode the binary zip-data to base64 to be able to read it
  // later
  // client.set(redisKey, zippedValue.toString('base64'), function (err) {

  // });
});


// const batchGenerator = (num) => { // i is global
//   let batchBuilder ='';
//   for(let j = 0; j < num; j++){
//     rand = Math.ceil(Math.random()*5)
//     for(let k = 0; k <= rand; k++){
//       // batchBuilder +=  `${i++};${model.addReview(buildData.reviewDataMaker())}\n`  
    
//       batchBuilder += `SADD id:${i} "${model.redisReview(buildData.redisReviewData())}"\n`  
//     }
//     i++
//   }
//   return batchBuilder;
// }
const batchGenerator = (num) => { // i is global
  let batchBuilder ='';
  for(let j = 0; j < num; j++){

    rand = Math.ceil(Math.random()*6)-1

    if(!rand) { 
      i++
      continue 
    };

    batchBuilder += `RPUSH id:${i++} "`

    for(let k = 0; k < rand; k++){
      // batchBuilder +=  `${i++};${model.addReview(buildData.reviewDataMaker())}\n`  
      
      batchBuilder += `${model.redisReview(buildData.redisReviewData())}|`  

    }
    batchBuilder += `"\n`


  }

  return batchBuilder;
}

stream.on('drain', function() {
  write();
});


write();

function write() {    

  while(i<total){

    if((i-1)%1000000===0){   //%1000000
      console.log(mil++, 'M time:',  Math.round((new Date().getTime())/1000)-t, 's', i)
      t = Math.round((new Date().getTime())/1000);
    }
    let batch = batchGenerator(bites)
    if (!stream.write(batch) ) {
      return;
    } 
  }
  let t1 = Math.round((new Date().getTime())/1000);
  console.log(`${Math.round((i-1)/1000000)}M total, chunks of ${bites} \n${Math.floor((t1 - t0)/60)}min ${((t1 - t0)%60)}s`)
  stream.end();
}



