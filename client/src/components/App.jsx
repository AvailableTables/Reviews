import React from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';
import Review from './Review.jsx';
import PageBar from './PageBar.jsx';
import Sort from './Sort.jsx';
import styled from 'styled-components';

const Body = styled.div`
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  -webkit-font-smoothing: antialiased;
`;

const ReviewsBody = styled.div`
  padding: 0;
  margin: 0;
  display: block;
`;




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.listing.data || [],                 
      restaurantLocation: props.listing.restaurantLocation || '',       
      lovedFor: props.listing.lovedFor || '',                       
      overallRating: props.listing.overallRating || null,                      
      overallRatings: props.listing.overallRatings || [0, 0, 0, 0, 0],                      
      otherRatings: props.listing.otherRatings || [],                                                   
      ambienceRating: props.listing.ambienceRating || undefined,                                  
      noiseLevel: props.listing.noiseLevel || '',                                     
      recommend: props.listing.recommend || undefined,                                 
      pages: props.listing.pages ||  [],
      overallNums: ['5', '4', '3', '2', '1'],                       
      ratingNames: ['Food', 'Service', 'Ambience', 'Value'],              
      currentPage: 1,
      currentReviews: props.listing.data.slice(0, 50),
      currentChoice: 'Newest'
    };
    this.getReviews = this.getReviews.bind(this);
    this.getPages = this.getPages.bind(this);
    this.newPage = this.newPage.bind(this);
    this.changeChoice = this.changeChoice.bind(this);
  }

  getReviews(id, sort) {
    //console.log(id, this.state.Choice)
    axios.get('/API/Reviews/reviews/all', {params: {id: id, choice: sort}})

      .then(({data}) => {
        //console.log(data)
        let len = data.length;
        let overallSum = 0;
        let overallCount = {
          5: 0,
          4: 0,
          3: 0,
          2: 0,
          1: 0
        };
        let otherSums = [0, 0, 0, 0];
        let noise = {
          count: 0,
          sum: 0
        };
        let recommend = {
          count: 0,
          sum: 0
        };
        data.forEach((review) => {
          overallSum += review.overallrating;
          overallCount[review.overallrating]++;
          otherSums[0] += review.foodrating;
          otherSums[1] += review.servicerating;
          otherSums[2] += review.ambiencerating;
          otherSums[3] += review.valuerating;
          if (review.noiselevel !== null) {
            noise.count++;
            noise.sum += review.noiselevel;
          }
          if (review.isrecommended !== null) {
            recommend.count++;
            recommend.sum += review.isrecommended;
          }
        });
        let noiseLevels = {
          1: 'Quiet',
          2: 'Moderate',
          3: 'Energetic'
        };
        let noiseLevel = noiseLevels[Math.round(noise.sum / noise.count)];
        
        let overallRatings = [];
        for (let x = 0; x < 5; x++) {
          overallRatings.push(Math.round(overallCount[5 - x] / len * 100));
        }
        let otherRatings = [];
        for (let x = 0; x < 4; x++) {
          otherRatings.push((Math.round((otherSums[x] / len) * 10) / 10).toFixed(1));
        }
        let overallRating = Math.round((overallSum / len) * 10) / 10;
        let recommendPercent = Math.round((recommend.sum / recommend.count) * 100);
        // console.log(data, "this err")
        this.setState({
          data: data,
          overallRating: overallRating,
          overallRatings: overallRatings,
          otherRatings: otherRatings,
          noiseLevel: noiseLevel,
          recommend: recommendPercent,
          pages: this.getPages(data),
          currentReviews: data.slice(0, 50),
          restaurantLocation: data[0].location,
          lovedFor: data[0].lovedFor
        });
      });
  }
  
  changeChoice(choice) {
    let restaurantId = Number(window.location.pathname.slice(13)).toString();
    //console.log('change')
    this.getReviews(restaurantId, choice);
    this.setState({
      currentChoice: choice
    });
  }

  getPages(reviews) {
    let len = reviews.length;
    let i = 1;
    let array = [];
    while (len > 0) {
      array.push(i++);
      len -= 50;
    }
    return array;
  }

  newPage(pageNumber) {
    let start = (pageNumber - 1) * 50;
    this.setState({
      currentPage: pageNumber,
      currentReviews: this.state.data.slice(start, start + 50)
    });
  }

  componentDidMount() {
    // let restaurantId = Number(window.location.pathname.slice(13)).toString();
    // this.getReviews(restaurantId, this.state.currentChoice);
  }

  render() {
    return (
      <Body>
        <Overview
          reviews={this.state.data}
          overallRating={this.state.overallRating}
          otherRatings={this.state.otherRatings}
          ratingNames={this.state.ratingNames}
          noiseLevel={this.state.noiseLevel}
          recommend={this.state.recommend}
          overallNums={this.state.overallNums}
          overallRatings={this.state.overallRatings}
          restaurantLocation={this.state.restaurantLocation}
        ></Overview>
        <Sort
          currentChoice={this.state.currentChoice}
          changeChoice={this.changeChoice}
        ></Sort>
        <ReviewsBody>
          {this.state.currentReviews.map((review, index) => {
            return (
              <Review
                key={index}
                review={review}
              ></Review>
            );
          })}
        </ReviewsBody>
        <PageBar
          pages={this.state.pages}
          currentPage={this.state.currentPage}
          newPage={this.newPage}
        ></PageBar>
      </Body>
    );
  }
}

export default App;