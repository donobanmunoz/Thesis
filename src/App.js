import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './components/Main.js';
import Traductor from './components/Traductor.js';
import Gato from './components/Gato.js';
import Words from './components/Words.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  render() {
    return (
      <BrowserRouter>
        <div >
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/traductor" component={Traductor} />
              <Route path="/gato" component={Gato} />
              <Route path="/words" component={Words} />
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
