import React from 'react';
import DropDown from './DropDown.jsx';
import styled from 'styled-components';

const Titles = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  display: flex;
`;

class Sort extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Titles>Sort by</Titles>
        <DropDown
          currentChoice={this.props.currentChoice}
          changeChoice={this.props.changeChoice}
        ></DropDown>
      </React.Fragment>
    );
  }
}

export default Sort;