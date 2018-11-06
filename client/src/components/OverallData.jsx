import React from 'react';
import Ranking from './Ranking.jsx';
import styled from 'styled-components';

const OverviewHeading = styled.div`
  padding: 0;
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  display: flex;
`;

const OverviewText = styled.div`
  display: block;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  font-weight: normal;
  padding-top: 0.5rem;
`;

const StarDiv = styled.div`
  padding: 0;
  margin: 0;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.875rem;
  color: #2d333f;
  font-weight: 500;
  line-height: 1.43;
  flex-wrap: nowrap;
`;

const StarIcons = styled.div`
  font-size: 0.875rem;
  color: #2d333f;
  font-weight: 500;
  line-height: 1.43;
  display: block;
  padding: 0;
  margin: 0;
  width: calc(16px * 5 + 0.25rem * 5);
  flex-shrink: 0;
`;

const StarText = styled.div`
  color: #2d333f;
  padding: 0;
  display: flex;
  align-items: center;
  font-weight: 500;
  margin: 0 0.5rem 0 0;
  font-size: 0.875rem;
  line-height: 1.43;
`;

const EmptyStar = styled.div`
  font-size: 0.875rem;
  color: #2d333f;
  font-weight: 500;
  line-height: 1.43;
  padding: 0;
  margin: 0;
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 0.25rem;
  background-image: url("data:image/svg+xml;charset=utf-8,<svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><title>star-empty</title><path d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z' fill='%23E1E1E1'/></svg>");
`;

const QuarterStar = styled.div`
  font-size: 0.875rem;
  color: #2d333f;
  font-weight: 500;
  line-height: 1.43;
  padding: 0;
  margin: 0;
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 0.25rem;
  background-image: url("data:image/svg+xml;charset=utf-8,<svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><title>star-quarter</title><g fill='none'><path d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z' fill='%23E1E1E1'/><path d='M6 3.982L5.465 5.14l-5.256.784c-.105.041-.167.094-.188.156-.042.084-.021.167.062.251l3.786 3.886-.876 5.516c-.042.084-.01.157.094.219.021.021.063.031.125.031s.104-.01.125-.031L6 14.485V3.982z' fill='%23DA3743'/></g></svg>");
`;

const HalfStar = styled.div`
  font-size: 0.875rem;
  color: #2d333f;
  font-weight: 500;
  line-height: 1.43;
  padding: 0;
  margin: 0;
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 0.25rem;
  background-image: url("data:image/svg+xml;charset=utf-8,<svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><title>star-half</title><g fill='none'><path d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z' fill='%23E1E1E1'/><path d='M7.781.125L5.465 5.14l-5.256.784c-.105.041-.167.094-.188.156-.042.084-.021.167.062.251l3.786 3.886-.876 5.516c-.042.084-.01.157.094.219.021.021.063.031.125.031s.104-.01.125-.031L8 13.383V0c-.063 0-.136.042-.219.125z' fill='%23DA3743'/></g></svg>");
`;

const ThreeQuarterStar = styled.div`
  font-size: 0.875rem;
  color: #2d333f;
  font-weight: 500;
  line-height: 1.43;
  padding: 0;
  margin: 0;
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 0.25rem;
  background-image: url("data:image/svg+xml;charset=utf-8,<svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><title>star-threequarter</title><g fill='none'><path d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z' fill='%23E1E1E1'/><path d='M5.465 5.14l-5.256.784c-.105.041-.167.094-.188.156-.042.084-.021.167.062.251l3.786 3.886-.876 5.516c-.042.084-.01.157.094.219.021.021.063.031.125.031s.104-.01.125-.031L8 13.383l2 1.095V3.931L8.219.125C8.177.042 8.104 0 8 0c-.063 0-.136.042-.219.125L5.465 5.14z' fill='%23DA3743'/></g></svg>");
`;

const FullStar = styled.div`
  font-size: 0.875rem;
  color: #2d333f;
  font-weight: 500;
  line-height: 1.43;
  padding: 0;
  margin: 0;
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 0.25rem;
  background-image: url("data:image/svg+xml;charset=utf-8,<svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><title>Star_8_</title><path d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z' fill='%23DA3743'/></svg>");
`;

