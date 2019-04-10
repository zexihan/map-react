import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import "../static/Tutorial.css";

class Video extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row mt-5 justify-content-center align-self-center">
            <div className="col mt-5 text-center about-title">Video Tutorial</div>
          </div>
          <div className="row m-5 justify-content-center align-self-center">
            <div className="col text-center">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/-XSAqfK_UwY"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Video;