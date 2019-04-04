import React, { Component } from "react";
import * as d3 from "d3";

class RadialChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreData: this.props.scoreData
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.scoreData !== this.props.scoreData) {
      this.setState({
        scoreData: nextProps.scoreData
      });
      console.log(nextProps.scoreData);
    }
  }

  drawRadarChart() {}

  render() {
    return (
      <div>
        <div class="radarChart" />
        {this.drawRadarChart()}
        Here is a gradar chart.
      </div>
    );
  }
}

export default RadialChart;