import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          TripElf
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={`/`} className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/map`} className="nav-link">
                Map
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/design`} className="nav-link">
                Design
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/video`} className="nav-link">
                Video
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/about`} className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;