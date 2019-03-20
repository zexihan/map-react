import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";

import "../static/CardDeck.css";

const CardDeck = () => (
  <div className="card-deck">
    <div className="card">
      <img
        src="https://therealdeal.com/wp-content/uploads/2017/10/new-york-city-skyline-1024x768.jpg"
        className="card-img-top rounded"
        alt="..."
      />
      <div className="card-body">
        <h3 className="card-title marketing-heading text-center">Feature 1</h3>
        <p className="card-text text-center lead">
          Create a centralized hub for strategy and planning and ship more,
          faster.
        </p>
        <AnchorLink href="#feature-1">
          <div className="card-text text-center">Learn more</div>
        </AnchorLink>
      </div>
    </div>
    <div className="card">
      <img
        src="https://therealdeal.com/wp-content/uploads/2017/10/new-york-city-skyline-1024x768.jpg"
        className="card-img-top rounded"
        alt="..."
      />
      <div className="card-body">
        <h3 className="card-title marketing-heading text-center">Feature 2</h3>
        <p className="card-text text-center lead">
          Ideate, organize insights, design flows, and collect feedback in real
          time.
        </p>
        <AnchorLink href="#feature-2">
          <div className="card-text text-center">Learn more</div>
        </AnchorLink>
      </div>
    </div>
    <div className="card">
      <img
        src="https://therealdeal.com/wp-content/uploads/2017/10/new-york-city-skyline-1024x768.jpg"
        className="card-img-top rounded"
        alt="..."
      />
      <div className="card-body">
        <h3 className="card-title marketing-heading text-center">Feature 3</h3>
        <p className="card-text text-center lead">
          Keep everyone aligned, increase team throughput, and deliver better
          results.
        </p>
        <AnchorLink href="#feature-3">
          <div className="card-text text-center">Learn more</div>
        </AnchorLink>
      </div>
    </div>
  </div>
);

export default CardDeck;