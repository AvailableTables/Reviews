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
    res.send(data)
    //res.send(JSON.parse(JSON.stringify(results)).rows);
    //console.log(measureSecs(t0, t1))
  });
};