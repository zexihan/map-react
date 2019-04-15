import React, { Component } from 'react';

import '../static/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="foot navbar-fixed-bottom row">
        <div className="col align-self-center">
          Designed and built with all the love in the world by the trip
          <span style={{ color: "#cc0041" }}>elf</span> team.
        </div>
      </div>
    );
  }
}

export default Footer;