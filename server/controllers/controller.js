const model = require('../models/reviewModel.js');

exports.getAllReviews = (req, res) => {
  const choice = req.query.choice || 'Newest';
  model.getAllReviews(req.query.id, choice, (results) => {
    res.send(results);
  });
};