const mysqlPool = require('../../db/index.js');
const fs = require('fs')
let countUser = 0;
let countRest = 0;
let countReview = 0;


module.exports = {
  addUser: (user, callback) => {
    countUser +=1;
    return `\n${countUser}; ${user.username}; ${user.hometown}; ${user.numOfReviews}; ${user.vip}`;
    // mysqlPool.getConnection((err, connection) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     connection.query(`INSERT INTO users
    //     (username, hometown, numOfReviews, VIP, iconColor, abbreviation)
    //     VALUES (?)`,
    //     [[user.username, user.hometown, user.numOfReviews, user.vip, user.iconColor, user.abbreviation]],
    //     (err, results) => {
    //       if (err) {
    //         console.log(err);
    //       } else {
    //         connection.destroy();
    //         callback(results);
    //       }
    //     });
    //   }
    // });
  },
  addRestaurant: (restaurant, callback) => {
    countRest +=1;
    return `\n${countRest}; ${restaurant.location}; ${restaurant.lovedFor}`;
    // mysqlPool.getConnection((err, connection) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     connection.query(`INSERT INTO restaurants
    //     (location, lovedFor)
    //     VALUES (?)`,
    //     [[restaurant.location, restaurant.lovedFor]],
    //     (err, results) => {
    //       if (err) {
    //         console.log(err);
    //       } else {
    //         connection.destroy();
    //         callback(results);
    //       }
    //     });
    //   }
    // });
  },
  addReview: (review, callback) => {
    // countReview += 1;
    return `${review.userId}; ${review.restaurantId}; ${review.overallRating}; ${review.foodRating}; ${review.serviceRating}; ${review.ambienceRating}; ${review.valueRating}; ${review.noiseLevel}; ${review.dinedDate}; ${review.reviewText}; ${review.isRecommended}; ${review.recommendedFor}`

    // mysqlPool.getConnection((err, connection) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     connection.query(`INSERT INTO reviews
    //     (userId, restaurantId, overallRating, foodRating, serviceRating, ambienceRating, valueRating, noiseLevel, dinedDate, reviewText, isRecommended, recommendFor)
    //     VALUES (?)`,
    //     [[review.userId, review.restaurantId, review.overallRating, review.foodRating, review.serviceRating, review.ambienceRating, review.valueRating, review.noiseLevel, review.dinedDate, review.reviewText, review.isRecommended, review.recommendFor]],
    //     (err, results) => {
    //       if (err) {
    //         console.log(err);
    //       } else {
    //         connection.destroy();
    //         callback(results);
    //       }
    //     });
    //   }
    // });
  },
  getAllReviews: (id, choice, callback) => {
    const sorter = {
      'Newest': `select * from users
        inner join reviews on reviews.userId=users.id 
        inner join restaurants on reviews.restaurantId=restaurants.id
        where restaurants.id=? order by reviews.dinedDate DESC`,
      'Lowest rating': `select * from users
        inner join reviews on reviews.userId=users.id 
        inner join restaurants on reviews.restaurantId=restaurants.id
        where restaurants.id=? order by reviews.overallRating ASC`,
      'Highest rating': `select * from users
        inner join reviews on reviews.userId=users.id 
        inner join restaurants on reviews.restaurantId=restaurants.id
        where restaurants.id=? order by reviews.overallRating DESC`,
    };
    mysqlPool.getConnection((err, connection) => {
      if (err) {
        console.log(err);
      } else {
        connection.query(sorter[choice], [id], (err, results) => {
          if (err) {
            console.log(err);
          } else {
            connection.release();
            callback(results);
          }
        });
      }
    });
  }
};