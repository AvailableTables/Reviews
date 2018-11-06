import React from 'react';
import styled from 'styled-components';

const RatingBar = styled.span`
  background: #da3743;
  height: 100%;
  display: block;
`;

const RatingBarBorder = styled.div`
  padding: 0;
  margin: 0;
  display: block;
  flex: auto;
  height: 1rem;
  border: 1px solid #d8d9db;
  box-sizing: border-box;
  overflow: hidden;
  margin-top: -1px;
  margin-bottom: -2px;
`;

const BarsNumber = styled.span`
  margin-right: 0.5rem;
  width: 1rem;
  text-align: center;
`;

const RatingBarAndNumber = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  padding-bottom: 0.5rem;
  align-items: center;
  &:hover ${RatingBarBorder} {
    border: 2px solid #da3743;
  }
  &:hover ${BarsNumber} {
    text-decoration: underline;
  }
`;

class Bar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RatingBarAndNumber>
        <BarsNumber>{this.props.num}</BarsNumber>
        <RatingBarBorder>
          <RatingBar style={{width: this.props.width + '%'}}></RatingBar>
        </RatingBarBorder>
      </RatingBarAndNumber>
    );
  }
}

export default Bar;