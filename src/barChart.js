import React, {Component} from 'react';
import * as d3 from 'd3';

class BarChart extends Component {
  
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = this.props.data;

    const margin = {top: 10, right: 30, bottom: 30, left: 40},
          width = this.props.width - margin.left - margin.right,
          height = this.props.height - margin.top - margin.bottom;

    data.forEach((d) => {
      d.price = +d['average unit price'].replace(/\$|,/g, '');
      d.revenue = +d['revenue total'].replace(/\$|,/g, '');
    });


    let client = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    if (client < 500) {

      //horizontal view
      let svg = d3.select('#barChart')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      let x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
        y = d3.scaleLinear().rangeRound([height, 0]);

      x.domain(data.map((d) => d.item));
      y.domain([0, d3.max(data, (d) => d.price)]);

      svg.append('g')
          .attr('class', 'axis axis--x')
          .attr('transform', 'translate(0,' + height + ')')
          .call(d3.axisBottom(x));

      svg.append('g')
          .attr('class', 'axis axis--y')
          .call(d3.axisLeft(y).ticks(10))
          .append('text')
          .attr('transform', 'rotate(-90)')
          .attr('y', 6)
          .attr('dy', '0.71em')
          .attr('text-anchor', 'end')
          .text('price');

      svg.selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
          .attr('class', 'bar')
          .attr('x', (d) => x(d.item))
          .attr('y', (d) => y(d.price))
          .attr('width', x.bandwidth())
          .attr('height', (d) => height - y(d.price))
          .attr('fill', 'steelblue');

    } else {

      //vertical view
      let svg = d3.select('#barChart')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      let x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
        y = d3.scaleLinear().rangeRound([height, 0]);

      x.domain(data.map((d) => d.item));
      y.domain([0, d3.max(data, (d) => d.price)]);

      svg.append('g')
          .attr('class', 'axis axis--x')
          .attr('transform', 'translate(0,' + height + ')')
          .call(d3.axisBottom(x));

      svg.append('g')
          .attr('class', 'axis axis--y')
          .call(d3.axisLeft(y).ticks(10))
          .append('text')
          .attr('transform', 'rotate(-90)')
          .attr('y', 6)
          .attr('dy', '0.71em')
          .attr('text-anchor', 'end')
          .text('price');

      svg.selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
          .attr('class', 'bar')
          .attr('x', (d) => x(d.item))
          .attr('y', (d) => y(d.price))
          .attr('width', x.bandwidth())
          .attr('height', (d) => height - y(d.price))
          .attr('fill', 'steelblue');


    }


    

  // d3.tsv('data.tsv')
  //   .then((data) => {
  //       return data.map((d) => {
  //         d.frequency = +d.frequency;

  //         return d;  
  //       });
  //   })
  //   .then((data) => {
  //       x.domain(data.map(function(d) { return d.letter; }));
  //       y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

  //       g.append('g')
  //           .attr('class', 'axis axis--x')
  //           .attr('transform', 'translate(0,' + height + ')')
  //           .call(d3.axisBottom(x));

  //       g.append('g')
  //           .attr('class', 'axis axis--y')
  //           .call(d3.axisLeft(y).ticks(10, '%'))
  //         .append('text')
  //           .attr('transform', 'rotate(-90)')
  //           .attr('y', 6)
  //           .attr('dy', '0.71em')
  //           .attr('text-anchor', 'end')
  //           .text('Frequency');

  //       g.selectAll('.bar')
  //         .data(data)
  //         .enter().append('rect')
  //           .attr('class', 'bar')
  //           .attr('x', function(d) { return x(d.letter); })
  //           .attr('y', function(d) { return y(d.frequency); })
  //           .attr('width', x.bandwidth())
  //           .attr('height', function(d) { return height - y(d.frequency); });
  //   })
  //   .catch((error) => {
  //       throw error;
  //   });

  
  }

  render(){
    return <div id='barChart'></div>
  }

}

export default BarChart;