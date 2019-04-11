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


exports.newOrder = (req, res) => {

  model.newOrder(req.url, res)

}

exports.getAllReviews = (req, res) => {
  const choice = req.params.choice || 'Newest';
  let html;
  
  if(req.params.id){

    model.getAllReviews(req.params.id, choice, (results, err) => {

      
      if(err) {
        res.status(501).send(err)
      }
      data = JSON.parse(JSON.stringify(results)).rows

      data.forEach(rest => {
        if(!rest.stringified){
          var info = [0, 0, 0, 0, 0, 0]
          
        } else{

          var info = rest.stringified.split(':') 
        }

        rest.foodrating  = info[0]*1;
        rest.servicerating  = info[1]*1;
        rest.ambiencerating  = info[3]*1;
        rest.noiselevel  = info[4]*1;
        rest.valuerating  = info[2]*1;
        rest.isrecommended  = info[5]*1;
        rest.dineddate *= 1;
      });

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

        let component = React.createElement(application, reactData);
  
        html = ReactDom.renderToString(component);
        let response = {
          proxyServer: [html, JSON.stringify(reactData)],
          component: `
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
        `
        }
        //send response.proxyServer with proxy server, response.component for standalone component
        res.send(response.component)
    });
  }

};