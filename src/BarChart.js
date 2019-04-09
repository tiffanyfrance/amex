import React, {Component} from 'react';
import _ from 'lodash';
import * as d3 from 'd3';

class BarChart extends Component {

  constructor(props) {
    super(props);

    this.chartRef = React.createRef();
    this.state = {
      data: null
    }
  }

  updateDimensions = _.debounce(() => {
    let clientWidth = d3.select('#viz').node().getBoundingClientRect().width;
    let clientHeight = d3.select('#viz').node().getBoundingClientRect().height;

    let margin = {top: 30, right: 30, bottom: 30, left: 80};
    let width = clientWidth - margin.left - margin.right;
    let height = clientHeight - margin.top - margin.bottom;

    this.setState({
      clientWidth,
      clientHeight,
      margin,
      width,
      height
    });
  }, 200)

  componentWillMount() {
    this.updateDimensions();
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

    window.addEventListener('resize', this.updateDimensions);

    this.setupChart();
  }

  setupChart() {
    this.svg = d3.select(this.chartRef.current);

    this.mainGroup = this.svg.append('g');

    this.xAxis = this.mainGroup.append('g')
        .attr('class', 'axis axis--x');

    this.yAxis = this.mainGroup.append('g')
        .attr('class', 'axis axis--y');
  }

  drawChart() {
    let { data, width, height, margin, clientWidth } = this.state;
    let { metric } = this.props;

    if (!data || !margin) {
      return;
    }

    this.svg
      .attr('width', width + margin.top + margin.bottom)
      .attr('height', height + margin.left + margin.right);

    this.mainGroup.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    this.xAxis.attr('transform', 'translate(0,' + height + ')');

    if (clientWidth < 700) {
      //mobile view
      let x = d3.scaleLinear().range([0, (width - margin.right)]),
          y = d3.scaleBand().rangeRound([height, 0]).padding(0.1);

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
      //desktop view
      let x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
          y = d3.scaleLinear().rangeRound([height, 0]);

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
        .attr('height', (d) => height - y(d[metric]));
    }
  }

  updateAxes(x,y) {
    this.xAxis
      .transition()
      .duration(500)
      .call(d3.axisBottom(x).tickSizeOuter(0).tickSize(0));

    this.yAxis
      .transition()
      .duration(500)
      .call(d3.axisLeft(y).tickSizeOuter(0).tickSize(0));
  }

  mergeBar(data) {
    let bar = this.mainGroup.selectAll('.bar')
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

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }
}

export default BarChart;