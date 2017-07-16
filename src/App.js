import React, { Component } from 'react';
import ProgressBarsContainer from './components/ProgressBarsContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Progress Bars</h2>
        </div>
        <ProgressBarsContainer className="App-intro" />
      </div>
    );
  }
}

export default App;
