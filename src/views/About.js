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
          <div className="row m-5 justify-content-center align-self-center">
            <div className="col text-center about-title">
              Nice to meet you
            </div>
          </div>
          <div className="row m-5 justify-content-center align-self-center">
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <img
                  src={`/images/man.png`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Zexi Han</h5>
                  <div className="card-text text-black-50">
                    Web Developer
                  </div>
                  <div className="card-text text-black-50">
                    Data Scientist
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <img
                  src={`/images/boy.png`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Rui Wang</h5>
                  <div className="card-text text-black-50">
                    Data Scientist
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <img
                  src={`/images/woman.png`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Wenyi Jin</h5>
                  <div className="card-text text-black-50">
                    Data Scientist
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <img
                  src={`/images/girl.png`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Qinyu Chen</h5>
                  <div className="card-text text-black-50">
                    UX/UI Designer
                  </div>
                  <div className="card-text text-black-50">
                    Data Scientist
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row m-5 justify-content-center align-self-center">
            <div className="col text-center about-title">
              Design process of tripelf
            </div>
          </div>
          <div className="row m-5 justify-content-center align-self-center">
            <div className="col text-center">
              Here is how we designed and created the tripelf.
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default About;
