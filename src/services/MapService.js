// import inside from 'point-in-polygon';
import * as d3 from "d3";

class MapService {
  static myInstance = null;
  neighbourhoods = [];
  legendColorList = [];
  entertainmentColorScheme = d3.schemeOrRd[9].reverse();
  noiseColorScheme = d3.schemeRdPu[9].reverse();
  safetyColorScheme = d3.schemeRdYlGn[9];

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

  async plotChoropleth (choroplethType, subType) {
    switch (true) {
      case choroplethType === "Entertainment": {
        var filename = "";
        if (
          [
            "Restaurant",
            "Delis",
            "Pizza",
            "Chinese",
            "Sandwiches",
            "Italian"
          ].includes(subType)
        ) {
          filename = "restaurant_top5_count.csv";
        } else if (
          [
            "Shopping",
            "Women's Clothing",
            "Jewelry",
            "Accessories",
            "Drugstores",
            "Shoe Stores"
          ].includes(subType)
        ) {
          filename = "shopping_top5_count.csv";
        } else {
          filename = "nightlife_top5_count.csv";
        }
        let list = await d3.csv("data/" + filename);
        const min = d3.min(list, function(d) {
          return Number(d[subType]);
        });
        const max = d3.max(list, function(d) {
          return Number(d[subType]);
        });
        console.log(min, max);
        for (var i = 0; i < list.length; i++) {
          var interpolateColor = await d3.interpolateOrRd(
            (Number(list[i][subType]) - min) / (max - min)
          );
          list[i].color = this.rgb2hex(interpolateColor);
        }
        return { list };
      }
      case choroplethType === "Noise": {
        let list = await d3.csv("data/noise_complaint_type_count.csv");
        const min = d3.min(list, function(d) {
          return Number(d[subType]);
        });
        const max = d3.max(list, function(d) {
          return Number(d[subType]);
        });
        console.log(min, max);
        for (var i = 0; i < list.length; i++) {
          var interpolateColor = await d3.interpolateRdPu(
            (Number(list[i][subType]) - min) / (max - min)
          );
          list[i].color = this.rgb2hex(interpolateColor);
        }
        return { list };
      }
      case choroplethType === "Safety": {
        let list = await d3.csv("data/safety_level_of_offense_count.csv");
        const min = d3.min(list, function(d) {
          return Number(d[subType]);
        });
        const max = d3.max(list, function(d) {
          return Number(d[subType]);
        });
        console.log(min, max);
        for (var i = 0; i < list.length; i++) {
          var interpolateColor = await d3.interpolateRdYlGn(
            1 - (Number(list[i][subType]) - min) / (max - min)
          );
          list[i].color = this.rgb2hex(interpolateColor);
        }
        return { list };
      }
      case choroplethType === "Expense": {
        let list = await d3.csv("data/expense.csv");
        const min = d3.min(list, function (d) {
          return Number(d[subType]);
        });
        const max = d3.max(list, function (d) {
          return Number(d[subType]);
        });
        console.log(min, max);
      }
      case choroplethType === "Host": {
        let list = await d3.csv("data/host.csv");
        const min = d3.min(list, function(d) {
          return Number(d[subType]);
        });
        const max = d3.max(list, function(d) {
          return Number(d[subType]);
        });
        console.log(min, max);
      }
      case choroplethType === "Transit": {
        let list = await d3.csv("data/transit_count.csv");
        const min = d3.min(list, function(d) {
          return Number(d[subType]);
        });
        const max = d3.max(list, function(d) {
          return Number(d[subType]);
        });
        console.log(min, max);
      }
      default:
        return;
    }


  }

  pickLegend(choroplethType, subType) {
    console.log(choroplethType, subType);
    var legendColorList = [];
    var legendTextList = [];
    var legendTitle = "";
    switch (true) {
      case ((choroplethType === "Entertainment") && (subType === "Restaurant")) : {
        legendColorList = this.entertainmentColorScheme;
        legendTextList = [1300,1150,975,825,650,500,325,175,0];
        legendTitle = "Restaurant\ncount";
        break;
      }
      case ((choroplethType === "Entertainment") && (subType === "Shopping")) : {
        legendColorList = this.entertainmentColorScheme;
        legendTextList = [1000,875,750,625,500,375,250,125,0];
        legendTitle = "Shopping\ncount";
        break;
      }
      case ((choroplethType === "Entertainment") && (subType === "Nightlife")) : {
        legendColorList = this.entertainmentColorScheme;
        legendTextList = [435,395,340,285,230,165,110,55,0];
        legendTitle = "Nightlife\ncount";
        break;
      }
      case((choroplethType === "Noise") && (subType === "Noise Complaint")) : {
        legendColorList = this.noiseColorScheme;
        legendTextList = [20800,18200,15600,13000,10400,7800,5200,2600,0];
        legendTitle = "Noise\ncomplaint\ncount";
        break;
      }
      case((choroplethType === "Safety") && (subType === "Offense Report")) : {
        legendColorList = this.safetyColorScheme;
        legendTextList = [35325,30900,26475,22075,17650,13250,8825,4425,0];
        legendTitle = "Offense\nreport\ncount";
        break;
      }
      default : {
        legendTitle = subType;
      }
    }
    return [legendColorList, legendTextList, legendTitle];
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
