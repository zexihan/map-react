import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../static/Design.css';

class Design extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <h1>Design Process</h1>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Design;
