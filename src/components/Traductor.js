import React, { Component } from 'react';
import axios from 'axios';
import TranslateForm from './TranslateForm.jsx';
import NavGato from './gatoButton.js';
import NavWords from './buttonWords.js';
const key =  "trnsl.1.1.20190525T193442Z.fd8990a032b058b2.01a1a04c4e88cffcda4bb58e7263c6939465fae9";

class Traductor extends Component {
  constructor() {
        super();
        this.state = {
            output: ''
        }
        this.translate = this.translate.bind(this);
  }
  translate(textToTranslate, language) {
    axios.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+key+'&lang='+language+'&text='+textToTranslate)
    .then((response) => {
      var output = response.data.text[0];
      this.setState({ output });
    })
    .catch((error) =>
      console.log(error)
    );
  }
  render() {
    return (
      <div className="container">
        <div className="text-center col-md-6 col-md-offset-3">
          <h1>Traductor de Palabras</h1>
          <br/><br/>
          <TranslateForm translate={this.translate}/>
          <h2 className="text-success">{this.state.output}</h2>
          <NavGato />
          <NavWords />
        </div>
      </div>
    );
  }
}

export default Traductor;
