import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";

import "../static/CardDeck.css";

const CardDeck = () => (
  <div className="card-deck">
    <div className="card">
      <img
        src="/images/feature-1.jpg"
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
        src="/images/feature-2.jpg"
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
        src="/images/feature-3.jpg"
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