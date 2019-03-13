import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

class Video extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <h1>Demo Video</h1>
          <div className="row">
            <div className="col text-center">
              <iframe
                width="80%"
                height="600"
                src="https://www.youtube.com/embed/m_9ClegdPME"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Video;