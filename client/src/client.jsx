import React from 'react';
//import ReactDom from 'react-dom';
import App from './components/App.jsx';

 class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: this.props || []
    }
  }  
   render () {
    return (
      <div>
      <App listing={this.props}/>
      </div>
    )
  }
}

window.Reviews = Reviews;
// ReactDom.render(<App />, document.getElementById('app'));

