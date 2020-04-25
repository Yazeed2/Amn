import React, { Component } from "react";
import Home from './Home'
import logo from './logo.svg';
import './App.css';
import Contactus from './Contactus'
import './Contactus.css';
import Nav from './Nav'
import Footer from './Footer'
import FAQ from './FAQ'
import About from './About'
import { Accordion, Icon } from 'semantic-ui-react'


function App() {
  return (
    <div className="App" style={{ backgroundColor: '#E5E5E5' }}>
      <Nav />
      <Home />
      <About />
      <FAQ />
      <Contactus />
      <Footer />

    </div>
  );
}

export default App;
