// import inside from 'point-in-polygon';
import * as d3 from "d3";

class MapService {
  static myInstance = null;
  API_URL = "https://tripelf-server.herokuapp.com/api";
  // API_URL = "http://127.0.0.1:5000/api";
  neighbourhoods = [];
  legendColorList = [];
  entertainmentColorScheme = d3.schemeOrRd[9].reverse();
  expenseColorScheme = d3.schemePuRd[9].reverse();
  hostColorScheme = d3.schemeBuGn[9].reverse();
  noiseColorScheme = d3.schemeRdPu[9].reverse();
  safetyColorScheme = d3.schemeRdYlGn[9];
  transitColorScheme = d3.schemeGnBu[9].reverse();

  static getInstance() {
    if (MapService.myInstance == null) {
      MapService.myInstance = new MapService();
    }
    return this.myInstance;
  }

  async findScoreByNbh(nbh_idx) {
    const scoreRes = await fetch(
      "https://tripelf-server.herokuapp.com/api/scores/" + nbh_idx
    );
    const scoreData = await scoreRes.json();
    console.log(scoreData);
    const scoreList = [
      scoreData["noise"],
      scoreData["safety"],
      scoreData["shopping"],
      scoreData["restaurant"],
      scoreData["nightlife"],
      scoreData["expense"],
      scoreData["transit"]
    ];
    console.log(scoreList);
    return scoreList;
  }

  async findNlpByNbh(nbh_idx) {
    const nlpRes = await fetch(
      "https://tripelf-server.herokuapp.com/api/nlp/" + nbh_idx
    );
    const nlpData = await nlpRes.json();
    console.log(nlpData);
    return nlpData;
  }

  loadNeighbourhoods(neighbourhoods) {
    this.neighbourhoods = neighbourhoods;
  }

