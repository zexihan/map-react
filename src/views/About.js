import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../static/About.css';

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row mt-5 align-self-center">
            <div className="col mt-5 text-center about-title">
              Nice to meet you
            </div>
          </div>
          <div className="row m-5 align-self-center">
            <div className="col-sm-6 col-md-3 mb-4">
              <div
                className="card border-0 shadow"
                style={{ maxWidth: 250 }}
              >
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
            <div className="col-sm-6 col-md-3 mb-4">
              <div
                className="card border-0 shadow"
                style={{ maxWidth: 250 }}
              >
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
            <div className="col-sm-6 col-md-3 mb-4">
              <div
                className="card border-0 shadow"
                style={{ maxWidth: 250 }}
              >
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
            <div className="col-sm-6 col-md-3 mb-4">
              <div
                className="card border-0 shadow"
                style={{ maxWidth: 250 }}
              >
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
          <div className="row mt-5 mb-3 justify-content-center align-self-center">
            <div className="col text-center about-title">
              Design process of trip
              <span style={{ color: "#cc0041" }}>elf</span>
            </div>
          </div>
          <div className="row mt-3 mb-5 justify-content-center align-self-center">
            <div className="col">
              <h3>Introduction</h3>
              <p>
                When planning a trip to an unfamiliar city, it is always
                difficult to pick a short-term rental neighborhood that
                could give us the best experience. We present an
                interactive-map web application named TripElf to help
                travelers make decisions on this with ease. Most travelers
                appreciate hearing or reading others’ opinions before making
                a decision. And it is time-consuming to gather information
                about these neighborhoods. TripElf can satisfy both of the
                needs for travelers. It provides users with intuitive
                knowledge about the neighborhoods by demonstrating the
                machine-generated overviews of the neighborhoods, based on
                Airbnb listing reviews written by guests who truly
                experienced living in certain neighborhoods.
              </p>
              <p>
                We summarize text overview of the neighborhoods with various
                unsupervised text modeling approaches, including KL-SUM,
                LDA-SUM, Summarization by Clustering Sentences Embedding,
                and Query-based Summarization with Word Embedding. We
                provide comprehensive empirical evidence showing that our
                machine-generated overviews are representative of the
                average living experience of the neighborhood. In addition,
                descriptive statistics of the neighborhoods from six aspects
                that the travelers may concern, including entertainment,
                transit, noise, expense, safety, and host, are also conveyed
                to the users. We build a React web app written with modern
                JavaScript for data visualization. Both high-level
                choropleth map and fine-grained details of the neighborhoods
                are demonstrated through our interactive-map web app.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default About;
