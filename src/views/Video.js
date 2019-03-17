import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

class Video extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid d-flex h-100">
          <div className="m-5 embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/DaxYfL5lbCM"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Video;