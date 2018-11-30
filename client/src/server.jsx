
import React from 'react';
import App from './components/App.jsx';

 class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: this.props.ssInfo
    }
  }

  
   render () {
    return (
      <div>
        <App ssInfo={ssInfo = this.state.listing} />
      </div>
    )
  }
}
 export default Reviews;