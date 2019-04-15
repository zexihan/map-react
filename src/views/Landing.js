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
                <br />
                Inspired by{" "}
                <a
                  id="ia"
                  href="http://insideairbnb.com/about.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inside Airbnb
                </a>
                .
              </p>
              <Link to={`/map`}>
                <button
                  type="button"
                  className="btn btn-outline-dark get-started"
                >
                  Get started
                </button>
              </Link>
            </div>
            <div className="col align-self-center text-center m-3">
              <img
                className="img-fluid brand-img"
                src="/images/brand.jpg"
              />
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
                Neighborhood overview.{" "}
                <span className="text-muted">
                  Summarized from Airbnb reviews.
                </span>
              </h2>
              <p className="lead">
                Word-of-mouth-marketing has been one of the oldest and most
                reliable forms of marketing. It has been brought to the next
                level by the Internet along with a byproduct of information
                overload. trip<span style={{ color: "#cc0041" }}>elf</span>{" "}
                provides you a nuanced neighborhood overview summarized from
                the Airbnb reviews with the state-of-the-art deep learning
                techniques which yield the most insightful information.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="featurette-image img-fluid mx-auto"
                src="/images/feature-1.jpg"
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          <section id="feature-2" />
          <div className="row featurette">
            <div className="col-md-7 order-md-2 align-self-center">
              <h2 className="featurette-heading">
                Topic summary.{" "}
                <span className="text-muted">
                  Hot topics selected by us.
                </span>
              </h2>
              <p className="lead">
                Want to gain more detailed information about a neighborhood
                in NYC? trip<span style={{ color: "#cc0041" }}>elf</span>{" "}
                provides overviews from selected hot topics using advanced
                query-based summarization and presents you the specific
                information you want.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                className="featurette-image img-fluid mx-auto"
                src="/images/feature-2.jpg"
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          <section id="feature-3" />
          <div className="row featurette">
            <div className="col-md-7 align-self-center">
              <h2 className="featurette-heading">
                Choropleth map.{" "}
                <span className="text-muted">
                  Discover the best neighborhood from various aspects.
                </span>
              </h2>
              <p className="lead">
                Noise, Safety, Entertainment & Recreation (Shopping,
                Restaurant, Nightlife) and Transit are the six hottest
                topics about which travelers cared most. By browsing through
                the choropleth map of the fine-grained topics.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="featurette-image img-fluid mx-auto"
                src="/images/feature-3.jpg"
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
              <Link to={`/map`}>
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
