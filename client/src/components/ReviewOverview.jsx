import React from 'react';
import ReviewRatings from './ReviewRatings.jsx';
import styled from 'styled-components';

const ReviewBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ReviewTextWrap = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  max-height: calc(3rem * 1.5);
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const ReviewText = styled.p`
  margin-bottom: 0;
  margin-top: 0;
  line-height: 1.5;
  font-size: 1rem;
  font-weight: normal;
`;

const Spacer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 1rem;
`;

const ReportHelpfulWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ReportHelpful = styled.div`
  display: flex;
  position: relative;
  align-self: flex-start;
`;

const ReportIcon = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' style='background:%23fff'%3E%3Ctitle%3Eicon/ic_report%3C/title%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath d='M6 2v19a1 1 0 0 1-2 0V4a2 2 0 0 1 2-2z' fill='%23333'/%3E%3Cpath d='M5 13h12.773L13.33 8l4.444-5H6a1 1 0 0 0-1 1v9z' stroke='%23333' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 50%;
  display: inline-block;
`;

const HelpfulIcon = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  background-repeat: no-repeat;
  background-position: 50%;
  display: inline-block;
`;

const Wrap = styled.div`
  &:hover {
    cursor: pointer;
  }
  margin-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  margin: 0 0 0 0.25rem;
  font-weight: 500;
  line-height: 1.43;
  font-size: 0.875rem;
`;

const url = {
  hover: `url("data:image/svg+xml;charset=utf-8,<svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' style='background:%23fff'><title>icon/ic_upvote_filled</title><g fill='none' fill-rule='evenodd'><path d='M0 0h24v24H0z'/><rect fill='%23DA3743' x='3' y='3' width='18' height='18' rx='2'/><rect fill='%23FFF' x='11' y='8.5' width='2' height='8' rx='.5'/><g transform='rotate(45 -3.036 18.278)' fill='%23FFF'><rect transform='matrix(-1 0 0 1 5 0)' width='5' height='2' rx='.5'/><rect transform='matrix(-1 0 0 1 2 0)' width='2' height='5' rx='.5'/></g></g></svg>")`,
  noHover: `url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' style='background:%23fff'%3E%3Ctitle%3Eicon/ic_upvote%3C/title%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cg transform='translate(3 3)'%3E%3Cg transform='translate(5 4)' fill='%23333'%3E%3Crect x='3' y='1.5' width='2' height='8' rx='.5'/%3E%3Cg transform='rotate(45 1.414 5.121)'%3E%3Crect transform='matrix(-1 0 0 1 5 0)' width='5' height='2' rx='.5'/%3E%3Crect transform='matrix(-1 0 0 1 2 0)' width='2' height='5' rx='.5'/%3E%3C/g%3E%3C/g%3E%3Crect stroke='%23333' stroke-width='2' x='1' y='1' width='16' height='16' rx='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`
};

class ReviewOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseExit = this.mouseExit.bind(this);
  }

  mouseEnter() {
    this.setState({
      hover: true
    });
  }

  mouseExit() {
    this.setState({
      hover: false
    });
  }

  render() {
    return (
      <ReviewBody>
        <ReviewRatings
          review={this.props.review}
        ></ReviewRatings>
        <ReviewTextWrap>
          <ReviewText>{this.props.review.reviewText}</ReviewText>
        </ReviewTextWrap>
        <Spacer></Spacer>
        <ReportHelpfulWrap>
          <ReportHelpful>
            <Wrap>
              <ReportIcon></ReportIcon>
              <Text>Report</Text>
            </Wrap>
            <Wrap onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseExit}>
              <HelpfulIcon style={this.state.hover ? {backgroundImage: url.hover} : {backgroundImage: url.noHover}}></HelpfulIcon>
              <Text>Helpful</Text>
            </Wrap>
          </ReportHelpful>
        </ReportHelpfulWrap>
      </ReviewBody>
    );
  }
}

export default ReviewOverview;