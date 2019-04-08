import React, {Component} from 'react';
import * as d3 from 'd3';

class BarChart extends Component {

  constructor(props) {
    super(props);

    this.chartRef = React.createRef();
    this.state = {
      data: null
    }
  }
  
  componentDidMount() {
    d3.json('http://localhost:8080/getData')
      .then((data) => {
        data.forEach((d) => {
          d.price = +d['average unit price'].replace(/\$|,/g, '');
          d.revenue = +d['revenue total'].replace(/\$|,/g, '');
          d.units = +d['units sold'];  
        });

        this.setState({
          data
        });
      });

    this.clientWidth = d3.select('body').node().getBoundingClientRect().width;
    this.clientHeight = d3.select('body').node().getBoundingClientRect().height;

    this.margin = {top: 30, right: 30, bottom: 30, left: 80};
    this.width = this.clientWidth - this.margin.left - this.margin.right;
    this.height = (this.clientHeight * 0.75) - this.margin.top - this.margin.bottom;

    this.svg = d3.select(this.chartRef.current)
        .attr('width', this.width + this.margin.top + this.margin.bottom)
        .attr('height', this.height + this.margin.left + this.margin.right)
        .append('g')
        .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    this.xAxis = this.svg.append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + this.height + ')');

    this.yAxis = this.svg.append('g')
        .attr('class', 'axis axis--y');
  }

  drawChart() {
    let {data} = this.state;

    if (!data) {
      return;
    }

    let { metric } = this.props;

    if (this.clientWidth < 700) {
      //horizontal view
      let x = d3.scaleLinear().range([0, (this.width - this.margin.right)]),
          y = d3.scaleBand().rangeRound([this.height, 0]).padding(0.1);

      x.domain([0, d3.max(data, (d) => d[metric])]);
      y.domain(data.map((d) => d.item));

      this.updateAxes(x,y);

      this.mergeBar(data)
        .attr('fill', 'steelblue')
        .transition()
        .duration(500)
        .attr('y', (d) => y(d.item))
        .attr('x', (d) => 0)
        .attr('height', y.bandwidth())
        .attr('width', (d) => x(d[metric]));

    } else {
      //default view
      let x = d3.scaleBand().rangeRound([0, this.width]).padding(0.1),
          y = d3.scaleLinear().rangeRound([this.height, 0]);

      x.domain(data.map((d) => d.item));
      y.domain([0, d3.max(data, (d) => d[metric])]);

      this.updateAxes(x,y);

      this.mergeBar(data)
        .attr('fill', 'steelblue')
        .transition()
        .duration(500)
        .attr('x', (d) => x(d.item))
        .attr('y', (d) => y(d[metric]))
        .attr('width', x.bandwidth())
        .attr('height', (d) => this.height - y(d[metric]));
    }
  }

  updateAxes(x,y) {
    this.xAxis
        .call(d3.axisBottom(x).tickSizeOuter(0).tickSize(0));

    this.yAxis
        .call(d3.axisLeft(y).tickSizeOuter(0).tickSize(0));
  }

  mergeBar(data) {
    let bar = this.svg.selectAll('.bar')
        .data(data);

    let enterBar = bar.enter()
      .append('rect')
      .attr('class', 'bar');

    return enterBar.merge(bar);
  }

  render() {
    return (
      <svg ref={this.chartRef}></svg>
    )
  }

  componentDidUpdate() {
    this.drawChart();
  }
}

export default BarChart;