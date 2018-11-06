const buildData = require('./dummyData.js');
const model = require('../server/models/reviewModel.js');
const db = require('./index.js');

for (let x = 0; x < 10000; x++) {
  model.addReview(buildData.reviewDataMaker())
    .done();
}

db.end();