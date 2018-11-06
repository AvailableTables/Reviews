import React from 'react';
import styled from 'styled-components';

const Number = styled.div`
  list-style: none;
  text-align: center;
  display: block;
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
`;

const Name = styled.div`
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;
  font-size: 0.875rem;
  font-weight: normal;
  text-transform: capitalize;
  white-space: nowrap;
`;

const Parent = styled.div`
  &after: {
    background: #d8d9db;
    content: "";
    display: block;
    height: 2rem;
    position: absolute;
    right: 0;
    width: 1px;
    top: calc(50% - 1rem);
  }
  margin: 0;
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0 0.5rem;
  position: relative;
  text-align: center;
`;

class Ranking extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Parent>
        <Number>{this.props.rating}</Number>
        <Name>{this.props.name}</Name>
      </Parent>
    );
  }
}

export default Ranking;