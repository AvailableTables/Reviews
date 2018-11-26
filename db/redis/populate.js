const fs = require('fs');

var Redis = require('ioredis');
var redis = new Redis();

const loadData = (callback, table) => {
  console.log('populating' + tables[i]);

  const streamCSV = fs.createReadStream('fileid.csv'); //CSV FILE CONNECTION
  streamCSV.on('error', err => {
    console.log('error in reading file: ', err);
  });

  streamCSV.pipe(redis);
};

const nextPipe = () => {};

nextPipe();
