import React, { Component } from 'react';
import Select from "react-select";
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';

import '../static/MapOverlay.css';

import ChoroplethButton from './ChoroplethButton';
import RadialChart from './RadialChart';
import NavCircles from "./NavCircles";
import Topic from "./Topic";

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
        Safety: ["Offense Report", "--FELONY", "--MISDEMEANOR", "--VIOLATION"],
        Expense: ["Price", "Cleaning Fee", "Extra People Fee"],
        Host: ["Superhost", "Response Hour", "Response Rate"],
        Transit: ["Bus Stop", "Subway Entrance"]
      },
      legendColorList: [],
      legendTextList: [],
      legendTitle: "",
      nlpData: null,
      scoreData: null,
      wfData: null,
      selectedTopic: "Restaurants"
    };
  }

  componentDidMount() {
    let nbhNmList = this.props.nbhNmList;
    console.log(nbhNmList);
    let _ = this;
    $("#search").autocomplete({
      source: nbhNmList,
      select: function(e, ui) {
        _.setState({
          searchInput: ui.item.value
        });
      }
    });
    $("#collapse").show();
    $("#collapse").height($(window).height() * 0.95);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.nlpData !== this.props.nlpData) {
      this.setState({
        nlpData: nextProps.nlpData
      });
    }
    if (nextProps.scoreData !== this.props.scoreData) {
      this.setState({
        scoreData: nextProps.scoreData
      });
    }
    if (nextProps.wfData !== this.props.wfData) {
      this.setState({
        wfData: nextProps.wfData
      });
      console.log(nextProps.wfData);
    }
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
    if (e.keyCode === 13) {
      this.search();
    }
  };

  selectPill = e => {
    console.log(e.currentTarget.getAttribute("value"));
    let type = e.currentTarget.getAttribute("value");
    this.props.selectPill(type + "," + this.state.subTypeDefault[type]);
    if (type !== "Home") {
      this.setState({
        isChoroplethMode: true,
        choroplethType: type
      });
      console.log(this.state.choroplethType);
    } else {
      this.setState({
        isChoroplethMode: false,
        choroplethType: null
      });
    }
    var legend = mapService.pickLegend(type, this.state.subTypeDefault[type]);
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

  toggleTopic = topic => {
    console.log(topic);
    this.setState({
      selectedTopic: topic
    });
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
    $("#collapse").show("slide", { direction: "left" }, 100);
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

            {this.state.choroplethType === null ? (
              <div className="row my-2">
                <div className="col-12">
                  <input
                    type="text"
                    id="search"
                    className="form-control"
                    placeholder="Search neighborhood..."
                    onChange={this.searchInputChanged}
                    onKeyDown={this.keyPress}
                  />
                </div>
              </div>
            ) : null}

            <hr />
            {!this.props.clickedNbh && (
              <div>
                <div className="section-title mb-3">
                  <span role="img">🗺️</span>Choropleth map
                </div>
                <a
                  className="nav-link active browse-button"
                  onClick={this.selectPill}
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-home"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                  value="Home"
                >
                  <div className="row text-center">
                    <div className="col">
                      <span style={{ fontSize: "36px" }}>
                        <i class="fas fa-map-marked-alt" />
                      </span>
                    </div>
                  </div>
                  <div className="row text-center">
                    <div className="col" style={{ fontSize: "14px" }}>
                      Browse
                    </div>
                  </div>
                  <div className="row text-center">
                    <div className="col">
                      Click a neighborhood on the map to see details
                    </div>
                  </div>
                </a>
                <ul className="nav nav-pills row" id="pills-tab" role="tablist">
                  <ChoroplethButton
                    selectPill={this.selectPill}
                    type="Entertainment"
                    icon="fas fa-utensils"
                  />
                  <ChoroplethButton
                    selectPill={this.selectPill}
                    type="Noise"
                    icon="fas fa-volume-up"
                  />
                  <ChoroplethButton
                    selectPill={this.selectPill}
                    type="Safety"
                    icon="fas fa-grimace"
                  />
                  <ChoroplethButton
                    selectPill={this.selectPill}
                    type="Transit"
                    icon="fas fa-subway"
                  />
                  <ChoroplethButton
                    selectPill={this.selectPill}
                    type="Expense"
                    icon="fas fa-dollar-sign"
                  />
                  <ChoroplethButton
                    selectPill={this.selectPill}
                    type="Host"
                    icon="fas fa-user"
                  />
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
                    <label className="my-1 mr-2 type" htmlFor="entertainment-select">
                      Type
                    </label>
                    <select
                      className="custom-select my-1 mr-sm-2"
                      onChange={this.selectSubType}
                      id="entertainment-select"
                    >
                      {this.state.subTypeList["Entertainment"].map(subType => {
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
                    id="pills-expense"
                    role="tabpanel"
                    aria-labelledby="pills-expense-tab"
                  >
                    <label className="my-1 mr-2 type" htmlFor="expense-select">
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
                    <label className="my-1 mr-2 type" htmlFor="host-select">
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
                    <label className="my-1 mr-2 type" htmlFor="noise-select">
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
                    <label className="my-1 mr-2 type" htmlFor="safety-select">
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
                    <label className="my-1 mr-2 type" htmlFor="transit-select">
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
              </div>
            )}
            {this.props.clickedNbh &&
              this.state.nlpData &&
              this.state.scoreData &&
              this.state.wfData && (
                <div>
                  <div className="row section-title mb-2">
                    <div className="col">
                      <span role="img">📍</span>
                      {this.props.clickedNbh}
                      {this.props.clickedNbh !== "" ? ", " : ""}
                      {this.props.clickedNbhGrp}
                    </div>
                  </div>
                  <div className="row instruction my-2">
                    <div className="col">
                      Click the neighborhood on the map again to go back
                    </div>
                  </div>
                  <div className="row section-title-2 my-2">
                    <div className="col">Overview</div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <RadialChart scoreData={this.state.scoreData} />
                    </div>
                  </div>

                  {this.state.nlpData.reviews !== null ? (
                    <div>
                      <div className="row section-title-3 mt-2 mb-1">
                        <div className="col">What Airbnb hosts say:</div>
                      </div>
                      <div className="row">
                        <div className="col">
                          {this.state.nlpData.overviews}
                        </div>
                      </div>

                      <div className="row section-title-3 mt-2 mb-1">
                        <div className="col">What Airbnb guests say:</div>
                      </div>
                      <div className="row">
                        <div className="col">{this.state.nlpData.reviews}</div>
                      </div>

                      <hr />

                      <div className="row section-title-2 my-2">
                        <div className="col">Hot Topics</div>
                      </div>

                      <div className="row mb-3">
                        <div className="col">
                          <NavCircles
                            wfData={this.state.wfData}
                            toggleTopic={this.toggleTopic}
                            selectedTopic={this.state.selectedTopic}
                          />
                        </div>
                      </div>

                      {(() => {
                        switch (this.state.selectedTopic) {
                          case "Restaurants":
                            return (
                              <Topic
                                topic={"Restaurants"}
                                sentences={this.state.nlpData.restaurant}
                              />
                            );
                          case "Shopping":
                            return (
                              <Topic
                                topic={"Shopping"}
                                sentences={this.state.nlpData.shopping}
                              />
                            );
                          case "Nightlife":
                            return (
                              <Topic
                                topic={"Nightlife"}
                                sentences={this.state.nlpData.nightlife}
                              />
                            );
                          case "Noise":
                            return (
                              <Topic
                                topic={"Noise"}
                                sentences={this.state.nlpData.noise}
                              />
                            );
                          case "Safety":
                            return (
                              <Topic
                                topic={"Safety"}
                                sentences={this.state.nlpData.safety}
                              />
                            );
                          case "Transit":
                            return (
                              <Topic
                                topic={"Transit"}
                                sentences={this.state.nlpData.transit}
                              />
                            );
                          case "Expense":
                            return (
                              <Topic
                                topic={"Expense"}
                                sentences={this.state.nlpData.expense}
                              />
                            );
                          case "Host":
                            return (
                              <Topic
                                topic={"Host"}
                                sentences={this.state.nlpData.host}
                              />
                            );
                          default:
                            return null;
                        }
                      })()}
                    </div>
                  ) : (
                    <p>lack of data</p>
                  )}
                </div>
              )}
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
