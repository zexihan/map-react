import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as d3 from 'd3';

import '../css/MapOverlay.css';

const styleMapOverlayContainer = {
  position: "absolute",
  width: "25vw",
  marginTop: "10px",
  marginLeft: "10px",
  marginBottom: "10px",
  zIndex: "1",
  overflowY: "auto",
  overflowX: "auto"
}

const styleMapOverlay = {
  font: "12px / 20px 'Helvetica Neue', Arial, Helvetica, sansSerif",
  backgroundColor: "#fff",
  borderRadius: "3px",
  padding: "10px",
  width: "25vw",
  height: "95vh",
  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.20)"
}

const styleLegend = {
  backgroundColor: "#fff",
  borderRadius: "3px",
  bottom: "30px",
  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.10)",
  font: "12px / 20px 'Helvetica Neue', Arial, Helvetica, sansSerif",
  padding: "10px",
  position: "absolute",
  right: "10px",
  zIndex: "1"
}

const styleLegendTitle = {
  margin: "0 0 10px"
}



class MapOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      isChoroplethMode: false,
      legendColorList: d3.schemeOrRd[9].reverse(),
      legendTextList: [1305,1144,979,816,653,489,326,163,0],
      legendTitle: "Restaurant\ncount"
    }
  }
  
  searchInputChanged = (e) => {
    console.log(e.target.value);
    this.setState({
      searchInput: e.target.value
    });
  }

  search = () => {
    this.props.search(this.state.searchInput);
  }

  selectPill = (e) => {
    this.props.selectPill(e.target.text);
    if (e.target.text !== "Home") {
      this.setState({
        isChoroplethMode: true
      })
    } else {
      this.setState({
        isChoroplethMode: false
      })
    }
  }

  selectTab = (e) => {
    this.props.selectTab(e.target.text);
  }
  
  assignLegendColor = (legendColor) => {
    
    var styleLegendDivSpan = {
      borderRadius: "50 %",
      display: "inline-block",
      height: "10px",
      marginRight: "5px",
      width: "10px",
      backgroundColor: legendColor
    };
    return styleLegendDivSpan;
  }

  render() {
    
    return (
      <div>
        <div className="inline-block absolute left z1 txt-s txt-bold">
          <div className='map-overlay-container' style={styleMapOverlayContainer}>
            <div className='map-overlay' style={styleMapOverlay}>
              <h2 className="text-center my-2">New York City</h2>
              <p className="text-center" style={{ "fontStyle": "italic" }}>Such a beautiful disease</p>
              <Link to={`/`}>
                <button type="button" className="btn btn-dark btn-block mb-2">Home</button>
              </Link>
              <div className="input-group my-2">
                <input type="text" id="search" className="form-control" placeholder="Search neighborhood..." onChange={this.searchInputChanged} />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button" onClick={this.search}><i className="fas fa-search"></i></button>
                </div>
              </div>
              <hr />
              <div>
                <h4>Choropleth overview</h4>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" onClick={this.selectPill} data-toggle="pill" href="#pills-home" role="tab" aria-selected="true">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={this.selectPill} data-toggle="pill" href="#pills-home" role="tab" aria-selected="false">Entertainment</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={this.selectPill} data-toggle="pill" href="#pills-profile" role="tab" aria-selected="false">Expense</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={this.selectPill} data-toggle="pill" href="#pills-contact" role="tab" aria-selected="false">Host</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={this.selectPill} data-toggle="pill" href="#pills-contact" role="tab" aria-selected="false">Noise</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={this.selectPill} data-toggle="pill" href="#pills-contact" role="tab" aria-selected="false">Safety</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={this.selectPill} data-toggle="pill" href="#pills-contact" role="tab" aria-selected="false">Transit</a>
                  </li>
                </ul>
              </div>
              <hr />
              <div>
                <h4>Neighborhood view</h4>
                <h4 id='location-title'>{this.props.clickedNbh}</h4>
                <p id='location-description'>{this.props.clickedNbhGrp}</p>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" onClick={this.selectTab} id="overview-tab" data-toggle="tab" href="#overview-panel" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={this.selectTab} id="entertainment-tab" data-toggle="tab" href="#entertainment-panel" role="tab" aria-controls="entertainment" aria-selected="false">Entertainment</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={this.selectTab} id="expense-tab" data-toggle="tab" href="#expense-panel" role="tab" aria-controls="expense" aria-selected="false">Expense</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={this.selectTab} id="host-tab" data-toggle="tab" href="#host-panel" role="tab" aria-controls="host" aria-selected="false">Host</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={this.selectTab} id="noise-tab" data-toggle="tab" href="#noise-panel" role="tab" aria-controls="noise" aria-selected="false">Noise</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={this.selectTab} id="safety-tab" data-toggle="tab" href="#safety-panel" role="tab" aria-controls="safety" aria-selected="false">Safety</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={this.selectTab} id="transit-tab" data-toggle="tab" href="#transit-panel" role="tab" aria-controls="transit" aria-selected="false">Transit</a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="home-panel" role="tabpanel" aria-labelledby="home-tab">Neighborhood overview.</div>
                  <div className="tab-pane fade" id="entertainment-panel" role="tabpanel" aria-labelledby="entertainment-tab">Entertainment details.</div>
                  <div className="tab-pane fade" id="expense-panel" role="tabpanel" aria-labelledby="expense-tab">Expense details.</div>
                  <div className="tab-pane fade" id="host-panel" role="tabpanel" aria-labelledby="host-tab">Host details.</div>
                  <div className="tab-pane fade" id="noise-panel" role="tabpanel" aria-labelledby="noise-tab">Noise details.</div>
                  <div className="tab-pane fade" id="safety-panel" role="tabpanel" aria-labelledby="safety-tab">Safety details.</div>
                  <div className="tab-pane fade" id="transit-panel" role="tabpanel" aria-labelledby="transit-tab">Transit details.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          this.state.isChoroplethMode ? (
            <div className='map-overlay' id='legend' style={styleLegend}>
              <h5 style={styleLegendTitle}>{this.state.legendTitle.split("\n").map((val, key) => { return <div key={key}>{val}</div> })}</h5>
              {this.state.legendColorList.map((legendColor, i) => {
                var legendStyle = this.assignLegendColor(legendColor);
                return (
                  <div key={i}><span style={legendStyle}></span>{this.state.legendTextList[i]}</div>
                );})}
            </div>
          ) : (
            null
          )
        }
      </div>
    )
  }
}

export default MapOverlay;