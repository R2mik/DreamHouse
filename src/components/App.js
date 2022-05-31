import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from "./nav";
import { Home } from './home';
import { Projects } from './projects';
import SignUp from './sign-up';
import { Footer } from './footer';
import { Contact } from './contact';

import '../assets/styles/App.css';

export default function App() {
    return (
      <Router>
      <div className="App" id="app-id">
        <Nav/>
        <div className="container-main">
          <Switch>
            <Route path="/" component={Home}/>
            <Route path="/Projects" component={Projects}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/Footer" component={Footer}/>
            <Route path="/sign-up" component={SignUp}/>
          </Switch>
        <Footer/>
        </div>
      </div>
      </Router>
    );
  }
