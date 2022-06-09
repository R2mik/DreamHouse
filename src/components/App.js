import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from "./nav";
import { Home } from './home';
import { Projects } from './projects';
import SignUp from './sign-up';
import { Contact } from './contact';

import '../assets/styles/App.css';

export default function App() {
    return (
      <Router>
      <div className="App" id="app-id">
        <Nav/>
        <div className="container-main">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Projects" component={Projects}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/sign-up" component={SignUp}/>
          </Switch>
        </div>
      </div>
      </Router>
    );
  }
