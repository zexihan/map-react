import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import $ from "jquery";

import Landing from '../views/Landing';
import Map from '../views/Map';
import Design from "../views/Design";
import Video from "../views/Video";
import About from '../views/About';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/map" component={Map} />
            <Route exact path="/design" component={Design} />
            <Route exact path="/video" component={Video} />
            <Route exact path="/about" component={About} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
