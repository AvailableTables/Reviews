import react from 'react';
import {render} from 'react-render';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import Overview from './Overview.js';
import Review from './Review.js';
import PageBar from './PageBar.js';
import Sort from './Sort.js';
import styled from 'styled-components';

import {App as Home} from 'client/src/components/App.jsx'  //needs to point to correct version

export default function App(props){

  return(
    <div>
      React Node app is set up
      <Switch>
        <Route path='/'      />


      </Switch>
    </div>



  )



}



