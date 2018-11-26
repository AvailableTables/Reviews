const buildData = require('./dummyData.js');
const model = require('../server/models/reviewModel.js');
const db = require('./index.js');
const fs = require('fs')
var t0 = Math.round((new Date().getTime())/1000);
var t =  Math.round((new Date().getTime())/1000);
var mil = 0;

var stream = fs.createWriteStream('restaurants.csv');

const amount = 10000000;

let str = 'id; location; lovedfor'
let x = 1;
let chunk = ''
count = 0;

console.log('generating restaurants csv')
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

      chunk +=  `\n${x++};${model.addRestaurant(buildData.restaurantDataMaker())}`;
      count+=1;
    }
    count=0

    if((x-1)%1000000===0){
      console.log(mil++, 'M time:',  Math.round((new Date().getTime())/1000)-t, 's', x)
      t = Math.round((new Date().getTime())/1000);
    }
    if(!stream.write(chunk)){

      return;

    }

  }
  let t1 = Math.round((new Date().getTime())/1000);
  console.log(`${Math.round((x-1)/1000000)}M generated restaurant rows \n${Math.floor((t1 - t0)/60)}min ${((t1 - t0)%60)}s`)
  stream.end()

}


