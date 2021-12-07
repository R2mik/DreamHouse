import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from "./nav";
import {AboutMe} from './about-me';
import {Home} from './home';
import {Projects} from './projects';
import SignUp from './sign-up';
import {Footer} from './footer';
import {Contact} from './contact';

import '../assets/styles/App.css';

//->changed class component to functional component and changed export default to export 
export default function App() {
    return (
      <Router>
      <div className="App" id="app-id">
        <Nav/>
        <div className="container-main">
          <Switch>
          {/* 1. create array with routes , 2. iterate this array using method map */}
            <Route path="/DreamHouse" component={Home}/>
            <Route path="/Projects" component={Projects}/>
            <Route path="/about-me" component={AboutMe}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/Footer" component={Footer}/>
            <Route path="/sign-up" component={SignUp}/>
          </Switch>
        </div>
        <Footer/>
      </div>
      </Router>
    );
  }
