import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <Link to={`/`} className="navbar-brand" style={{fontSize: "24px"}}>
          trip<span style={{ color: "#cc0041" }}>elf</span>
        </Link>
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
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={`/map`} target="_blank" className="nav-link">
                Map
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/tutorial`} className="nav-link">
                Tutorial
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