import React from 'react';
import Bar from './Bar.jsx';
import styled from 'styled-components';

const BarOverall = styled.div`
  padding: 0;
  margin: 0;
  width: 16rem;
  &:hover {
    cursor: pointer;
  }
`;

const BarParent = styled.div`
  display: block;
  margin: 0;
  padding: 2rem 0 0;
`;

class OverallBars extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BarParent>
        <BarOverall>
          {this.props.overallNums.map((num, index) => {
            return (
              <Bar
                key={num}
                num={num}
                width={this.props.overallRatings[index]}
              >
              </Bar>
            );
          })}
        </BarOverall>
      </BarParent>
    );
  }
}

export default OverallBars;