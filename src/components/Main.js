import React, { Component } from 'react';
import '../styles/App.css';
import Nav from '../components/Nav.js';
import Example from './Carrousel.js';



 class Main extends Component {
    render() {
      return (
        <div>
          <h1> Aprende Y Diviertete  </h1>
          <Nav />
          <Example />
        </div>
      )
    }
 }

export default Main;
