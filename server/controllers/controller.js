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
  model.getAllReviews(req.query.id, choice, (results) => {
    //console.log(JSON.parse(JSON.stringify(results)).rows)
    //t1 = recordTime();
    res.send(results);
    //console.log(measureSecs(t0, t1))
  });
};