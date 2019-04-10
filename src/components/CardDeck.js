import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";

import "../static/CardDeck.css";

const CardDeck = () => (
  <div className="card-deck">
    <div className="card">
      <img
        src="http://s1.1zoom.me/b4851/935/USA_Evening_Houses_Skyscrapers_Manhattan_New_York_520779_1920x1080.jpg"
        className="card-img-top rounded"
        alt="..."
      />
      <div className="card-body">
        <h3 className="card-title marketing-heading text-center">
          Neighborhood overview
        </h3>
        <p className="card-text text-center lead">
          Summarized from Airbnb reviews.
        </p>
        <AnchorLink href="#feature-1">
          <div className="card-text text-center">Learn more</div>
        </AnchorLink>
      </div>
    </div>
    <div className="card">
      <img
        src="https://wallpapersmug.com/download/1600x900/86cfdb/new-york-city-night-buildigs.jpg"
        className="card-img-top rounded"
        alt="..."
      />
      <div className="card-body">
        <h3 className="card-title marketing-heading text-center">
          Topic summary
        </h3>
        <p className="card-text text-center lead">Hot topics selected by us.</p>
        <AnchorLink href="#feature-2">
          <div className="card-text text-center">Learn more</div>
        </AnchorLink>
      </div>
    </div>
    <div className="card">
      <img
        src="https://images.wallpaperscraft.com/image/new_york_times_square_night_city_metropolis_58676_1600x900.jpg"
        className="card-img-top rounded"
        alt="..."
      />
      <div className="card-body">
        <h3 className="card-title marketing-heading text-center">
          Choropleth map
        </h3>
        <p className="card-text text-center lead">
          Discover the best neighborhood from various aspects.
        </p>
        <AnchorLink href="#feature-3">
          <div className="card-text text-center">Learn more</div>
        </AnchorLink>
      </div>
    </div>
  </div>
);

export default CardDeck;