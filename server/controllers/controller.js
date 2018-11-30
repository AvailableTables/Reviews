const model = require('../models/reviewModel.js');

// let req = {query:{}}
// req.query.choice = 'Newest' //Lowest rating, Highest rating
// req.query.id = 1

// const recordTime = ()=>{
//   return Math.round((new Date().getTime()))
// }
// const measureSecs = (start, end)=>{
// return `${(end-start)}ms`
// }

// var t0;
// var t1;

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

  const choice = req.query.choice || 'Newest';
  model.getAllReviews(req.query.id, choice, (results, err) => {
    //console.log(JSON.parse(JSON.stringify(results)).rows)
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
      console.log(data)
 
      let response = {
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
    
    res.send(response)
    //res.send(JSON.parse(JSON.stringify(results)).rows);
    //console.log(measureSecs(t0, t1))
  });

};