import React                              from 'react';
import ReactDOM                           from 'react-dom';
import { Router, Route, browserHistory }  from 'react-router';
import App                                from './containers/App';
import ViewAllFavorites                   from './components/ViewAllFavorites.js';
import Update                             from './components/Update.js';
import Globe                              from './components/Globe.js';
import CreateDisplay                      from './components/CreateDisplay.js';
import './css/index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/viewAllFavorites" component={ViewAllFavorites}/>
    <Route path="/findHospital" component={Globe}/>

  </Router>
  ,document.getElementById('root')
);
