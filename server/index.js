const express = require('express');
const parser = require('body-parser');
const path = require('path');
const router = require('./routes/routes.js');
const compression = require('compression');

const app = express();

app.use(parser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/restaurants/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.get('/favicon.ico', (req, res) => {
  res.send();
});

app.use('/API/Reviews', router);
app.use(compression);

app.listen(3020, () => {
  console.log('Listening on port 3020...');
});