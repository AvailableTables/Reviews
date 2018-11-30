import React from 'react';
import axios from 'axios';

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
      this.state ={
        infor: props.ssInfo.overallRating
      }

  }


  render() {
    return (
      <div>
        {console.log(this.state, 'test')}
      </div>
    );
  }
}

export default App;