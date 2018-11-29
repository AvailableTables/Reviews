const buildData = require('../dummyData.js');
const model = require('../../server/models/reviewModel.js');
const fs = require('fs')
var t0 = Math.round((new Date().getTime())/1000);
var t =  Math.round((new Date().getTime())/1000);
var mil = 0;


var stream = fs.createWriteStream('users.csv');

const amount = 20000000;

console.log('generating users csv')


let str = 'id; username; hometown; numOfReviews; vip'
let x = 1;
let chunk = ''
count = 0;

stream.write(str)


stream.on('drain', function() {
  // console.log('drain', i, count)
  generate();

});

generate();

function generate ()  {

  while(x < amount){

    chunk = ''

    while(count<50){

      chunk +=  `\n${x++};${model.addUser(buildData.userDataMaker())}`;
      count+=1;
    }

    count=0

    if((x-1)%1000000===0){
      console.log(mil++, 'M time:',  Math.round((new Date().getTime())/1000)-t, 's', x)
      t = Math.round((new Date().getTime())/1000);
    }
    // console.log(chunk, x, count)
    if(!stream.write(chunk)){

      return;

    }

  }

  let t1 = Math.round((new Date().getTime())/1000);
  console.log(`${Math.round((x-1)/1000000)}M generated users rows \n${Math.floor((t1 - t0)/60)}min ${((t1 - t0)%60)}s`)

  stream.end()

}

