import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const styleMapOverlayContainer = {
  "position": "absolute",
  "width": "300px",
  "top": "0px",
  "left": "0px",
  "padding": "10px",
  "zIndex": "1"
}

const styleMapOverlay = {
  "font": "12px / 20px 'Helvetica Neue', Arial, Helvetica, sans - serif",
  "backgroundColor": "#fff",
  "borderRadius": "3px",
  "padding": "10px",
  "boxShadow": "0 1px 2px rgba(0, 0, 0, 0.20)"
}

const styleMapOverlayH2P = {
  "margin": "0 0 10px"
}

class MapOverlay extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="inline-block absolute left mt10 ml10 z1 py6 px12 txt-s txt-bold">
        <div className='map-overlay-container' style={styleMapOverlayContainer}>
          <div className='map-overlay' style={styleMapOverlay}>
            <h2 id='location-title' style={styleMapOverlayH2P}>{this.props.nbh}</h2>
            <p id='location-description' style={styleMapOverlayH2P}>{this.props.nbhGrp}</p>
          </div>
          <Link to={`/`}>
            <button type="button" className="btn btn-dark btn-block">Home</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default MapOverlay;