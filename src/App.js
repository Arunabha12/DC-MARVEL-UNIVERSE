import React, { Component } from 'react';
import './App.css';
import Superhero from './Components/Superhero/Superhero';
import Header from './Components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Superhero />
      </div>
    );
  }
}

export default App;
