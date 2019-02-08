import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div
            style={{
              position: 'absolute', left: '50%', top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <h1>TripElf - NYC</h1>
            <Link to={`/map`}>
              <button type="button" className="btn btn-dark btn-block mt-4">Map</button>
            </Link>
          </div>
        </div>
      </div>
      
    )}
};

export default Landing;
