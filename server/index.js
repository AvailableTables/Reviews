const newRelic = require('newrelic');
const express = require('express');
const parser = require('body-parser');
const path = require('path');
const router = require('./routes/routes.js');
const compression = require('compression');

const app = express();
const client = require('../db/index.js');

client.connect();


app.use(parser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.all('/*', function(req, res, next) {
  // console.log('url', req.url )

  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/restaurants/*', (req, res) => {

  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  .catch((err)=>{
    console.log(err)
    client.close()
  })
});

app.get('/favicon.ico', (req, res) => {
  res.send();
});

app.use('/API/Reviews', router);
app.use(compression);

app.listen(3020, () => {
  console.log('Listening on port 3020...');
});