import React, { Component } from "react";
import Home from './Home'
import logo from './logo.svg';
import './App.css';
import Contactus from './Contactus'
import './Contactus.css';
import Nav from './Nav'
import Footer from './Footer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RegisterC from './components/RegisterC'
import User from './components/User'
import Drivers from './components/Drivers'
import Login from './components/Login'
import Register from './components/Register'
import FAQ from './FAQ'
import About from './About'
import { Accordion, Icon } from 'semantic-ui-react'

function App() {
  return (
        <div className="App" style={{ backgroundColor: '#E5E5E5' }}>

    <Router>
  

    <Route exact path='/' render={(props) =><>

      <Nav {...props}/>
      <Home />
      <About />
      <FAQ />
      <Contactus />
      <Footer />
 </> }/> 
    <Route  path='/user/:id' render={(props) => <User {...props} /> }  />
    <Route  path='/driver/:id' render={(props) => <Drivers {...props} /> }  />
       
    <Route  path='/login' render={(props) => <Login {...props} /> }  />
    <Route  path='/register' render={(props) => <Register {...props} /> }  />
    {/* <Route  path='/registerC' render={(props) => <RegisterC {...props} /> }  /> */}

       
        </Router>
</div>
  );
}

export default App;
