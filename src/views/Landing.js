import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CardDeck from '../components/CardDeck';

import '../static/Landing.css';

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid fill-height">
          <div className="row starting-page">
            <div className="col align-self-center">
              <div className="brand">
                trip<span style={{ color: "#cc0041" }}>elf</span>
              </div>
              <p className="lead">
                Find your favourite neighborhood for your next trip.
              </p>
              <Link to={`/map`} target="_blank">
                <button
                  type="button"
                  className="btn btn-outline-dark get-started"
                >
                  Get started
                </button>
              </Link>
            </div>
            <div className="col align-self-center text-center">
              <span className="logo">
                <i className="fas fa-map-marked-alt" />
              </span>
            </div>
          </div>

          <hr className="featurette-divider" />

          {/* Marketing messaging and featurettes */}

          <div className="row featurette">
            <div className="col align-self-center">
              <h2 className="text-center marketing-title mb-5">
                How trip<span style={{ color: "#cc0041" }}>elf</span> makes
                your trip better
              </h2>
              <CardDeck />
            </div>
          </div>

          <hr className="featurette-divider" />

          {/* START THE FEATURETTES */}

          <section id="feature-1" />
          <div className="row featurette">
            <div className="col-md-7 align-self-center">
              <h2 className="featurette-heading">
                First featurette heading.{" "}
                <span className="text-muted">It'll blow your mind.</span>
              </h2>
              <p className="lead">
                Donec ullamcorper nulla non metus auctor fringilla.
                Vestibulum id ligula porta felis euismod semper. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur.
                Fusce dapibus, tellus ac cursus commodo.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="featurette-image img-fluid mx-auto"
                src="https://msaf.com.fj/wp-content/uploads/2017/06/500x500.png"
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          <section id="feature-2" />
          <div className="row featurette">
            <div className="col-md-7 order-md-2 align-self-center">
              <h2 className="featurette-heading">
                Oh yeah, it's that good.{" "}
                <span className="text-muted">See for yourself.</span>
              </h2>
              <p className="lead">
                Donec ullamcorper nulla non metus auctor fringilla.
                Vestibulum id ligula porta felis euismod semper. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur.
                Fusce dapibus, tellus ac cursus commodo.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                className="featurette-image img-fluid mx-auto"
                src="https://msaf.com.fj/wp-content/uploads/2017/06/500x500.png"
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          <section id="feature-3" />
          <div className="row featurette">
            <div className="col-md-7 align-self-center">
              <h2 className="featurette-heading">
                And lastly, this one.{" "}
                <span className="text-muted">Checkmate.</span>
              </h2>
              <p className="lead">
                Donec ullamcorper nulla non metus auctor fringilla.
                Vestibulum id ligula porta felis euismod semper. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur.
                Fusce dapibus, tellus ac cursus commodo.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="featurette-image img-fluid mx-auto"
                src="https://msaf.com.fj/wp-content/uploads/2017/06/500x500.png"
              />
            </div>
          </div>

          {/* END THE FEATURETTES */}

          <hr className="featurette-divider" />

          <div className="row ending-page">
            <div className="col text-center align-self-center">
              <h2 className="ending-title mb-5">
                Find your favourite neighborhood
              </h2>
              <Link to={`/map`} target="_blank">
                <button
                  type="button"
                  className="btn btn-outline-dark get-started"
                >
                  Get started
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );}
};

export default Landing;
