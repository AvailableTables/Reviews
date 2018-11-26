//cat redisRev.txt | redis-cli --pipe
// LRANGE id:1000000 0 1

const buildData = require('./../dummyData.js');
const model = require('../../server/models/reviewModel.js');

var fs = require('fs');

var zlib = require('zlib');

var key = 'add_your_key_here for redisKey';

var async = '';

const total = 10000000;
// const total = 500

const bites = 50;
var mil = 0;

var stream = fs.createWriteStream('./redisRev.txt');

console.log('generating redis reviews csv');

var i = 0000001;

var t0 = Math.round(new Date().getTime() / 1000);
var t = Math.round(new Date().getTime() / 1000);
var rand = 1;
var batchBuilder = '';

var count = 0;
var batch = '';

const batchGenerator = num => {
  // i is global
  batchBuilder = '';
  for (let j = 0; j < num; j++) {
    rand = Math.ceil(Math.random() * 6) - 1;

    if (!rand) {
      i++;
      continue;
    }

    batchBuilder += `LPUSH id:${i++} "`;

    for (let k = 0; k < rand; k++) {
      batchBuilder += `${model.redisReview(buildData.redisReviewData())}|`;
    }
    batchBuilder += `"\n`;

    //var def = zlib.deflateSync(batchBuilder).toString('base64')
    //comprBatch+=`LPUSH id:${i++} "${def}"\n`
  }
  return batchBuilder;
};

stream.on('drain', function() {
  write();
});

write();

function write() {
  while (i < total) {
    if ((i - 1) % 1000000 === 0) {
      //%1000000
      console.log(
        mil++,
        'M time:',
        Math.round(new Date().getTime() / 1000) - t,
        's',
        i
      );
      t = Math.round(new Date().getTime() / 1000);
    }
    let batch = batchGenerator(bites);
    if (!stream.write(batch)) {
      return;
    }
  }
  let t1 = Math.round(new Date().getTime() / 1000);
  console.log(
    `${Math.round((i - 1) / 1000000)}M total, chunks of ${bites} \n${Math.floor(
      (t1 - t0) / 60
    )}min ${(t1 - t0) % 60}s`
  );
  stream.end();
}
