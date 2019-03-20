import React, { Component } from 'react';
import Select from "react-select";
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';

import '../static/MapOverlay.css';

import ChoroplethButton from '../components/ChoroplethButton';

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
          { value: "Restaurant", label: "Restaurant" },
          { value: "--Delis", label: "--Delis" },
          { value: "--Pizza", label: "--Pizza" },
          { value: "--Chinese", label: "--Chinese" },
          { value: "--Sandwiches", label: "--Sandwiches" },
          { value: "--Italian", label: "--Italian" },
          { value: "Shopping", label: "Shopping" },
          { value: "--Women's Clothing", label: "--Women's Clothing" },
          { value: "--Jewelry", label: "--Jewelry" },
          { value: "--Accessories", label: "--Accessories" },
          { value: "--Drugstores", label: "--Drugstores" },
          { value: "--Shoe Stores", label: "--Shoe Stores" },
          { value: "Nightlife", label: "Nightlife" },
          { value: "--Bars", label: "--Bars" },
          { value: "--Lounges", label: "--Lounges" },
          { value: "--American (New)", label: "--American (New)" },
          { value: "--American (Traditional)", label: "--American (Traditional)" },
          { value: "--Pubs", label: "--Pubs" }
        ],
        Noise: [
          { value: "Noise Complaint", label: "Noise Complaint" },
          { value: "--Collection Truck Noise", label: "--Collection Truck Noise" },
          { value: "--Noise", label: "--Noise" },
          { value: "--Noise - Commercial", label: "--Noise - Commercial" },
          { value: "--Noise - Helicopter", label: "--Noise - Helicopter" },
          { value: "--Noise - House of Worship", label: "--Noise - House of Worship" },
          { value: "--Noise - Park", label: "--Noise - Park" },
          { value: "--Noise - Residential", label: "--Noise - Residential" },
          { value: "--Noise - Street/Sidewalk", label: "--Noise - Street/Sidewalk" },
          { value: "--Noise - Vehicle", label: "--Noise - Vehicle" }
        ],
        Safety: [
          { value: "Offense Report", label: "Offense Report" },
          { value: "--FELONY", label: "--FELONY" },
          { value: "--MISDEMEANOR", label: "--MISDEMEANOR" },
          { value: "--VIOLATION", label: "--VIOLATION" }
        ],
        Expense: [
          { value: "Price", label: "Price" },
          { value: "Cleaning Fee", label: "Cleaning Fee" },
          { value: "Extra People Fee", label: "Extra People Fee" }
        ],
        Host: [
          { value: "Superhost", label: "Superhost" },
          { value: "Response Hour", label: "Response Hour" },
          { value: "Response Rate", label: "Response Rate" }
        ],
        Transit: [
          { value: "Bus Stop", label: "Bus Stop" },
          { value: "Subway Entrance", label: "Subway Entrance" }
        ]
      },
      legendColorList: [],
      legendTextList: [],
      legendTitle: ""
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
    if (e.keyCode === 13) {
      this.search();
    }
  };

  selectPill = e => {
    console.log(e.currentTarget.getAttribute("value"));
    let type = e.currentTarget.getAttribute("value");
    this.props.selectPill(
      type + "," + this.state.subTypeDefault[type]
    );
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
    var legend = mapService.pickLegend(
      type,
      this.state.subTypeDefault[type]
    );
    this.setState({
      legendColorList: legend[0],
      legendTextList: legend[1],
      legendTitle: legend[2]
    });
  };

  selectSubType = selectedOption => {
    var subType = selectedOption.value;
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
            
            {this.state.choroplethType === null ? 
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
             : null }

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
                    <div className="col">
                      Browse
                    </div>
                  </div>
                </a>
                <ul
                  className="nav nav-pills row"
                  id="pills-tab"
                  role="tablist"
                >
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
                    <Select
                      value={this.state.selectedOption}
                      onChange={this.selectSubType}
                      options={this.state.subTypeList["Entertainment"]}
                      isSearchable={false}
                      defaultValue={{value: "Restaurant", label: "Restaurant" }}
                    />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-expense"
                    role="tabpanel"
                    aria-labelledby="pills-expense-tab"
                  >
                    <Select
                      value={this.state.selectedOption}
                      onChange={this.selectSubType}
                      options={this.state.subTypeList["Expense"]}
                      isSearchable={false}
                      defaultValue={{ value: "Price", label: "Price" }}
                    />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-host"
                    role="tabpanel"
                    aria-labelledby="pills-host-tab"
                  >
                    <Select
                      value={this.state.selectedOption}
                      onChange={this.selectSubType}
                      options={this.state.subTypeList["Host"]}
                      isSearchable={false}
                      defaultValue={{ value: "Superhost", label: "Superhost" }}
                    />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-noise"
                    role="tabpanel"
                    aria-labelledby="pills-noise-tab"
                  >
                    <Select
                      value={this.state.selectedOption}
                      onChange={this.selectSubType}
                      options={this.state.subTypeList["Noise"]}
                      isSearchable={false}
                      defaultValue={{ value: "Noise Complaint", label: "Noise Complaint" }}
                    />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-safety"
                    role="tabpanel"
                    aria-labelledby="pills-safety-tab"
                  >
                    <Select
                      value={this.state.selectedOption}
                      onChange={this.selectSubType}
                      options={this.state.subTypeList["Safety"]}
                      isSearchable={false}
                      defaultValue={{ value: "Offense Report", label: "Offense Report" }}
                    />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-transit"
                    role="tabpanel"
                    aria-labelledby="pills-transit-tab"
                  >
                    <Select
                      value={this.state.selectedOption}
                      onChange={this.selectSubType}
                      options={this.state.subTypeList["Transit"]}
                      isSearchable={false}
                      defaultValue={{ value: "Bus Stop", label: "Bus Stop" }}
                    />
                  </div>
                </div>
              </div>
            )}
            {this.props.clickedNbh && (
              <div>
                <div className="section-title mb-3">
                  <span role="img">📍</span>
                  {this.props.clickedNbh}
                  {this.props.clickedNbh !== "" ? ", " : ""}
                  {this.props.clickedNbhGrp}
                </div>
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
