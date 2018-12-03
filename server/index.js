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
console.log(application, 'headers')


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
// app.use(compression);



app.listen(3020, () => {
  console.log('Listening on port 3020...');
});




// const model = require('./model.js');
// const React = require('react');
// const ReactDOMServer = require('react-dom/server');
// const application = require('../client/dist/review-bundle-server.js').default;

// const ssr = (id) => {
//   let props;
//   let html;

//   return Promise.all([
//     // 0: reviews
//   model.getAllReviews(Number(id))
//   .then((response) => {
//     return response.rows;
//   })
//   .then((data) => {
//     props = {
//       reviews: data[0], 
//       ratings: data[1], 
//       search: [], 
//       showSearch: false
//     }
//     props.reviews.forEach((review) => {
//       review.review_date = review.review_date.toISOString();
//     })
//     props.ratings.forEach((rating) => {
//       for (var category in rating) {
//         rating[category] *= 1;
//       }
//     })
//     let component = React.createElement(application, props);
//     html = ReactDOMServer.renderToString(component);
//     return [html, JSON.stringify(props)];
//   })
//   .catch((err) => { 
//     console.error(err); 
//   }) ])
// }

