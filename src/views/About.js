import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import NameCard from '../components/NameCard';

import '../static/About.css';

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <h1>About</h1>
          <div className="card-group">
            <div className="row my-3">
              <div className="col">
                <NameCard name="Zexi Han" />
              </div>
              <div className="col">
                <NameCard name="Rui Wang" />
              </div>
            </div>
            <div className="row my-3">
              <div className="col">
                <NameCard name="Wenyi Jin" />
              </div>
              <div className="col">
                <NameCard name="Qinyu Chen" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default About;
