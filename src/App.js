import React, { Component } from 'react';
import LoadButton from './LoadButton';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="hero is-dark is-fullheight">
        <div class="hero-body">
        <div className="App" class="container">
          <h1 class="title">Click for a random public API!</h1>
          <LoadButton />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
