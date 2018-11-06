const mysqlPool = require('../../db/index.js');

module.exports = {
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