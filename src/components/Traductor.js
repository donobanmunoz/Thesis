import React, { Component } from 'react';
import '../styles/App.css';
import NavGato from './gatoButton.js';
import NavWords from './buttonWords';

class Traductor extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h1>Traductor para aprendizaje </h1>
        <NavGato />
        <NavWords />
        <input className="traductor"></input>
        <button className="">Traducir Palabra</button>
        <textarea rows="10" cols="20"/>
        <h1>Palabra ya Traducida</h1>
      </div>
    )
  }
}

export default Traductor;
