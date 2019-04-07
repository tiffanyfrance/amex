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
    barChartData: [
      {
        "item": "unicycles",
        "average unit price": "$100",
        "units sold": 34,
        "revenue total": "$3,400"
      },
      {
        "item": "weather vanes",
        "average unit price": "$15",
        "units sold": 67,
        "revenue total": "$1,005"
      },
      {
        "item": "catapults",
        "average unit price": "$200",
        "units sold": 5,
        "revenue total": "$1,000"
      },
      {
        "item": "harpoons",
        "average unit price": "$50",
        "units sold": 5,
        "revenue total": "$250"
      },
      {
        "item": "wheelbarrows",
        "average unit price": "$40",
        "units sold": 78,
        "revenue total": "$3,120"
      },
      {
        "item": "yo-yos",
        "average unit price": "$13",
        "units sold": 3000,
        "revenue total": "$39,000"
      },
      {
        "item": "blowguns",
        "average unit price": "$45",
        "units sold": 34,
        "revenue total": "$1,530"
      },
      {
        "item": "snow globes",
        "average unit price": "$10",
        "units sold": 5,
        "revenue total": "$50"
      },
      {
        "item": "didgeridoos",
        "average unit price": "$30",
        "units sold": 300,
        "revenue total": "$9,000"
      },
      {
        "item": "lava lamps",
        "average unit price": "$20",
        "units sold": 78,
        "revenue total": "$1,560"
      }
    ],
    width: 800,
    height: 300
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Tiffany France - D3 React Example
          </p>

          {/*<Histogram data={this.products.data} width={this.products.width} height={this.products.height}  />*/}
        
          <BarChart data={this.products.barChartData} width={this.products.width} height={this.products.height} />
        
        </header>
      </div>
    );
  }
}

export default App;
