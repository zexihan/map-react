import React, { Component } from "react";
import * as d3 from "d3";

class NavCircles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wfData: this.props.wfData
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.wfData !== this.props.wfData) {
      this.setState({
        wfData: nextProps.wfData
      });
      console.log(nextProps.wfData);
    }
  }

  drawRadarChart() {}

  render() {
    return (
      <div class="nav-circles">
        Here is nav circles.
      </div>
    );
  }
}

export default NavCircles;