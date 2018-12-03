const model = require('../models/reviewModel.js');
const ReactDom = require('react-dom/server');
const React = require('react');
const application = require('../../client/dist/bundle-server.js').default;



let getPages = (reviews) =>{
  let len = reviews.length;
  let i = 1;
  let array = [];
  while (len > 0) {
    array.push(i++);
    len -= 50;
  }
  return array;
}

exports.getAllReviews = (req, res) => {
  //t0 = recordTime();
  const choice = req.params.choice || 'Newest';
  let html;
  
  console.log('req',req.params.id)

  if(req.params.id){

    model.getAllReviews(req.params.id, choice, (results, err) => {
      // console.log(JSON.parse(JSON.stringify(results)).rows, req.query.id)
      //t1 = recordTime();
      //var batch = 'foodRating;serviceRating;ambienceRating;valueRating;noiseLevel;isRecommended';
      if(err) {
        res.status(501).send(err)
      }
      data = JSON.parse(JSON.stringify(results)).rows
  
      data.forEach(rest => {
        let info = rest.stringified.split(':')
        //foodRating, serviceRating, ambienceRating, noiseLevel, valueRating, isRecommended
        rest.foodrating  = info[0]*1;
        rest.servicerating  = info[1]*1;
        rest.ambiencerating  = info[3]*1;
        rest.noiselevel  = info[4]*1;
        rest.valuerating  = info[2]*1;
        rest.isrecommended  = info[5]*1;
        rest.dineddate *= 1;
      });
      // console.log('RESULT ROWS', results.rows)
      let len = data.length;
        let overallSum = 0;
        let overallCount = {
          5: 0,
          4: 0,
          3: 0,
          2: 0,
          1: 0
        };
        let otherSums = [0, 0, 0, 0];
        let noise = {
          count: 0,
          sum: 0
        };
        let recommend = {
          count: 0,
          sum: 0
        };
        data.forEach((review) => {
          overallSum += review.overallrating;
          overallCount[review.overallrating]++;
          otherSums[0] += review.foodrating;
          otherSums[1] += review.servicerating;
          otherSums[2] += review.ambiencerating;
          otherSums[3] += review.valuerating;
          if (review.noiselevel !== null) {
            noise.count++;
            noise.sum += review.noiselevel;
          }
          if (review.isrecommended !== null) {
            recommend.count++;
            recommend.sum += review.isrecommended;
          }
        });
        let noiseLevels = {
          1: 'Quiet',
          2: 'Moderate',
          3: 'Energetic'
        };
        let noiseLevel = noiseLevels[Math.round(noise.sum / noise.count)];
        
        let overallRatings = [];
        for (let x = 0; x < 5; x++) {
          overallRatings.push(Math.round(overallCount[5 - x] / len * 100));
        }
        let otherRatings = [];
        for (let x = 0; x < 4; x++) {
          otherRatings.push((Math.round((otherSums[x] / len) * 10) / 10).toFixed(1));
        }
        let overallRating = Math.round((overallSum / len) * 10) / 10;
        let recommendPercent = Math.round((recommend.sum / recommend.count) * 100);
        // console.log('oioioi', data)
   
        let reactData = {
          data: data,
          overallRating: overallRating,
          overallRatings: overallRatings,
          otherRatings: otherRatings,
          noiseLevel: noiseLevel,
          recommend: recommendPercent,
          pages: getPages(data),
          restaurantLocation: data[0].location,
          lovedFor: data[0].lovedFor
        };
        //console.log('bundle', application)

        console.log(application, 'application')
        let component = React.createElement(application, reactData);
  
        // console.log('this far', component)
        html = ReactDom.renderToString(component);
      //  [html, JSON.stringify(reactData)];
      //   res.send([html, JSON.stringify(reactData)])
      res.send(`
      <!doctype <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <title>TableOpen - Reviews Component</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script crossorigin src="https://unpkg.com/react@16.6.3/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@16.6.3/umd/react-dom.development.js"></script>
        <script type="text/javascript" src="/bundle-client.js" > </script>
        <script>
          ReactDOM.hydrate(
            React.createElement(Reviews, ${JSON.stringify(reactData)}),
            document.getElementById('app')
          );
        </script>
      </body>
      </html>
    `);
  
      //res.send(JSON.parse(JSON.stringify(results)).rows);
      //console.log(measureSecs(t0, t1))
    });
  }

};