import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';

import '../static/MapOverlay.css';

import MapService from "../services/MapService";
let mapService = MapService.getInstance();

class MapOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      isChoroplethMode: false,
      choroplethType: null,
      subType: null,
      subTypeDefault: {
        Entertainment: "Restaurant",
        Noise: "Noise Complaint",
        Safety: "Offense Report"
      },
      subTypeList: {
        Entertainment: ["Restaurant", "--Delis", "--Pizza", "--Chinese", "--Sandwiches", "--Italian",
                        "Shopping", "--Women's Clothing", "--Jewelry", "--Accessories", "--Drugstores", "--Shoe Stores",
                        "Nightlife", "--Bars", "--Lounges", "--American (New)", "--American (Traditional)", "--Pubs"],
        Noise: ["Noise Complaint", "--Collection Truck Noise", "--Noise", "--Noise - Commercial", "--Noise - Helicopter",
                "--Noise - House of Worship", "--Noise - Park", "--Noise - Residential", "--Noise - Street/Sidewalk", "--Noise - Vehicle"],
        Safety: ["Offense Report", "--FELONY", "--MISDEMEANOR", "--VIOLATION"]
      },
      legendColorList: [],
      legendTextList: [],
      legendTitle: ""
    };
  }

  componentDidMount() {
    let nbhNmList = this.props.nbhNmList;
    let _ = this;
    $("#search").autocomplete({
      source: nbhNmList,
      select: function(e, ui) {
        _.setState({
          searchInput: ui.item.value
        });
      }
    });
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
    this.props.selectPill(e.target.text + "," + this.state.subTypeDefault[e.target.text]);
    if (e.target.text !== "Home") {
      this.setState({
        isChoroplethMode: true,
        choroplethType: e.target.text
      });
      console.log(this.state.choroplethType);
    } else {
      this.setState({
        isChoroplethMode: false,
        choroplethType: null
      })
    }
    var legend = mapService.pickLegend(e.target.text, this.state.subTypeDefault[e.target.text]);
    this.setState({
      legendColorList: legend[0],
      legendTextList: legend[1],
      legendTitle: legend[2]
    });
  }

  selectSubType = (e) => {
    var subType = e.target.value;
    if (subType.startsWith("--")) {
      subType = subType.slice(2);
    }
    this.props.selectPill(this.state.choroplethType + "," + subType);
    this.setState({
      subType
    });
    let legend = mapService.pickLegend(this.state.choroplethType, subType);
    this.setState({
      legendColorList: legend[0],
      legendTextList: legend[1],
      legendTitle: legend[2]
    });
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
          <div className='map-overlay-container'>
            <div className='map-overlay'>
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
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" onClick={this.selectPill} id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={this.selectPill} id="pills-entertainment-tab" data-toggle="pill" href="#pills-entertainment" role="tab" aria-controls="pills-entertainment" aria-selected="false">Entertainment</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={this.selectPill} id="pills-expense-tab" data-toggle="pill" href="#pills-expense" role="tab" aria-controls="pills-expense" aria-selected="false">Expense</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={this.selectPill} id="pills-host-tab" data-toggle="pill" href="#pills-host" role="tab" aria-controls="pills-host" aria-selected="false">Host</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={this.selectPill} id="pills-noise-tab" data-toggle="pill" href="#pills-noise" role="tab" aria-controls="pills-noise" aria-selected="false">Noise</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={this.selectPill} id="pills-safety-tab" data-toggle="pill" href="#pills-safety" role="tab" aria-controls="pills-safety" aria-selected="false">Safety</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={this.selectPill} id="pills-transit-tab" data-toggle="pill" href="#pills-transit" role="tab" aria-controls="pills-transit" aria-selected="false">Transit</a>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                       aria-labelledby="pills-home-tab">
                  </div>
                  <div className="tab-pane fade" id="pills-entertainment" role="tabpanel"
                       aria-labelledby="pills-entertainment-tab">
                    <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Type</label>
                    <select className="custom-select my-1 mr-sm-2" onChange={this.selectSubType} id="inlineFormCustomSelectPref">
                      {this.state.subTypeList["Entertainment"].map(subType => {
                        return (<option value={subType} key={subType}>{subType}</option>);
                      })}
                    </select>
                  </div>
                  <div className="tab-pane fade" id="pills-expense" role="tabpanel"
                       aria-labelledby="pills-expense-tab">Expense
                  </div>
                  <div className="tab-pane fade" id="pills-host" role="tabpanel"
                       aria-labelledby="pills-host-tab">Host
                  </div>
                  <div className="tab-pane fade" id="pills-noise" role="tabpanel"
                       aria-labelledby="pills-noise-tab">
                    <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Type</label>
                    <select className="custom-select my-1 mr-sm-2" onChange={this.selectSubType} id="inlineFormCustomSelectPref">
                      {this.state.subTypeList["Noise"].map(subType => {
                        return (<option value={subType} key={subType}>{subType}</option>);
                      })}
                    </select>
                  </div>
                  <div className="tab-pane fade" id="pills-safety" role="tabpanel"
                       aria-labelledby="pills-safety-tab">
                    <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Type</label>
                    <select className="custom-select my-1 mr-sm-2" onChange={this.selectSubType} id="inlineFormCustomSelectPref">
                      {this.state.subTypeList["Safety"].map(subType => {
                        return (<option value={subType} key={subType}>{subType}</option>);
                      })}
                    </select>
                  </div>
                  <div className="tab-pane fade" id="pills-transit" role="tabpanel"
                       aria-labelledby="pills-transit-tab">Transit
                  </div>
                </div>
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
                <div className="tab-content" id="tabs-tabContent">
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
            <div className='legend'>
              <h5 className="legend-title">{this.state.legendTitle.split("\n").map((val, key) => { return <div key={key}>{val}</div> })}</h5>
              {this.state.legendColorList.map((legendColor, i) => {
                var legendStyle = this.assignLegendColor(legendColor);
                return (
                  <div key={i}><span style={legendStyle} />{this.state.legendTextList[i]}</div>
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
