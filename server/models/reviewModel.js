const client = require('../../db/pg/rdspool.js');

module.exports = {
  addUser: user => {
    return `${user.username};${user.hometown};${user.numOfReviews};${user.vip}`;
  },
  addRestaurant: restaurant => {
    return `${restaurant.location};${restaurant.lovedFor}`;
  },
  addReview: review => {
    return `${review.userId};${review.restaurantId};${review.dineddate};${review.overallrating};${review.stringified};${review.reviewText};${review.recommendedFor}`;
  },
  redisReview: info => {
    var str = `${info.username};${info.hometown};${info.numOfReviews};${info.vip};${info.dineddate};${info.overallrating};${info.stringified};${info.reviewText};${info.recommendedFor}`;

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
        
        //console.log([id], JSON.parse(JSON.stringify(results)))
        if(!JSON.parse(JSON.stringify(results)).rows[0]){
          
          client.query(`select * from restaurants where id=$1`, [id])
          .then((data)=>{
            //console.log('no reviews')
            callback(data, err)
          })
        } else {
          //console.log('some reviews')

          callback(results, err);
        }
      }
    });
  }
};


/*
select * from users
inner join reviews on reviews.userId=users.id 
inner join restaurants on reviews.restaurantId=restaurants.id
where restaurants.id=500 order by reviews.dinedDate DESC;
*/