import React, { Component } from 'react';
import '../styles/App.css';
import NavGato from './gatoButton.js';

class Traductor extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h1>Traductor para aprendizaje </h1>
        <NavGato />
      </div>
    )
  }
}

export default Traductor;
