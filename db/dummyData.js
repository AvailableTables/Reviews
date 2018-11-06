const cities = ['New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Philadelphia',
  'Phoenix',
  'San Antonio',
  'San Diego',
  'Dallas',
  'San Jose',
  'Austin',
  'Jacksonville',
  'San Francisco',
  'Indianapolis',
  'Columbus',
  'Fort Worth',
  'Charlotte',
  'Detroit',
  'El Paso',
  'Seattle',
  'Denver',
  'Washington',
  'Memphis',
  'Boston',
  'Nashville',
  'Baltimore',
  'Oklahoma City',
  'Portland',
  'Las Vegas',
  'Louisville',
  'Milwaukee',
  'Albuquerque',
  'Tucson',
  'Fresno',
  'Sacramento',
  'Long Beach',
  'Kansas City',
  'Mesa',
  'Atlanta',
  'Virginia Beach',
  'Omaha',
  'Colorado Springs',
  'Raleigh',
  'Miami',
  'Oakland',
  'Minneapolis',
  'Tulsa',
  'Cleveland',
  'Wichita',
  'New Orleans',
  'Arlington',
  'Bakersfield',
  'Tampa',
  'Aurora',
  'Honolulu',
  'Anaheim',
  'Santa Ana',
  'Corpus Christi',
  'Riverside',
  'St. Louis',
  'Lexington',
  'Pittsburgh',
  'Stockton',
  'Anchorage',
  'Cincinnati',
  'Saint Paul',
  'Greensboro',
  'Toledo',
  'Newark',
  'Plano',
  'Henderson',
  'Lincoln',
  'Orlando',
  'Jersey City',
  'Chula Vista',
  'Buffalo',
  'Fort Wayne',
  'Chandler',
  'St. Petersburg',
  'Laredo',
  'Durham',
  'Irvine',
  'Madison',
  'Norfolk',
  'Lubbock',
  'Gilbert',
  'Winston–Salem',
  'Glendale',
  'Reno',
  'Hialeah',
  'Garland',
  'Chesapeake',
  'Irving',
  'North Las Vegas',
  'Scottsdale',
  'Baton Rouge',
  'Fremont',
  'Richmond',
  'Boise',
  'San Bernardino'];

firstNames = ['Rutherford',
  'Elfrida',
  'Reeva',
  'Gino',
  'Pasquale',
  'Malina',
  'Leela',
  'Ezechiel',
  'Morgan',
  'Christel',
  'Winonah',
  'Kellby',
  'Pen',
  'Jeffry',
  'Erny',
  'Rosa',
  'Bonni',
  'Jacintha',
  'Bastian',
  'Jerrie',
  'Emlynn',
  'Romy',
  'Delora',
  'Sky',
  'Jeri',
  'Darrin',
  'Winnah',
  'Rabi',
  'Babita',
  'Stanislaus',
  'Mendel',
  'Cathyleen',
  'Chrisse',
  'Adelina',
  'Pru',
  'Stephan',
  'Tabbi',
  'Berry',
  'Hallie',
  'Hube',
  'Steffi',
  'Colleen',
  'Toinette',
  'Bertina',
  'Annemarie',
  'Tasia',
  'Curran',
  'Felicle',
  'Gabriellia',
  'Luz',
  'Hermia',
  'Aleta',
  'Hagen',
  'Katuscha',
  'Gabbie',
  'Juliette',
  'Alverta',
  'Fraser',
  'Arline',
  'Ludovika',
  'Jessi',
  'Phillipp',
  'Frasco',
  'Lenore',
  'Giraldo',
  'Wendall',
  'Riobard',
  'Kiele',
  'Casie',
  'Stella',
  'Derward',
  'Nerita',
  'Karisa',
  'Barbi',
  'Madelena',
  'Kingsley',
  'Fraser',
  'Diego',
  'Phillipe',
  'Gussy',
  'Bennie',
  'Stevie',
  'Vinson',
  'Jada',
  'Carmelita',
  'Hughie',
  'Kit',
  'Panchito',
  'Damien',
  'Finley',
  'Jesus',
  'Artemis',
  'Nicolais',
  'Gabbie',
  'Chalmers',
  'Netti',
  'Brinna',
  'Tomasine',
  'Marti',
  'Michele'];

lastNames = ['Q',
  'W',
  'E',
  'R',
  'T',
  'Y',
  'U',
  'I',
  'O',
  'P',
  'A',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'Z',
  'X',
  'C',
  'V',
  'B',
  'N',
  'M'];

const recommendedForList = [
  'Vibrant Bar Scene', 'Spicy', 'Sunday Lunch', 'Good Vegetarian Options', 'Organic',
  'Neighborhood Gem', 'Seasonal', 'Late-night Find', 'People Watching', 'Live Music',
  'Great for Outdoor Dining', 'Paleo Friendly', 'Special Occasion', 'Pre/post Theatre', 'Bar Seating',
  'Authentic', 'Great for Lunch', 'Handcrafted Cocktails', 'Afternoon Tea', 'Happy Hour',
  'Notable Wine List', 'Quiet Conversation', 'Good for Anniversaries', 'Creative Cuisine', 'Fun',
  'Business Meals', 'Healthy', 'Romantic', 'Worth the Drive', 'Scenic View',
  'Local Ingredients', 'Live Sports', 'Great Beer', 'Disabled Access', 'Kid-friendly',
  'Afternoon Coffee', 'Tapas', 'Great for Brunch', 'Good for Groups', 'Quick Bite',
  'Tasting Menu', 'Good for Birthdays', 'Gluten Free Options', 'Good for a Date', 'Cozy',
  'Fit for Foodies', 'Vegan', 'Comfort Food', 'Casual', 'Hot Spot', 'Waterfront'
];

