import React, { Component } from 'react';
import './App.css';
import Histogram from './histogram.js';
import BarChart from './barChart.js';

class App extends Component {

  products = {
    data: [
      {dtg: '01-01-2011', value: 3},
      {dtg: '01-01-2011', value: 3},
      {dtg: '01-01-2011', value: 3},
      {dtg: '01-01-2011', value: 3.1},
      {dtg: '01-01-2011', value: 3.1},
      {dtg: '01-01-2011', value: 3.2},
      {dtg: '01-01-2011', value: 3.2},
      {dtg: '01-01-2011', value: 3.2},
      {dtg: '01-01-2011', value: 3.3},
      {dtg: '01-01-2011', value: 3.3},
      {dtg: '01-01-2011', value: 3.4},
      {dtg: '01-01-2011', value: 3.4},
      {dtg: '01-01-2011', value: 3.8},
      {dtg: '01-01-2011', value: 3.8},
      {dtg: '01-01-2011', value: 4.4},
      {dtg: '01-02-2011', value: 3},
      {dtg: '01-02-2011', value: 3},
      {dtg: '01-02-2011', value: 3.2},
      {dtg: '01-02-2011', value: 3.4},
      {dtg: '01-02-2011', value: 3.4},
      {dtg: '01-02-2011', value: 3.4},
      {dtg: '01-02-2011', value: 3.5},
      {dtg: '01-02-2011', value: 3.6},
      {dtg: '01-03-2011', value: 3},
      {dtg: '01-03-2011', value: 3},
      {dtg: '01-03-2011', value: 3},
      {dtg: '01-03-2011', value: 3.1},
      {dtg: '01-03-2011', value: 3.1},
      {dtg: '01-03-2011', value: 3.1},
      {dtg: '01-03-2011', value: 3.1},
      {dtg: '01-03-2011', value: 3.1},
      {dtg: '01-03-2011', value: 3.3},
      {dtg: '01-03-2011', value: 3.3},
      {dtg: '01-03-2011', value: 3.3},
      {dtg: '01-03-2011', value: 3.4},
      {dtg: '01-03-2011', value: 3.4},
      {dtg: '01-03-2011', value: 3.5},
      {dtg: '01-03-2011', value: 3.5},
      {dtg: '01-03-2011', value: 3.6},
      {dtg: '01-03-2011', value: 4.5},
      {dtg: '01-03-2011', value: 4.6},
      {dtg: '01-04-2011', value: 3},
      {dtg: '01-04-2011', value: 3},
      {dtg: '01-04-2011', value: 3},
      {dtg: '01-04-2011', value: 3.2},
      {dtg: '01-04-2011', value: 3.2},
      {dtg: '01-04-2011', value: 3.3},
      {dtg: '01-04-2011', value: 3.3},
      {dtg: '01-04-2011', value: 3.3},
      {dtg: '01-04-2011', value: 3.4},
      {dtg: '01-04-2011', value: 3.5},
      {dtg: '01-04-2011', value: 3.7},
      {dtg: '01-04-2011', value: 3.8},
      {dtg: '01-04-2011', value: 4.2}
    ],
    width: 800,
    height: 400
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Tiffany France - D3 React Example
          </p>

          {/*<Histogram data={this.products.data} width={this.products.width} height={this.products.height}  />*/}
        
          <BarChart />
        
        </header>
      </div>
    );
  }
}

export default App;
