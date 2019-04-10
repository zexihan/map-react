import React, { Component } from "react";
import * as d3 from "d3";

import '../static/NavCircles.css';

class NavCircles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wfData: this.props.wfData
    };
  }

  componentDidMount() {
    this.drawNavCircles(this.onCircleClick);
    d3.select("." + this.props.selectedTopic).style("fill", "green");
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.wfData !== this.props.wfData) {
      this.setState({
        wfData: nextProps.wfData
      });
      console.log(nextProps.wfData);
      this.drawNavCircles(this.onCircleClick);
      d3.select("." + nextProps.selectedTopic).style("fill", "green");
    }
  }

  drawNavCircles = onCircleClick => {
    d3.select("#nav-circles").remove();
    var margin = {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10
    };

    var width = Math.min(400, window.innerWidth - 10) - margin.right - margin.left;
    var height = Math.min(200, window.innerWidth - 10) - margin.right - margin.left;

    var x = d3.scaleLinear().domain([0, 10]).range([10, 500]);
    var y = d3.scaleLinear().domain([0, 50]).range([100, 50])

    var svg = d3.select(".nav-circles")
      .append("svg")
      .attr("id", "nav-circles")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.bottom + margin.right)
      .call(responsivefy)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    function responsivefy(svg) {
      var container = d3.select(svg.node().parentNode),
        width = parseInt(svg.style("width")),
        height = parseInt(svg.style("height")),
        aspect = width / height;
      svg.attr("viewBox", "0 0 " + width + " " + height)
        .attr("perserveAspectRatio", "xMinYMid")
        .call(resize);
      d3.select(window).on("resize." + container.attr("id"), resize);
      function resize() {
        var targetWidth = parseInt(container.style("width"));
        svg.attr("width", targetWidth);
        svg.attr("height", Math.round(targetWidth / aspect));
      }
    }


    var word_frequency = [{
      pos1: 1.2,
      pos2: 40,
      num: this.state.wfData.safety * 500 + 50,
      cate: "Safety"
    }, {
      pos1: 3,
      pos2: 70,
      num: this.state.wfData.expense * 500 + 50,
      cate: "Expense"
    }, {
      pos1: 6,
      pos2: 15,
      num: this.state.wfData.transit * 500 + 50,
      cate: "Transit"
    }, {
      pos1: 4.5,
      pos2: 60,
      num: this.state.wfData.noise * 500 + 50,
      cate: "Noise"
    }, {
      pos1: 2.5,
      pos2: -5,
      num: this.state.wfData.host * 500 + 50,
      cate: "Host"
    }, {
      pos1: 1,
      pos2: -40,
      num: this.state.wfData.shopping * 500 + 50,
      cate: "Shopping"
    }, {
      pos1: 4,
      pos2: -40,
      num: this.state.wfData.nightlife * 500 + 50,
      cate: "Nightlife"
    }, {
      pos1: 6,
      pos2: -50,
      num: this.state.wfData.restaurant * 500 + 50,
      cate: "Restaurants"
    }];

    svg.selectAll("circle")
      .data(word_frequency)
      .enter()
      .append("circle")
      .attr("class", function (d) { return d.cate; })
      .attr("cx", function (d) {
        return x(d.pos1);
      })
      .attr("cy", function (d) {
        return y(d.pos2);
      })
      .attr("r", function (d) {
        return 2 * Math.sqrt(d.num);
      })


    svg.selectAll("text")
      .data(word_frequency)
      .enter()
      .append("text")
      .style("text-anchor", "middle")
      .attr("class", function (d) { return d.cate; })
      .attr("dx", function (d) {
        return x(d.pos1);
      })
      .attr("dy", function (d) {
        return y(d.pos2 - 40);
      })
      .text(function (d) {
        return d.cate;
      });

    const cates = ["Safety", "Expense", "Transit", "Noise", "Host", "Shopping", "Nightlife", "Restaurants"];

    for (var i = 0; i < cates.length; i++) {
      svg.select("." + cates[i]).on("click", function () {
        d3.selectAll("circle")
          .style("fill", "#3d81b4")
        d3.select(this)
          .style("fill", "green");
        onCircleClick(d3.select(this).attr("class"));
      });
    }

    function type(d) {
      d.count = +d.count;
      return d;
    }
  }

  onCircleClick = topic => {
    this.setState({
      selectedCate: topic
    });
    this.props.toggleTopic(topic)
  }

  render() {
    return (
      <div class="nav-circles"></div>
    );
  }
}

export default NavCircles;