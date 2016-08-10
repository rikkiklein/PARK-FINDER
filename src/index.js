import React                              from 'react';
import ReactDOM                           from 'react-dom';
import { Router, Route, browserHistory }  from 'react-router';
import App                                from './containers/App';
import ViewAllFavorites                   from './components/ViewAllFavorites.js';
import Update                             from './components/Update.js';
import About                              from './components/About.js';
import CreateDisplay                      from './components/CreateDisplay.js';
import './css/index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/viewAllFavorites" component={ViewAllFavorites}/>
    <Route path="/about" component={About}/>

  </Router>
  ,document.getElementById('root')
);
