DROP DATABASE IF EXISTS reviewsdb; 
CREATE DATABASE reviewsdb;

\c reviewsdb;


CREATE TABLE users
(
  id INT NOT NULL,
  username TEXT,
  hometown TEXT,
  numOfReviews INT ,
  vip INT
);

CREATE TABLE restaurants
(
  id INT NOT NULL,
  location TEXT,
  lovedFor TEXT
);
CREATE TABLE reviews
(
  id INT NOT NULL,
  userid INT NOT NULL,
  restaurantid INT NOT NULL,
  dineddate BIGINT,
  overallrating INT,
  stringified TEXT,
  reviewtext TEXT,
  recommendfor TEXT
);