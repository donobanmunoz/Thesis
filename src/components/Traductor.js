import React, { Component } from 'react';
import '../styles/App.css';
import NavGato from './gatoButton.js';
import NavWords from './buttonWords';
import axios from 'axios';
import TranslateForm from './TranslateForm.js';
import TranslateOutput from './TranslateOutput.js';
const key =  "trnsl.1.1.20190525T193442Z.fd8990a032b058b2.01a1a04c4e88cffcda4bb58e7263c6939465fae9";

class Traductor extends Component {
  constructor() {
        super();
        this.myRef = React.createRef();
        this.state = {
            output: '',
            textToTranslate: '',
            language: 'ru'
        }
        this.translate = this.translate.bind(this);
  }
  translate(textToTranslate, language) {<TranslateForm translate={this.translate}/>
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
          <h1>Traductor de Palabra</h1>
          <br/><br/>
          <TranslateOutput output={this.state.output} />
          <NavGato />
          <NavWords />
          <button>Traducir a Ingles</button>
          <input />
        </div>
      </div>
    );
  }
}

export default Traductor;
