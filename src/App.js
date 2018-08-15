import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Main from './components/Main/Main';
import Start from './components/Start/Start';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Start} />
        <Route path='/quiz' component={Main} />
      </div>
    );
  }
}

export default App;
