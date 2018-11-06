import React from 'react';
import OverallData from './OverallData.jsx';
import OverallBars from './OverallBars.jsx';
import styled from 'styled-components';

const Overall = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 2rem;
`;

const OverviewTitle = styled.div`
  padding: 0;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.33;
  color: #2d333f;
  border-bottom: 1px solid #d8d9db;
  padding-bottom: 1rem;
  margin: 0 0 1rem;
  display: flex;
  justify-content: space-between;
`;

const BestRestaurants = styled.div`
  display: block;
  margin: 0;
  padding: 0;
  padding-top: 0.5rem;
`;

const BestRestaurantsLink = styled.a`
  color: #da3743;
`;

const OverviewBody = styled.div`
  display: block;
  padding: 0;
  margin: 0;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: solid 1px #d8d9db;
`;

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <OverviewBody>
        <OverviewTitle>What {this.props.reviews.length} People Are Saying</OverviewTitle>
        <Overall>
          <OverallData
            overallRating={this.props.overallRating}
            otherRatings={this.props.otherRatings}
            ratingNames={this.props.ratingNames}
            noiseLevel={this.props.noiseLevel}
            recommend={this.props.recommend}
          ></OverallData>
          <OverallBars
            overallNums={this.props.overallNums}
            overallRatings={this.props.overallRatings}
          ></OverallBars>
        </Overall>
        <BestRestaurants>
          <BestRestaurantsLink href='#'>Best Restaurants in {this.props.restaurantLocation} ›</BestRestaurantsLink>
        </BestRestaurants>
      </OverviewBody>
    );
  }
}

export default Overview;