import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from './Travel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to My Travels!
        </p>
        </header>
        <Travel
          destination="Viana do Castelo"
          country="Portugal"
          image="https://storage.needpix.com/rsynced_images/monastery-santa-luzia-978277_1280.jpg"
          distance="388km"
        />
        <Travel
          destination="Nyaungshwe"
          country="Myanmar"
          image="https://images.unsplash.com/photo-1516527891761-981ae17a53b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          distance="9886km"
        />
      </div>
    );
  }
}

export default App;
