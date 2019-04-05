import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Histogram from './histogram.js';

class App extends Component {

  state = {
    data: [12, 5, 6, 6, 9, 10],
    width: 450,
    height: 300
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Tiffany France - D3 React Example
          </p>

          <Histogram data={this.state.data} width={this.state.width} height={this.state.height}  />
        
        </header>
      </div>
    );
  }
}

export default App;
