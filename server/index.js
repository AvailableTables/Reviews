// const newRelic = require('newrelic');
const express = require('express');
const parser = require('body-parser');
const path = require('path');
const router = require('./routes/routes.js');
const compression = require('compression');
const morgan = require('morgan');
const controller = require('./controllers/controller.js').getAllReviews;
const application = require('../client/dist/bundle-server.js').default;


const app = express();
const client = require('../db/pg/rdspool.js');
app.use(compression());


client.connect();

app.use(morgan('dev'));
app.use(parser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.all('/*', function(req, res, next) {

  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/restaurants/:id', controller)

app.get('/favicon.ico', (req, res) => {
  res.send();
});

app.use('/API/Reviews', router);



app.listen(3020, () => {
  console.log('Listening on port 3020...');
});

