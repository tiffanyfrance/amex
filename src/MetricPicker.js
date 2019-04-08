import React, { Component } from 'react';

class MetricPicker extends Component {
  render() {
    return (
      <select className="metric-picker" 
        onChange={this.props.onChange} 
        value={this.props.value}>
        <option value="price">Average unit price</option>
        <option value="units">Units sold</option>
        <option value="revenue">Revenue total</option>
      </select>
    );
  }
}

export default MetricPicker;