const fs = require('fs');
const { Client } = require('pg');
var copyFrom = require('pg-copy-streams').from;
const client = require('./rds.js')


const tables = [
  ['restaurants', 'id, location, lovedfor'],
  ['users', 'id, username, hometown, numOfReviews, vip'],
  [
    'reviews',
    'id, userid,restaurantid, dineddate, overallrating, stringified, reviewtext, recommendfor'
  ]
];
var i = 0; //starting populate
const t0 = Math.round(new Date().getTime() / 1000);
var t = Math.round(new Date().getTime() / 1000);

/*   Manual insert from psql terminal
\COPY users(id, username, hometown, numOfReviews, vip) FROM 'users.csv' DELIMITER ';' CSV HEADER;
\COPY restaurants(id, location, lovedfor) FROM 'restaurants.csv' DELIMITER ';' CSV HEADER;
\COPY reviews(id, userId, restaurantId, overallRating, foodRating, serviceRating, ambienceRating, valueRating, noiseLevel, dinedDate, reviewText, isRecommended, recommendFor) FROM 'reviews.csv' DELIMITER ';' CSV HEADER;
*/

// const client = new Client({
//   user: 'lotter',
//   database: 'reviewsdb'
// });

const loadData = (callback, table) => {
  console.log('populating' + tables[i]);
  console.log(
    `COPY ${table[0]}(${table[1]}) FROM STDIN DELIMITER ';' CSV HEADER`
  );

  const streamCSV = fs.createReadStream(`./${table[0]}.csv`); //CSV FILE CONNECTION
  const streamPg = client.query(
    copyFrom(
      `COPY ${table[0]}(${table[1]}) FROM STDIN DELIMITER ';' CSV HEADER`
    )
  ); //DATABASE CONNECTION
  streamCSV.on('error', err => {
    console.log('error in reading file: ', err);
  });
  streamPg.on('error', err => {
    console.log('error in copy command: ', err);
    client.query(`VACUUM(FULL, ANALYZE) ${table[0]}`);
  });
  streamPg.on('end', () => {
    console.log('file loaded');
    console.log(
      Math.round(new Date().getTime() / 1000) - t,
      'seconds to populate' + table[0]
    );
    t = Math.round(new Date().getTime() / 1000);
    i += 1;
    if (i < tables.length) {
      callback();
    } else {
      console.log(
        `populated all in ${Math.floor((t - t0) / 60)} mins ${(t - t0) % 60}s`
      );

      client.end();
    }
  });

  streamCSV.pipe(streamPg);
};

const nextPipe = () => {
  client.connect(() => {
    console.log('connected to db');
    loadData(nextPipe, tables[i]);
  });
};

nextPipe();
