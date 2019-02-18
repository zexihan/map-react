import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';

import Header from './Header';
import MapOverlay from './MapOverlay';

import MapService from "../services/MapService";
let mapService = MapService.getInstance();

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseLng: -74,
      mouseLat: 40.7,
      lng: -74,
      lat: 40.7,
      zoom: 10.5,
      nbhPolygons: [],
      lastClickedNbh: "",
      lastHoveredNbh: "",
      lastHoveredNbhGrp: "",
      nbhList: []
    };

  }

  componentWillMount() {
    axios.get('/data/neighbourhoods.geojson') // JSON File Path
      .then(res => {
        this.setState({
          nbhPolygons: res.data.features
        });
        mapService.loadNeighbourhoods(res.data.features);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/basic-v8",
      center: [lng, lat],
      zoom,
      maxBounds: [[-74.27160450206186,40.489033265229864],[-73.69383878630428,40.919685407078134]]
    });

    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.FullscreenControl());

    map.on("move", () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });

    map.on('mousemove', "neighbourhood-fills", (e) => {
      this.setState({
        mouseLng: e.lngLat.lng,
        mouseLat: e.lngLat.lat
      });
      const coordinate = [this.state.mouseLng, this.state.mouseLat];

      var nbh = e.features[0].properties.neighbourhood;
      var nbhGrp = e.features[0].properties.neighbourhood_group;
      for (var i = 0; i < this.state.nbhList.length; i++) {
        if (this.state.nbhList[i].includes(nbh + "-")) {
          nbh = this.state.nbhList[i];
          break;
        }
      }

      if (nbh !== this.state.lastHoveredNbh) {
        if (this.state.lastHoveredNbh !== "") {
          map.setLayoutProperty(this.state.lastHoveredNbh, 'visibility', 'none');
        }
        
        map.setLayoutProperty(nbh, 'visibility', 'visible');
        this.setState({
          lastHoveredNbh: nbh,
          lastHoveredNbhGrp: nbhGrp
        })
      }
    });

    map.on('mouseleave', "neighbourhood-fills", (e) => {
      map.setLayoutProperty(this.state.lastHoveredNbh, 'visibility', 'none');
      this.setState({
        lastHoveredNbh: "",
        lastHoveredNbhGrp: ""
      });
    });

    map.on('click', "neighbourhood-fills", (e) => {
      console.log("clicked");
      const coordinate = [this.state.mouseLng, this.state.mouseLat];
      
      map.flyTo({
        center: coordinate,
        zoom: 12.5,
        bearing: 0,
        pitch: 0
      });

      var nbh = e.features[0].properties.neighbourhood;
      var nbhGrp = e.features[0].properties.neighbourhood_group;
      for (var i = 0; i < this.state.nbhList.length; i++) {
        if (this.state.nbhList[i].includes(nbh + "-")) {
          nbh = this.state.nbhList[i];
          break;
        }
      }
      
      
      console.log(nbh.split("-")[0] + ", " + nbh[1]);
      if (this.state.lastClickedNbh !== "") {
        map.setLayoutProperty(this.state.lastClickedNbh + "-click", 'visibility', 'none');
      } 
      if (nbh === this.state.lastClickedNbh) {
        this.setState({
          lastClickedNbh: ""
        });
        map.flyTo({
          center: [lng, lat],
          zoom: 10.5,
          bearing: 0,
          pitch: 0
        });
        return;
      }
      map.setLayoutProperty(nbh + "-click", 'visibility', 'visible');
      this.setState({
        lastClickedNbh: nbh
      })

    });

    map.on('load', () => {
      map.addSource("neighbourhoods", {
        "type": "geojson",
        "data": "/data/neighbourhoods.geojson"
      });

      map.addLayer({
        "id": "neighbourhood-fills",
        "type": "fill",
        "source": "neighbourhoods",
        "layout": {},
        "paint": {
          "fill-color": "#088",
          "fill-opacity": 0.15
        }
      });

      map.addLayer({
        "id": "neighbourhood-borders",
        "type": "line",
        "source": "neighbourhoods",
        "layout": {},
        "paint": {
          "line-color": "#088",
          "line-width": 2
        }
      });

      for (var i = 0; i < this.state.nbhPolygons.length; i++) {
        var nbhId = this.state.nbhPolygons[i].properties.neighbourhood + "-" + i.toString();
        this.state.nbhList.push(nbhId);
        map.addSource(nbhId, {
          type: "geojson",
          data: {
            "type": "FeatureCollection",
            "features": [this.state.nbhPolygons[i]]
          }
        });
        
        // for hover
        map.addLayer({
          id: nbhId,
          type: "fill",
          source: nbhId,
          paint: {
            "fill-color": "#088",
            "fill-opacity": 0.8
          }
        });
        
        // for click
        map.addLayer({
          id: nbhId + "-click",
          type: "fill",
          source: nbhId,
          paint: {
            "fill-color": "#D0104C",
            "fill-opacity": 0.8
          }
        });

        map.setLayoutProperty(nbhId, 'visibility', 'none');
        map.setLayoutProperty(nbhId + "-click", 'visibility', 'none');
      }

    });

  }


  render() {
    // const { mouseLng, mouseLat, lng, lat, zoom } = this.state;

    return (
      <div>
        <MapOverlay nbh={this.state.lastHoveredNbh.split("-")[0] } nbhGrp={this.state.lastHoveredNbhGrp} />
        <div
          ref={el => (this.mapContainer = el)}
          className="absolute top right left bottom"
        />
      </div>
    );
  }
};

export default Map;