  rgb2hex(rgb) {
    rgb = rgb.match(
      /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
    );
    return rgb && rgb.length === 4
      ? "#" +
          ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
          ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
          ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2)
      : "";
  }

  async plotChoropleth(choroplethType, subType) {
    switch (true) {
      case choroplethType === "Entertainment": {
        var filename = "";
        var type = "";
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
          type = "restaurants";
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
          type = "shopping";
        } else {
          filename = "nightlife_top5_count.csv";
          type = "nightlife";
        }

        console.log(this.API_URL + "/" + type + "/" + subType);
        let listRes = await fetch(this.API_URL + "/" + type + "/" + subType);
        let list = await listRes.json();
        console.log(list);

        const min = d3.min(list, function(d) {
          return d[subType];
        });
        const max = d3.max(list, function(d) {
          return d[subType];
        });
        console.log("Min: " + min + " Max: " + max);

        for (var i = 0; i < list.length; i++) {
          var interpolateColor = await d3.interpolateOrRd(
            (list[i][subType] - min) / (max - min)
          );
          list[i].color = this.rgb2hex(interpolateColor);
        }
        return { list };
      }
      case choroplethType === "Expense": {
        console.log(
          this.API_URL + "/" + choroplethType.toLowerCase() + "/" + subType
        );

        let listRes = await fetch(this.API_URL + "/expense/" + subType);
        let list = await listRes.json();
        console.log(list);

        const min = d3.min(list, function(d) {
          return d[subType];
        });
        const max = d3.max(list, function(d) {
          return d[subType];
        });
        console.log("Min: " + min + " Max: " + max);

        for (var i = 0; i < list.length; i++) {
          var interpolateColor = await d3.interpolatePuRd(
            (Number(list[i][subType]) - min) / (max - min)
          );
          list[i].color = this.rgb2hex(interpolateColor);
        }
        return { list };
      }
      case choroplethType === "Host": {
        console.log(
          this.API_URL + "/" + choroplethType.toLowerCase() + "/" + subType
        );

        let listRes = await fetch(this.API_URL + "/host/" + subType);
        let list = await listRes.json();
        console.log(list);

        const min = d3.min(list, function(d) {
          return d[subType];
        });
        const max = d3.max(list, function(d) {
          return d[subType];
        });
        console.log("Min: " + min + " Max: " + max);

        for (var i = 0; i < list.length; i++) {
          var interpolateColor = await d3.interpolateBuGn(
            (Number(list[i][subType]) - min) / (max - min)
          );
          list[i].color = this.rgb2hex(interpolateColor);
        }
        console.log(list);
        return { list };
      }
      case choroplethType === "Noise": {
        console.log(
          this.API_URL + "/" + choroplethType.toLowerCase() + "/" + subType
        );

        let listRes = await fetch(this.API_URL + "/noise/" + subType);
        let list = await listRes.json();
        console.log(list);

        const min = d3.min(list, function(d) {
          return d[subType];
        });
        const max = d3.max(list, function(d) {
          return d[subType];
        });
        console.log("Min: " + min + " Max: " + max);

        for (var i = 0; i < list.length; i++) {
          var interpolateColor = await d3.interpolateRdPu(
            (Number(list[i][subType]) - min) / (max - min)
          );
          list[i].color = this.rgb2hex(interpolateColor);
        }
        return { list };
      }
      case choroplethType === "Safety": {
        console.log(
          this.API_URL + "/" + choroplethType.toLowerCase() + "/" + subType
        );

        let listRes = await fetch(this.API_URL + "/safety/" + subType);
        let list = await listRes.json();
        console.log(list);

        const min = d3.min(list, function(d) {
          return d[subType];
        });
        const max = d3.max(list, function(d) {
          return d[subType];
        });
        console.log("Min: " + min + " Max: " + max);

        for (var i = 0; i < list.length; i++) {
          var interpolateColor = await d3.interpolateRdYlGn(
            1 - (Number(list[i][subType]) - min) / (max - min)
          );
          list[i].color = this.rgb2hex(interpolateColor);
        }
        return { list };
      }
      case choroplethType === "Transit": {
        console.log(
          this.API_URL + "/" + choroplethType.toLowerCase() + "/" + subType
        );

        let listRes = await fetch(this.API_URL + "/transit/" + subType);
        let list = await listRes.json();
        console.log(list);

        const min = d3.min(list, function(d) {
          return d[subType];
        });
        const max = d3.max(list, function(d) {
          return d[subType];
        });
        console.log("Min: " + min + " Max: " + max);

        for (var i = 0; i < list.length; i++) {
          var interpolateColor = await d3.interpolateGnBu(
            (Number(list[i][subType]) - min) / (max - min)
          );
          list[i].color = this.rgb2hex(interpolateColor);
        }
        return { list };
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
      case choroplethType === "Entertainment" && subType === "Restaurant": {
        legendColorList = this.entertainmentColorScheme;
        legendTextList = [1300, 1150, 975, 825, 650, 500, 325, 175, 0];
        legendTitle = "Restaurant\ncount";
        break;
      }
      case choroplethType === "Entertainment" && subType === "Shopping": {
        legendColorList = this.entertainmentColorScheme;
        legendTextList = [1000, 875, 750, 625, 500, 375, 250, 125, 0];
        legendTitle = "Shopping\ncount";
        break;
      }
      case choroplethType === "Entertainment" && subType === "Nightlife": {
        legendColorList = this.entertainmentColorScheme;
        legendTextList = [435, 395, 340, 285, 230, 165, 110, 55, 0];
        legendTitle = "Nightlife\ncount";
        break;
      }
      case choroplethType === "Expense" && subType === "Price": {
        legendColorList = this.expenseColorScheme;
        legendTextList = [750, 470, 340, 375, 280, 165, 190, 95, 0];
        legendTitle = "Average\nprice";
        break;
      }
      case choroplethType === "Host" && subType === "Superhost": {
        legendColorList = this.hostColorScheme;
        legendTextList = [675, 595, 510, 425, 340, 255, 170, 85, 0];
        legendTitle = "Superhost\ncount";
        break;
      }
      case choroplethType === "Noise" && subType === "Noise Complaint": {
        legendColorList = this.noiseColorScheme;
        legendTextList = [
          20800,
          18200,
          15600,
          13000,
          10400,
          7800,
          5200,
          2600,
          0
        ];
        legendTitle = "Noise\ncomplaint\ncount";
        break;
      }
      case choroplethType === "Safety" && subType === "Offense Report": {
        legendColorList = this.safetyColorScheme;
        legendTextList = [
          35325,
          30900,
          26475,
          22075,
          17650,
          13250,
          8825,
          4425,
          0
        ];
        legendTitle = "Offense\nreport\ncount";
        break;
      }
      case choroplethType === "Transit" && subType === "Bus Stop": {
        legendColorList = this.transitColorScheme;
        legendTextList = [122, 105, 90, 75, 60, 45, 30, 15, 0];
        legendTitle = "Bus\nstop\ncount";
        break;
      }
      default: {
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
