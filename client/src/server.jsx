import React from 'react';
import App from './components/App.jsx';
import Basic from './components/Basic.jsx';


let dummy = { data:
  [ { id: 12,
      username: 'OpenTable Diner',
      hometown: 'Fort Wayne',
      numofreviews: 67,
      vip: 0,
      userid: 12325551,
      restaurantid: 12,
      dineddate: 1505963707509,
      overallrating: 4,
      stringified: '3:4:5:3:2:1',
      reviewtext:
       "My children was content with the crowd. Her preference was the beer! My husband won't eat here very soon.",
      recommendfor: 'Pre/post Theatre,Notable Wine List,Comfort Food',
      location: 'Irvine',
      lovedfor: 'null',
      foodrating: 3,
      servicerating: 4,
      ambiencerating: 3,
      noiselevel: 2,
      valuerating: 5,
      isrecommended: 1 },
    { id: 12,
      username: 'Gabbie',
      hometown: 'Henderson',
      numofreviews: 91,
      vip: 0,
      userid: 18578977,
      restaurantid: 12,
      dineddate: 1477566220429,
      overallrating: 5,
      stringified: '4:4:3:2:1:0',
      reviewtext:
       "We all couldn't stand the waiter! Their least-liked item was the drinks! My friends will definitely visit asap!",
      recommendfor: 'Neighborhood Gem,Great for Brunch',
      location: 'Irvine',
      lovedfor: 'null',
      foodrating: 4,
      servicerating: 4,
      ambiencerating: 2,
      noiselevel: 1,
      valuerating: 3,
      isrecommended: 0 } ],
 overallRating: 4.5,
 overallRatings: [ 50, 50, 0, 0, 0 ],
 otherRatings: [ '3.5', '4.0', '2.5', '4.0' ],
 noiseLevel: 'Moderate',
 recommend: 50,
 pages: [ 1 ],
 restaurantLocation: 'Irvine',
 lovedFor: undefined };


 class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: dummy 
    }
  }
  render () {
  return (
    <div>
      <App listing={this.props}/>
    </div>
  )}
}
 export default Reviews;