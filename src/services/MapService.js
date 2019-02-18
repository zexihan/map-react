// import inside from 'point-in-polygon';
import * as d3 from "d3";

class MapService {
  static myInstance = null;
  neighbourhoods = [];


  static getInstance() {
    
    if (MapService.myInstance == null) {
        MapService.myInstance = new MapService();
    }
    return this.myInstance;
  }

  loadNeighbourhoods (neighbourhoods) {
    this.neighbourhoods = neighbourhoods;
    
  }

  rgb2hex (rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
      ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
}

  async plotChoropleth (pillName) {
    let list = await d3.csv("data/restaurant.csv");
    const min = d3.min(list, function(d) { return Number(d.restaurant_count)})
    const max = d3.max(list, function (d) { return Number(d.restaurant_count) })
    console.log(min, max);
    for (var i = 0; i < list.length; i++) {
      var interpolateColor = await d3.interpolateOrRd((Number(list[i].restaurant_count) - min) / (max - min));
      list[i].color = this.rgb2hex(interpolateColor);
    }
    return list;
  }

  // mapCoordinateNeighbourhood(coordinate) {
  //   var nbhId = ""
  //   var nbh_group = ""
  //   for (var i = 0; i < this.neighbourhoods.length; i++) {
  //     if (inside(coordinate, this.neighbourhoods[i].geometry.coordinates[0][0])) {
  //       nbhId = this.neighbourhoods[i].properties.neighbourhood + "-" + i.toString();
  //       nbh_group = this.neighbourhoods[i].properties.neighbourhood_group;
  //       break;
  //     }
  //   }
  //   return [nbhId, nbh_group]
  // }
}

export default MapService;