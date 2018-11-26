const client = require('../../db/index.js');

module.exports = {
  addUser: user => {
    return `${user.username};${user.hometown};${user.numOfReviews};${user.vip}`;
  },
  addRestaurant: restaurant => {
    return `${restaurant.location};${restaurant.lovedFor}`;
  },
  addReview: review => {
    return `${review.userId};${review.restaurantId};${review.dineddate};${
      review.overallrating
    };${review.stringified};${review.reviewText};${review.recommendedFor}`;
  },
  redisReview: info => {
    var str = `${info.username};${info.hometown};${info.numOfReviews};${
      info.vip
    };${info.dineddate};${info.overallrating};${info.stringified};${
      info.reviewText
    };${info.recommendedFor}`;

    return str;
  },
  getAllReviews: (id, choice, callback) => {
    const sorter = {
      Newest: `select * from users
        inner join reviews on reviews.userId=users.id 
        inner join restaurants on reviews.restaurantId=restaurants.id
        where restaurants.id=$1 order by reviews.dinedDate DESC`,
      'Lowest rating': `select * from users
        inner join reviews on reviews.userId=users.id 
        inner join restaurants on reviews.restaurantId=restaurants.id
        where restaurants.id=$1 order by reviews.overallRating ASC`,
      'Highest rating': `select * from users
        inner join reviews on reviews.userId=users.id 
        inner join restaurants on reviews.restaurantId=restaurants.id
        where restaurants.id=$1 order by reviews.overallRating DESC`
    };

    client.query(sorter[choice], [id], (err, results) => {
      if (err) {
        console.log(err);
      } else {
        callback(results);
      }
    });
  }
};
