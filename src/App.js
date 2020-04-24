import React, { Component } from "react";
import Home from './Home'
import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import Footer from './Footer'

function App() {
  return (
    <div className="App" style ={{backgroundColor:'#E5E5E5'}}>
      <Nav />
      <Home />
      <Footer />

    </div>
  );
}

export default App;
