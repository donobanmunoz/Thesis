import React, { Component } from 'react';
import Nav from './Nav.js';

class Words extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
       <h1> Palabras en el Banco de Conocimiento</h1>
       <button>Aguardar Palabra</button><input />
       <ul>
        <li>Galleta = Cookie</li>
        <li>Niña = Girl</li>
        <li>Casa = House</li>
      </ul>
      <Nav />
      </div>
    )
  }
}

export default Words;
