import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import Login from './Login'
import Home from './Home'
import Attendence from './Attendence'
import { Route, BrowserRouter as Router } from 'react-router-dom'
const routing = (
    <Router>
      <div>
      
        <Route exact path="/" component={Login}/>
        <Route path="/Home" component={Home} />
        <Route path="/Attendence" component={Attendence}/>
      </div>
    </Router>
  )
ReactDOM.render(routing, document.getElementById('root'));

