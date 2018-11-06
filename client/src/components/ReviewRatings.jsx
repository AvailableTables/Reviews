import React from 'react';
import styled from 'styled-components';

const ReviewRatingBody = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

const StarsAndDate = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
`;

const Stars = styled.div`
  width: calc(80px + 1.25rem);
  flex-shrink: 0;
`;

const DateDiv = styled.div`
  &:before {
    content: "·";
    padding-right: 0.5rem;
    color: rgb(45, 51, 63);
  }
  font-weight: 500;
  display: flex;
  align-items: center;
  margin: 0px 0.5rem 0px 0px;
  font-size: 0.875rem;
  line-height: 1.43;
`;

const EmptyStar = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 0.25rem;
  background-image: url("data:image/svg+xml;charset=utf-8,<svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><title>star-empty</title><path d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z' fill='%23E1E1E1'/></svg>");
`;

const FullStar = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 0.25rem;
  background-image: url("data:image/svg+xml;charset=utf-8,<svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><title>Star_8_</title><path d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z' fill='%23DA3743'/></svg>");
`;

const OtherRatings = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
`;

const Name = styled.span`
  color: rgb(45, 51, 63);
  text-transform: capitalize;
  margin: 0px 0.5rem 0px 0px;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.43;
`;

const Value = styled.span`
  &:after {
    content: "·";
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    color: rgb(45, 51, 63);
  }
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.43;
  color: rgb(218, 55, 67);
`;

const ValueLast = styled.span`
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.43;
  color: rgb(218, 55, 67);
`;

const months = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December'
};

class ReviewRatings extends React.Component {
  constructor(props) {
    super(props);
    this.starArray = this.starArray.bind(this);
    this.getDate = this.getDate.bind(this);
    this.getOtherRatings = this.getOtherRatings.bind(this);
  }

  starArray() {
    let array = [];
    let rating = this.props.review.overallRating;
    for (let x = 0; x < 5; x++) {
      if (rating >= 1) {
        array.push(<FullStar key={x}></FullStar>);
        rating--;
      } else {
        array.push(<EmptyStar key={x}></EmptyStar>);
      }
    }
    return array;
  }

  getDate() {
    let dateSecs = this.props.review.dinedDate;
    let diff = new Date().valueOf() - dateSecs;
    if (diff < 24 * 60 * 60 * 1000) {
      let hours = Math.round(diff / 1000 / 60 / 60);
      if (hours === 1) {
        return `Dined ${hours} hour ago`;
      } else {
        return `Dined ${hours} hours ago`;
      }
    } else if (diff < 24 * 60 * 60 * 1000 * 7) {
      let days = Math.round(diff / 1000 / 60 / 60 / 24);
      if (days === 1) {
        return `Dined ${days} day ago`;
      } else {
        return `Dined ${days} days ago`;
      }
    } else {
      let date = new Date(this.props.review.dinedDate);
      return `Dined on ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    }
  }

  getOtherRatings() {
    let array = [];
    const names = ['Overall', 'Food', 'Service', 'Ambience'];
    const values = [this.props.review.overallRating, this.props.review.foodRating, this.props.review.serviceRating, this.props.review.ambienceRating];
    names.forEach((name, index) => {
      if (index === 3) {
        array.push(
          <React.Fragment key={index}>
            <Name>
              {name}
            </Name>
            <ValueLast>
              {values[index]}
            </ValueLast>
          </React.Fragment>
        );
      } else {
        array.push(
          <React.Fragment key={index}>
            <Name>
              {name}
            </Name>
            <Value>
              {values[index]}
            </Value>
          </React.Fragment>
        );
      }
    });
    return array;
  }

  render() {
    return (
      <ReviewRatingBody>
        <StarsAndDate>
          <Stars>
            {this.starArray()}
          </Stars>
          <DateDiv>
            {this.getDate()}
          </DateDiv>
        </StarsAndDate>
        <OtherRatings>
          {this.getOtherRatings()}
        </OtherRatings>
      </ReviewRatingBody>
    );
  }
}

export default ReviewRatings;