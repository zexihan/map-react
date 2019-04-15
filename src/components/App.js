import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from '../views/Landing';
import Map from '../views/Map';
import Tutorial from "../views/Tutorial";
import About from '../views/About';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/map" component={Map} />
            <Route exact path="/tutorial" component={Tutorial} />
            <Route exact path="/about" component={About} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
