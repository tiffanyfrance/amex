import React, {Component} from 'react';
import * as d3 from "d3";

class Histogram extends Component {
  
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = this.props.data;

    const margin = {top: 10, right: 30, bottom: 30, left: 40},
          width = this.props.width - margin.left - margin.right,
          height = this.props.height - margin.top - margin.bottom;

    let parseDate = d3.timeParse("%d-%m-%Y");

    let x = d3.scaleTime()
              .domain([new Date(2010, 6, 3), new Date(2012, 0, 1)])
              .rangeRound([0, width]);
    let y = d3.scaleLinear()
              .range([height, 0]);

    let histogram = d3.histogram()
        .value((d) => d.date)
        .domain(x.domain())
        .thresholds(x.ticks(d3.timeMonth));

    
    let svg = d3.select("#viz").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");

  // d3.csv('./earthquakes.csv', function(error, data) {
  //   if (error) throw error;
    
    data.forEach((d) => d.date = parseDate(d.dtg));

    // data1.forEach((d) => {
    //   d['average unit price'] = +d['average unit price'].replace(/\$|,/g, '');
    //   d['revenue total'] = +d['revenue total'].replace(/\$|,/g, '');
    // });

    let bins = histogram(data);

    y.domain([0, d3.max(bins, (d) => d.length)]);

    svg.selectAll("rect")
        .data(bins)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", 1)
        .attr("transform", (d) => "translate(" + x(d.x0) + "," + y(d.length) + ")")
        .attr("width", 15)
        .attr("height", (d) => height - y(d.length))
        .attr('fill', 'steelblue');

    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    svg.append("g")
        .call(d3.axisLeft(y));
        
  // });

  let client = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

  if (client < 500) {

  } else {
    
  }

  
  }

  render(){
    return <div id="viz"></div>
  }

}

export default Histogram;