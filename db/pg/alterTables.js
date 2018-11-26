const fs = require('fs');
const { Client } = require('pg');

const recordTime = () => {
  return Math.round(new Date().getTime() / 1000);
};
const measureTime = (start, end) => {
  return `${Math.floor((end - start) / 60)} mins ${(end - start) % 60}s`;
};

var t0 = recordTime();
var t1 = recordTime();

const client = new Client({
  user: 'lotter',
  database: 'reviewsdb'
});

client.connect().then(() => {
  console.log('connected');
});

client
  .query('SELECT * from restaurants WHERE id=20')
  .then(q => {
    t1 = recordTime();
    console.log(`test query ${q} \n ${measureTime(t0, t1)}`);
    t0 = recordTime();
    return client.query('CREATE index ON reviews (restaurantid)');
  })
  //client.query('CREATE index ON reviews (restaurantid)')
  .then(() => {
    t1 = recordTime();
    console.log(`added index (restaurantid) in  \n ${measureTime(t0, t1)}`);
    t0 = recordTime();
    return client.query('CREATE unique index ON restaurants (id)');
  })
  .then(() => {
    t1 = recordTime();
    console.log(
      `added unique index ON  id in restaurants \n ${measureTime(t0, t1)}`
    );
    t0 = recordTime();
    return client.query('CREATE unique index ON users (id)');
  })
  .then(() => {
    t1 = recordTime();
    console.log(`added unique index ON id in users  \n ${measureTime(t0, t1)}`);
    //t0 =  recordTime;
    client.end();
  })
  .catch(err => {
    console.log(err);
  });