const randomize = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const recommendedForMaker = () => {
  const num = Math.ceil(Math.random() * 5);
  let recommends = [];
  for (let i = 0; i < num; i++) {
    recommends.push(randomize(recommendedForList));
  }
  return recommends.join(',');
};

// Review Text

const who = ['I', 'My family', 'My girfriend', 'My friends', 'We', 'Everyone', 'My boyfriend', 'My children', 'My wife', 'My husband', 'Everybody', 'We all'];
const opinion = ['loved', 'hated', 'enjoyed', 'couldn\'t stand', 'liked', 'disliked', 'adored', 'was content with'];
const place = ['this restaurant', 'this place', 'the food', 'the ambience', 'the location', 'the service', 'the drinks', 'the dessert', 'the price', 'the noise', 'the building', 'the waiter', 'the waitress', 'the owner', 'the hostess', 'the crowd', 'the music'];
const pronoun = ['My', 'Her', 'Our', 'Their', 'His'];
const adjective = ['favorite item', 'least favorite item', 'meal', 'preference', 'most-liked item', 'least-liked item'];
const food = ['steak', 'lobster', 'pizza', 'beer', 'chicken fingers', 'burger', 'wine', 'cocktails', 'pasta', 'oysters', 'seafood', 'mac and cheese', 'sandwiches', 'sushi', 'soup', 'salad', 'drinks', 'menu', 'noodles', 'rice', 'ice cream', 'cheesecake', 'nachos', 'tacos', 'burritos'];
const punctuation = ['!', '.'];
const what = ['may', 'will', 'won\'t', 'can\'t', 'will not', 'may not', 'will definitely', 'can', 'want to', 'have to', 'must', 'need to'];
const eatAgain = ['return', 'come back', 'try it', 'drink here', 'eat here', 'visit', 'go back'];
const when = ['soon', 'next week', 'tomorrow', 'never', 'again', 'asap', 'whenever', 'next month', 'next year', 'very soon', 'tonight'];

const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const reviewTextMaker = () => {
  return `${randomize(who)} ${randomize(opinion)} ${randomize(place)}${randomize(punctuation)} ${randomize(pronoun)} ${randomize(adjective)} was the ${randomize(food)}${randomize(punctuation)} ${randomize(who)} ${randomize(what)} ${randomize(eatAgain)} ${randomize(when)}${randomize(punctuation)}`;
};

exports.reviewDataMaker = () => {
  return {
    overallRating: Math.ceil(Math.random() * 5),
    foodRating: Math.ceil(Math.random() * 5),
    serviceRating: Math.ceil(Math.random() * 5),
    ambienceRating: Math.ceil(Math.random() * 5),
    valueRating: Math.ceil(Math.random() * 5),
    noiseLevel: randomize([undefined, 1, 2, 3]),
    isRecommended: randomize([undefined, 0, 1]),
    reviewText: reviewTextMaker(),
    dinedDate: randomDate(new Date(2010, 0, 1), new Date()).valueOf(),
    restaurantId: Math.ceil(Math.random() * 100),
    userId: Math.ceil(Math.random() * 100),
    recommendedFor: recommendedForMaker()
  };
};

const icons = [
  '(108, 138, 228)',
  '(216, 100, 65)',
  '(187, 106, 205)',
  '(223, 78, 150)'
];

exports.userDataMaker = () => {
  if (Math.ceil(Math.random() * 5) > 1) {
    var first = randomize(firstNames);
    if (Math.ceil(Math.random() * 3) > 1) {
      var last = randomize(lastNames);
    } else {
      var last = '';
    }
  } else {
    var first = 'Open';
    var last = 'Table Diner';
  }
  return {
    username: first + last,
    hometown: randomize(cities),
    numOfReviews: Math.ceil(Math.random() * 150),
    vip: Math.floor(Math.random() * 2),
    iconColor: randomize(icons),
    abbreviation: first.slice(0, 1) + last.slice(0, 1)
  };
};

const lovedForList = [
  'Most Booked', 'Best Ambience', 'Italian', 'American', 'Best Overall', 'Best Service', 'Contemporary American', 'Best Food',
  'French', 'Japanese', 'Notable Wine List', 'French American', 'Best Value', 'Healthy', 'Special Occasion', 'Great for Brunch',
  'Sushi', 'Romantic'
];

const lovedForMaker = () => {
  const num = Math.ceil(Math.random() * 3);
  let loved = [];
  if (Math.floor(Math.random() * 3) < 1) {
    for (let i = 0; i < num; i++) {
      loved.push(randomize(lovedForList));
    }
  }
  return loved.join(',');
};

exports.restaurantDataMaker = () => {
  return {
    location: randomize(cities),
    lovedFor: lovedForMaker()
  };
};