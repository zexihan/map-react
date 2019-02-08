import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from './Landing';
import Map from './Map';
import About from './About'

class App extends Component {
  render() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/map" component={Map} />
                    <Route exact path="/about" component={About} />
                </div>
            </BrowserRouter>
        </div>
        
    );
  }
}

export default App;