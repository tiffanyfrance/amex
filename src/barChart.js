import React, {Component} from 'react';
import * as d3 from 'd3';

class BarChart extends Component {
  
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = this.props.data;

    const clientWidth = d3.select('body').node().getBoundingClientRect().width;
    const clientHeight = d3.select('body').node().getBoundingClientRect().height;

    const margin = {top: 30, right: 30, bottom: 30, left: 80},
          width = clientWidth - margin.left - margin.right,
          height = (clientHeight * 0.75) - margin.top - margin.bottom;

    let svg = d3.select('#barChart')
        .append('svg')
        .attr('width', width + margin.top + margin.bottom)
        .attr('height', height + margin.left + margin.right)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    data.forEach((d) => {
      d.price = +d['average unit price'].replace(/\$|,/g, '');
      d.revenue = +d['revenue total'].replace(/\$|,/g, '');
    });

    if (clientWidth < 700) {

      //horizontal view
      let x = d3.scaleLinear()
          .range([0, (width - margin.right)]),
        y = d3.scaleBand()
          .rangeRound([height, 0])
          .padding(0.1);

      x.domain([0, d3.max(data, (d) => d.price)]);
      y.domain(data.map((d) => d.item));

      //xAxis
      svg.append('g')
          .attr('class', 'axis axis--x')
          .call(d3.axisTop(x).ticks(10))
          .append('text')
          .attr('text-anchor', 'middle')
          .text('price');

      //yAxis
      svg.append('g')
          .attr('class', 'axis axis--y')
          .call(d3.axisLeft(y));

      svg.selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
          .attr('class', 'bar')
          .attr('y', (d) => y(d.item))
          .attr('x', (d) => 0)
          .attr('height', y.bandwidth())
          .attr('width', (d) => x(d.price))
          .attr('fill', 'steelblue');

    } else {

      //default view
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