import React, {Component} from 'react';
import * as d3 from "d3";

class Histogram extends Component {
  
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = this.props.data;

    const w = this.props.width;
    const h = this.props.height;

    const svg = d3.select("#foo")
    .append("svg")
    .attr("width", w)
    .attr("height", h);
                  
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green")

    // const bar = svg.append("g")
    //   .attr("fill", "steelblue")
    //   .selectAll("rect")
    //   .data(bins)
    //   .join("rect")
    //     .attr("x", d => x(d.x0) + 1)
    //     .attr("width", d => Math.max(0, x(d.x1) - x(d.x0) - 1))
    //     .attr("y", d => y(d.length))
    //     .attr("height", d => y(0) - y(d.length));

    // svg.append("g")
    //     .call(xAxis);
    
    // svg.append("g")
    //     .call(yAxis);

    
  
  }

  render(){
    return <div id="foo"></div>
  }

}

export default Histogram;