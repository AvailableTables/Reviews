import react from 'react';
import {render} from 'react-render';
import {BrowserRouter as Router} from 'react-router-dom';

import App from 'client/src/components/App.jsx'


render((
  <Router>
    <App reviews={window.__PRELOADED_STATE__ }/>
  </Router>,
  document.getElementById('root')
));




/*
<!doctype <!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>TableOpen - Reviews Component</title>
</head>
<body>
  <div id="app"></div>
  <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <script type="text/javascript" src="/bundle.js" > </script>
  <!-- <script type="text/javascript" src="https://s3.amazonaws.com/hrnyc18-tableopen-reviews/ReviewsBundle.js"></script> -->
  <script>
    ReactDOM.render(
      React.createElement(Reviews),
      document.getElementById('app')
    );
  </script>
</body>
</html>


*/