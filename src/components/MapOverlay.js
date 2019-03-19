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
        Safety: "Offense Report",
        Expense: "Price",
        Host: "Superhost",
        Transit: "Bus Stop"
      },
      subTypeList: {
        Entertainment: [
          "Restaurant",
          "--Delis",
          "--Pizza",
          "--Chinese",
          "--Sandwiches",
          "--Italian",
          "Shopping",
          "--Women's Clothing",
          "--Jewelry",
          "--Accessories",
          "--Drugstores",
          "--Shoe Stores",
          "Nightlife",
          "--Bars",
          "--Lounges",
          "--American (New)",
          "--American (Traditional)",
          "--Pubs"
        ],
        Noise: [
          "Noise Complaint",
          "--Collection Truck Noise",
          "--Noise",
          "--Noise - Commercial",
          "--Noise - Helicopter",
          "--Noise - House of Worship",
          "--Noise - Park",
          "--Noise - Residential",
          "--Noise - Street/Sidewalk",
          "--Noise - Vehicle"
        ],
        Safety: [
          "Offense Report",
          "--FELONY",
          "--MISDEMEANOR",
          "--VIOLATION"
        ],
        Expense: ["Price", "Cleaning Fee", "Extra People Fee"],
        Host: ["Superhost", "Response Hour", "Response Rate"],
        Transit: ["Bus Stop", "Subway Entrance"]
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
      select: function (e, ui) {
        _.setState({
          searchInput: ui.item.value
        });
      }
    });
    $("#collapse").hide();
    $("#collapse").height($(window).height() * 0.95);
  }

  searchInputChanged = e => {
    console.log(e.target.value);
    this.setState({
      searchInput: e.target.value
    });
  };

  search = () => {
    this.props.search(this.state.searchInput);
  };

  keyPress = e => {
    if (e.keyCode == 13) {
      this.search();
    }
  };

  selectPill = e => {
    this.props.selectPill(
      e.target.text + "," + this.state.subTypeDefault[e.target.text]
    );
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
      });
    }
    var legend = mapService.pickLegend(
      e.target.text,
      this.state.subTypeDefault[e.target.text]
    );
    this.setState({
      legendColorList: legend[0],
      legendTextList: legend[1],
      legendTitle: legend[2]
    });
  };

  selectSubType = e => {
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
  };

  selectTab = e => {
    this.props.selectTab(e.target.text);
  };

  assignLegendColor = legendColor => {
    var styleLegendDivSpan = {
      borderRadius: "50 %",
      display: "inline-block",
      height: "10px",
      marginRight: "5px",
      width: "10px",
      backgroundColor: legendColor
    };
    return styleLegendDivSpan;
  };

  onCollapseShowClicked = e => {
    $("#collapse").show('slide', { direction: 'left' }, 100);
  };

  onCollapseHideClicked = e => {
    $("#collapse").hide("slide", { direction: "left" }, 100);
  };

  render() {
    return (
      <div>
        <div className="inline-block absolute left z1 txt-s txt-bold">
          <div className="control-btns">
            <button
              className="btn btn-light"
              id="collapse-btn"
              type="button"
              onClick={this.onCollapseShowClicked}
            >
              <i className="fas fa-bars" />
              {this.props.clickedNbh !== "" ? "\xa0\xa0" : ""}
              {this.props.clickedNbh}
              {this.props.clickedNbh !== "" ? ", " : ""}
              {this.props.clickedNbhGrp}
            </button>
          </div>
          <div className="map-overlay" id="collapse">
            <div className="row mt-2">
              <div className="col">
                <div className="tripelf-map-title">
                  trip<span style={{ color: "#cc0041" }}>elf</span>{" "}
                  <span style={{ color: "#767676" }}>Map</span>
                </div>
              </div>
              <div className="col-auto align-self-center mr-2">
                <button
                  onClick={this.onCollapseHideClicked}
                  style={{ fontSize: "24px", color: "#767676" }}
                >
                  <i className="fas fa-angle-left" />
                </button>
              </div>
            </div>
            <hr />
            <div className="new-york-title">New York City</div>
            <div className="input-group my-2">
              <input
                type="text"
                id="search"
                className="form-control"
                placeholder="Search neighborhood..."
                onChange={this.searchInputChanged}
                onKeyDown={this.keyPress}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={this.search}
                >
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
            <hr />
            {!this.props.clickedNbh && <div>
              <div className="section-title mb-3">🗺️Choropleth map</div>
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    onClick={this.selectPill}
                    id="pills-home-tab"
                    data-toggle="pill"
                    href="#pills-home"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={this.selectPill}
                    id="pills-entertainment-tab"
                    data-toggle="pill"
                    href="#pills-entertainment"
                    role="tab"
                    aria-controls="pills-entertainment"
                    aria-selected="false"
                  >
                    Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={this.selectPill}
                    id="pills-expense-tab"
                    data-toggle="pill"
                    href="#pills-expense"
                    role="tab"
                    aria-controls="pills-expense"
                    aria-selected="false"
                  >
                    Expense
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={this.selectPill}
                    id="pills-host-tab"
                    data-toggle="pill"
                    href="#pills-host"
                    role="tab"
                    aria-controls="pills-host"
                    aria-selected="false"
                  >
                    Host
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={this.selectPill}
                    id="pills-noise-tab"
                    data-toggle="pill"
                    href="#pills-noise"
                    role="tab"
                    aria-controls="pills-noise"
                    aria-selected="false"
                  >
                    Noise
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={this.selectPill}
                    id="pills-safety-tab"
                    data-toggle="pill"
                    href="#pills-safety"
                    role="tab"
                    aria-controls="pills-safety"
                    aria-selected="false"
                  >
                    Safety
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={this.selectPill}
                    id="pills-transit-tab"
                    data-toggle="pill"
                    href="#pills-transit"
                    role="tab"
                    aria-controls="pills-transit"
                    aria-selected="false"
                  >
                    Transit
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                />
                <div
                  className="tab-pane fade"
                  id="pills-entertainment"
                  role="tabpanel"
                  aria-labelledby="pills-entertainment-tab"
                >
                  <label
                    className="my-1 mr-2"
                    htmlFor="entertainment-select"
                  >
                    Type
                  </label>
                  <select
                    className="custom-select my-1 mr-sm-2"
                    onChange={this.selectSubType}
                    id="entertainment-select"
                  >
                    {this.state.subTypeList["Entertainment"].map(
                      subType => {
                        return (
                          <option value={subType} key={subType}>
                            {subType}
                          </option>
                        );
                      }
                    )}
                  </select>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-expense"
                  role="tabpanel"
                  aria-labelledby="pills-expense-tab"
                >
                  <label className="my-1 mr-2" htmlFor="expense-select">
                    Type
                  </label>
                  <select
                    className="custom-select my-1 mr-sm-2"
                    onChange={this.selectSubType}
                    id="expense-select"
                  >
                    {this.state.subTypeList["Expense"].map(subType => {
                      return (
                        <option value={subType} key={subType}>
                          {subType}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-host"
                  role="tabpanel"
                  aria-labelledby="pills-host-tab"
                >
                  <label className="my-1 mr-2" htmlFor="host-select">
                    Type
                  </label>
                  <select
                    className="custom-select my-1 mr-sm-2"
                    onChange={this.selectSubType}
                    id="host-select"
                  >
                    {this.state.subTypeList["Host"].map(subType => {
                      return (
                        <option value={subType} key={subType}>
                          {subType}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-noise"
                  role="tabpanel"
                  aria-labelledby="pills-noise-tab"
                >
                  <label className="my-1 mr-2" htmlFor="noise-select">
                    Type
                  </label>
                  <select
                    className="custom-select my-1 mr-sm-2"
                    onChange={this.selectSubType}
                    id="noise-select"
                  >
                    {this.state.subTypeList["Noise"].map(subType => {
                      return (
                        <option value={subType} key={subType}>
                          {subType}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-safety"
                  role="tabpanel"
                  aria-labelledby="pills-safety-tab"
                >
                  <label className="my-1 mr-2" htmlFor="safety-select">
                    Type
                  </label>
                  <select
                    className="custom-select my-1 mr-sm-2"
                    onChange={this.selectSubType}
                    id="safety-select"
                  >
                    {this.state.subTypeList["Safety"].map(subType => {
                      return (
                        <option value={subType} key={subType}>
                          {subType}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-transit"
                  role="tabpanel"
                  aria-labelledby="pills-transit-tab"
                >
                  <label className="my-1 mr-2" htmlFor="transit-select">
                    Type
                  </label>
                  <select
                    className="custom-select my-1 mr-sm-2"
                    onChange={this.selectSubType}
                    id="transit-select"
                  >
                    {this.state.subTypeList["Transit"].map(subType => {
                      return (
                        <option value={subType} key={subType}>
                          {subType}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>}
            {this.props.clickedNbh && <div>
              <div className="section-title mb-3">
                📍{this.props.clickedNbh}
                {this.props.clickedNbh !== "" ? ", " : ""}
                {this.props.clickedNbhGrp}
              </div>
              
            </div>}
          </div>
        </div>
        {this.state.isChoroplethMode ? (
          <div className="legend">
            <div className="legend-title">
              {this.state.legendTitle.split("\n").map((val, key) => {
                return <div key={key}>{val}</div>;
              })}
            </div>
            {this.state.legendColorList.map((legendColor, i) => {
              var legendStyle = this.assignLegendColor(legendColor);
              return (
                <div key={i}>
                  <span style={legendStyle} />
                  {this.state.legendTextList[i]}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

export default MapOverlay;
