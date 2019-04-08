import React, { Component } from 'react';
import './App.css';
import MetricPicker from './MetricPicker.js';
import Histogram from './Histogram.js';
import BarChart from './BarChart.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      metric: 'price'
    }
  }

  metricChange = (event) => {
    console.log(event.target.value);
    this.setState({
      metric: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Tiffany France - D3 React Example
          </p>

          <MetricPicker onChange={this.metricChange} value={this.state.metric} />
          {/*<Histogram data={this.products.data} width={this.products.width} height={this.products.height}  />*/}
          
          <BarChart metric={this.state.metric} />
        
        </header>
      </div>
    );
  }
}

export default App;
