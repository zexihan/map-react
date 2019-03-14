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
        <div class="container-fluid d-flex h-100">
          <div class="row m-5 justify-content-center align-self-center">
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-0 shadow">
                <img
                  src={`/images/man.png`}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body text-center">
                  <h5 class="card-title mb-0">Zexi Han</h5>
                  <div class="card-text text-black-50">Web Developer</div>
                  <div class="card-text text-black-50">Data Scientist</div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-0 shadow">
                <img
                  src={`/images/boy.png`}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body text-center">
                  <h5 class="card-title mb-0">Rui Wang</h5>
                  <div class="card-text text-black-50">Data Scientist</div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-0 shadow">
                <img
                  src={`/images/woman.png`}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body text-center">
                  <h5 class="card-title mb-0">Wenyi Jin</h5>
                  <div class="card-text text-black-50">Data Scientist</div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-0 shadow">
                <img
                  src={`/images/girl.png`}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body text-center">
                  <h5 class="card-title mb-0">Qinyu Chen</h5>
                  <div class="card-text text-black-50">UX/UI Designer</div>
                  <div class="card-text text-black-50">Data Scientist</div>
                </div>
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
