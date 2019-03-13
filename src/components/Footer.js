import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../static/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="foot navbar-fixed-bottom row">
        <div className="col align-self-center">
          Designed and built with all the love in the world by the TripElf
          team.
        </div>
      </div>
    );
  }
}

export default Footer;