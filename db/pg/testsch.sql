DROP DATABASE IF EXISTS practice; 
CREATE DATABASE practice;

\c postgres;

DROP TABLE IF EXISTS users; 
DROP TABLE IF EXISTS test; 
DROP TABLE IF EXISTS restaurants; 
DROP TABLE IF EXISTS reviews; 


CREATE TABLE users
(
  id SERIAL,
  username VARCHAR(35) NOT NULL,
  hometown VARCHAR(35) NOT NULL,
  numOfReviews INT NOT NULL,
  vip INT NOT NULL
);


CREATE TABLE restaurants
(
  id SERIAL,
  location VARCHAR(35) NOT NULL,
  lovedFor VARCHAR(255)
);


CREATE TABLE reviews
(
  id SERIAL,
  userId INT NOT NULL,
  restaurantId INT NOT NULL,
  overallRating INT NOT NULL,
  foodRating INT NOT NULL,
  serviceRating INT NOT NULL,
  ambienceRating INT NOT NULL,
  valueRating INT NOT NULL,
  noiseLevel INT,
  dinedDate BIGINT NOT NULL,
  reviewText VARCHAR(2000),
  isRecommended INT,
  recommendFor VARCHAR(709)
);