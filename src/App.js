import React, { Component } from 'react';
import LoadButton from './LoadButton';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Click for a random public API!</h1>
        <LoadButton />
      </div>
    );
  }
}

export default App;
