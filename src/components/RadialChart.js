import React, { Component } from "react";
import * as d3 from "d3";

class RadialChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreData: this.props.scoreData
    };
  }

  componentDidMount() {
    this.drawRadarChart();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.scoreData !== this.props.scoreData) {
      this.setState({
        scoreData: nextProps.scoreData
      });
      console.log(nextProps.scoreData);
    }
    this.drawRadarChart();
  }

  ///////////////////////////////////////////////////
  ////Inspired By Nadieh Bremer's RadarChart Code////
  ///////////////////////////////////////////////////

  drawRadarChart() {
    d3.select("#radial-chart").remove();

    var id = ".radarChart",
      margin = { top: 50, right: 50, bottom: 50, left: 50 },
      width =
        Math.min(300, window.innerWidth - 10) - margin.left - margin.right,
      height = Math.min(
        width,
        window.innerHeight - margin.top - margin.bottom - 20
      );

    //load data
    var data = [
      [
        { axis: "Noise", value: this.props.scoreData.noise },
        { axis: "Safety", value: this.props.scoreData.safety },
        { axis: "Shopping", value: this.props.scoreData.shopping },
        { axis: "Restaurant", value: this.props.scoreData.restaurant },
        { axis: "Nightlife", value: this.props.scoreData.nightlife },
        { axis: "Expense", value: this.props.scoreData.expense },
        { axis: "Transit", value: this.props.scoreData.transit }
      ]
    ];

    var canvas = {
      w: Math.min(300, window.innerWidth - 10) - margin.left - margin.right,
      h: Math.min(width, window.innerHeight - margin.top - margin.bottom - 20),
      margin: { top: 50, right: 50, bottom: 50, left: 50 },
      levels: 5,
      color: d3.scaleOrdinal().range(["#00A0B0"])
    };

    var maxValue = 10;

    var allAxis = data[0].map(function(i, j) {
        return i.axis;
      }),
      radius = Math.min(canvas.w / 2, canvas.h / 2),
      angleSlice = (Math.PI * 2) / 7;

    //Scale for the radius
    var scale = d3
      .scaleLinear()
      .range([0, radius])
      .domain([0, maxValue]);

    //Initiate the radar chart SVG
    var svg = d3
      .select(id)
      .append("svg")
      .attr("id", "radial-chart")
      .attr("width", canvas.w + canvas.margin.left + canvas.margin.right)
      .attr("height", canvas.h + canvas.margin.top + canvas.margin.bottom)
      .call(responsivefy);

    ///////////////////////////////////////////////////
    // Responsivefy function wrote by Brendan Sudol////
    ///////////////////////////////////////////////////

    function responsivefy(svg) {
      // get container + svg aspect ratio
      var container = d3.select(svg.node().parentNode),
        width = parseInt(svg.style("width")),
        height = parseInt(svg.style("height")),
        aspect = width / height;

      // add viewBox and preserveAspectRatio properties,
      // and call resize so that svg resizes on inital page load
      svg
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("perserveAspectRatio", "xMinYMid")
        .call(resize);

      d3.select(window).on("resize." + container.attr("id"), resize);

      // get width of container and resize svg to fit it
      function resize() {
        var targetWidth = parseInt(container.style("width"));
        svg.attr("width", targetWidth);
        svg.attr("height", Math.round(targetWidth / aspect));
      }
    }

    //Append a g element
    var g = svg
      .append("g")
      .attr(
        "transform",
        "translate(" +
          (canvas.w / 2 + canvas.margin.left) +
          "," +
          (canvas.h / 2 + canvas.margin.top) +
          ")"
      );

    /////////////// Draw the Circular grid //////////////////

    //Wrapper for the grid & axes
    var axisGrid = g.append("g").attr("class", "axisWrapper");

    //Draw the background circles
    axisGrid
      .selectAll(".levels")
      .data(d3.range(1, 5 + 1).reverse()) //level
      .enter()
      .append("circle")
      .attr("class", "gridCircle")
      .attr("r", function(d, i) {
        return (radius / 5) * d;
      })
      .style("fill", "#CDCDCD")
      .style("stroke", "#CDCDCD")
      .style("fill-opacity", 0);

    //Text indicating at what score is
    axisGrid
      .selectAll(".axisLabel")
      .data(d3.range(1, 5 + 1).reverse()) //level
      .enter()
      .append("text")
      .attr("class", "axisLabel")
      .attr("x", 4)
      .attr("y", function(d) {
        return (-d * radius) / 5;
      })
      .attr("dy", "0.4em")
      .style("font-size", "10px")
      .attr("fill", "#737373")
      .text(function(d, i) {
        return (maxValue * d) / 5;
      });

    //////////////////// Draw the axes //////////////////////

    //Create the straight lines radiating outward from the center
    var axis = axisGrid
      .selectAll(".axis")
      .data(allAxis)
      .enter()
      .append("g")
      .attr("class", "axis");

    //Append the lines
    axis
      .append("line")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", function(d, i) {
        return scale(maxValue * 1) * Math.cos(angleSlice * i - Math.PI / 2);
      })
      .attr("y2", function(d, i) {
        return scale(maxValue * 1) * Math.sin(angleSlice * i - Math.PI / 2);
      })
      .attr("class", "line")
      .style("stroke", "f0f0f0")
      .style("stroke-width", "2px")
      .style("fill-opacity", 0.2);

    //Append the labels at each axis
    axis
      .append("text")
      .attr("class", "legend")
      .style("font-size", "11px")
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr("x", function(d, i) {
        return scale(maxValue * 1.2) * Math.cos(angleSlice * i - Math.PI / 2);
      }) //axis name's width for the circle
      .attr("y", function(d, i) {
        return scale(maxValue * 1.2) * Math.sin(angleSlice * i - Math.PI / 2);
      })
      .text(function(d) {
        return d;
      });

    ///////////// Draw the radar chart levels ////////////////

    //The radial line function
    var radarLine = d3
      .radialLine()
      .curve(d3.curveLinearClosed)
      .radius(function(d) {
        return scale(d.value);
      })
      .angle(function(d, i) {
        return i * angleSlice;
      });

    radarLine.curve(d3.curveLinearClosed);

    //Create a wrapper for the blobs
    var levelWrapper = g
      .selectAll(".radarWrapper")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "radarWrapper");

    //Append the backgrounds
    levelWrapper
      .append("path")
      .attr("class", "radarArea")
      .attr("d", function(d, i) {
        return radarLine(d);
      })
      .style("fill", function(d, i) {
        return canvas.color(i);
      })
      .style("fill-opacity", 0.2)
      .on("mouseover", function(d, i) {
        d3.selectAll(".radarArea")
          .transition()
          .duration(200)
          .style("fill-opacity", 0.5);
      })
      .on("mouseout", function() {
        d3.selectAll(".radarArea")
          .transition()
          .duration(200)
          .style("fill-opacity", 0.2);
      });

    //Create the outlines
    levelWrapper
      .append("path")
      .attr("class", "radarStroke")
      .attr("d", function(d, i) {
        return radarLine(d);
      })
      .style("stroke-width", 2) //outline width
      .style("stroke", function(d, i) {
        return canvas.color(i);
      })
      .style("fill", "none");

    //Append the circles
    levelWrapper
      .selectAll(".radarCircle")
      .data(function(d, i) {
        return d;
      })
      .enter()
      .append("circle")
      .attr("class", "radarCircle")
      .attr("r", 4) //point size
      .attr("cx", function(d, i) {
        return scale(d.value) * Math.cos(angleSlice * i - Math.PI / 2);
      })
      .attr("cy", function(d, i) {
        return scale(d.value) * Math.sin(angleSlice * i - Math.PI / 2);
      })
      .style("fill", function(d, i, j) {
        return canvas.color(j);
      })
      .style("fill-opacity", 0.8);

    //Wrapper for the invisible circles on top
    var blobCircleWrapper = g
      .selectAll(".radarCircleWrapper")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "radarCircleWrapper");

    //Set up the small tooltip for when you hover over a circle
    var tooltip = g
      .append("text")
      .attr("class", "tooltip")
      .style("opacity", 0);

    //Append a set of invisible circles on top for the mouseover pop-up
    blobCircleWrapper
      .selectAll(".radarInvisibleCircle")
      .data(function(d, i) {
        return d;
      })
      .enter()
      .append("circle")
      .attr("class", "radarInvisibleCircle")
      .attr("r", 4 * 2) //point hover area
      .attr("cx", function(d, i) {
        return scale(d.value) * Math.cos(angleSlice * i - Math.PI / 2);
      })
      .attr("cy", function(d, i) {
        return scale(d.value) * Math.sin(angleSlice * i - Math.PI / 2);
      })
      .style("fill", "none")
      .style("pointer-events", "all")
      .on("mouseover", function(d, i) {
        var newX = parseFloat(d3.select(this).attr("cx")) - 10;
        var newY = parseFloat(d3.select(this).attr("cy")) - 10;

        tooltip
          .attr("x", newX)
          .attr("y", newY)
          .text("score: " + d.value)
          .transition()
          .duration(200)
          .style("opacity", 1);
      })
      .on("mouseout", function() {
        tooltip
          .transition()
          .duration(200)
          .style("opacity", 0);
      });
  } //RadarChart

  render() {
    return (
      <div>
        <div class="radarChart" />
      </div>
    );
  }
}

export default RadialChart;