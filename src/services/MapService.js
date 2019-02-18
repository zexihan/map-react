// import inside from 'point-in-polygon';

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
    console.log(this.neighbourhoods[0].geometry.coordinates[0][0]);
    
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