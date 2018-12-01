

const buildData = require('../dummyData.js');
const model = require('../../server/models/reviewModel.js');

var fs = require('fs');

const total = 40000000;

const bites = 100;
var mil = 0;

var stream = fs.createWriteStream('./reviews.csv');

console.log('generating reviews csv')

var i = 1;

var t0 = Math.round((new Date().getTime())/1000);
var t =  Math.round((new Date().getTime())/1000);

var count = 0; 
//var batch = 'id;userId;restaurantId;overallRating;foodRating;serviceRating;ambienceRating;valueRating;noiseLevel;dinedDate;reviewText;isRecommended;recommendFor';
var batch = 'id;userid;restaurantid;dineddate;overallrating;stringified;reviewtext;recommendfor' 
stream.write(batch);

const batchGenerator = (num) => { // i is global

  let batchBuilder ='';
  for(let j = 0; j < num; j++){
    batchBuilder +=  `\n${i++};${model.addReview(buildData.reviewDataMaker())}`  
  }

  return batchBuilder;
}

stream.on('drain', function() {
  write();
});

write();

function write() {    

  while(i<total){

    if((i-1)%1000000===0){
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
