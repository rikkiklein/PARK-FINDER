import React                              from 'react';
import ReactDOM                           from 'react-dom';
import App                                from './containers/App';
import ViewAllFavorites                   from './components/ViewAllFavorites.js';
import Update                             from './components/Update.js';
import { Router, Route, browserHistory }  from 'react-router';

import './css/index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/viewAllFavorites" component={ViewAllFavorites}/>
  </Router>
  ,document.getElementById('root')
);