const NoiseIcon = styled.div`
  height: 1.125rem;
  width: 1.125rem;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' style='background:%23fff'%3E%3Ctitle%3Eicon/ic_noise_level%3C/title%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Crect fill='%23333' x='15' y='4' width='3' height='16' rx='.5'/%3E%3Crect fill='%23333' x='10' y='9' width='3' height='11' rx='.5'/%3E%3Crect fill='%23333' x='5' y='14' width='3' height='6' rx='.5'/%3E%3C/g%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 50%;
  margin-right: 0.5rem;
  `;

const LikeIcon = styled.div`
  height: 1.125rem;
  width: 1.125rem;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath stroke='%23333' stroke-width='2' d='M19.997 10.918A1 1 0 0 0 19 10h-4.503l.58-1.386c.568-1.355.568-2.344.09-3.06-.344-.517-.958-.934-1.878-1.234a1 1 0 0 0-1.17.44L8.419 11H5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h12.36a1 1 0 0 0 .981-.804l1.656-8.278z'/%3E%3Cpath fill='%23333' d='M7 11h2v9H7z'/%3E%3C/g%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 50%;
  margin-right: 0.5rem;
  `;

const RatingsParent = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
`;

const NoiseLikeParent = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  padding-top: 1rem;
  max-width: 100%;
`;

const NoiseLikeTextBold = styled.div`
  display: block;
  padding: 0;
  margin: 0 0 0 0.25rem;
  font-weight: 500;
  line-height: 1.43;
  font-size: 0.875rem;
`;

const NoiseLikeText = styled.span`
  font-weight: normal;
`;

class OverallData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderArray: []
    };
    this.renderStars = this.renderStars.bind(this);
  }

  renderStars() {
    let render = [];
    let x = 5;
    let rating = Number(this.props.overallRating);
    while (x > 0) {
      if (rating >= 0.88) {
        render.push(<FullStar key={x}></FullStar>);
        x--;
        rating--;
      } else if (rating >= 0.63) {
        render.push(<ThreeQuarterStar key={x}></ThreeQuarterStar>);
        rating = 0;
        x--;
      } else if (rating >= 0.38) {
        render.push(<HalfStar key={x}></HalfStar>);
        rating = 0;
        x--;
      } else if (rating >= 0.13) {
        render.push(<QuarterStar key={x}></QuarterStar>);
        rating = 0;
        x--;
      } else {
        render.push(<EmptyStar key={x}></EmptyStar>);
        rating = 0;
        x--;
      }
    }
    return render;
  }

  componentDidMount() {
    this.setState({
      renderArray: this.renderStars()
    });
  }

  componentDidUpdate(prevProps) {
    const newProps = this.props;
    if (prevProps.overallRating !== newProps.overallRating) {
      this.setState({
        renderArray: this.renderStars()
      });
    }
  }

  render() {
    return (
      <div>
        <OverviewHeading>Overall ratings and reviews</OverviewHeading>
        <OverviewText>Reviews can only be made by diners who have eaten at this restaurant</OverviewText>
        <StarDiv>
          <StarIcons>
            {this.state.renderArray.map((star) => {
              return star;
            })}
          </StarIcons>
          <StarText>
            <span style={{margin: '0 0.25rem'}}>{this.props.overallRating}</span>
            <span style={{margin: '0 0.25rem'}}>based on recent ratings</span>
          </StarText>
        </StarDiv>
        <RatingsParent>
          {this.props.ratingNames.map((name, index) => {
            return (
              <Ranking
                name={name}
                rating={this.props.otherRatings[index]}
                key={index}
              ></Ranking>
            );
          })}
        </RatingsParent>
        <NoiseLikeParent>
          <div>
            <NoiseIcon></NoiseIcon>
          </div>
          <NoiseLikeTextBold>Noise&nbsp;·&nbsp;<NoiseLikeText>{this.props.noiseLevel}</NoiseLikeText></NoiseLikeTextBold>
        </NoiseLikeParent>
        <NoiseLikeParent>
          <div>
            <LikeIcon></LikeIcon>
          </div>
          <NoiseLikeTextBold>{this.props.recommend}% of people&nbsp;<NoiseLikeText>would recommend it to a friend</NoiseLikeText></NoiseLikeTextBold>
        </NoiseLikeParent>
      </div>
    );
  }
}

export default OverallData;

