import React, { Component } from "react";
import Home from './Home'
import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import Footer from './Footer'
import Profile from './Profile'
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App" style ={{backgroundColor:'#E5E5E5'}}>
      <Nav />
      <Home />
      <Footer />
<Profile />

<Nav className="ml-auto">

                
<Nav.Link href="/Profile" >Profile</Nav.Link>



</Nav>

<BrowserRouter>
<Switch>
<Route path="/Profile" component={Profile} />
  </Switch>
  </BrowserRouter>

    </div>
  );
}

export default App;
