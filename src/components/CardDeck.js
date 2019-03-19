import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";

import "../static/CardDeck.css";

const CardDeck = () => (
  <div class="card-deck">
    <div class="card">
      <img
        src="https://therealdeal.com/wp-content/uploads/2017/10/new-york-city-skyline-1024x768.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <div class="card-title text-center">Feature 1</div>
        <p class="card-text text-center">
          Create a centralized hub for strategy and planning and ship more,
          faster.
        </p>
        <AnchorLink href="#feature-1">
          <div class="card-text text-center">Learn more</div>
        </AnchorLink>
      </div>
    </div>
    <div class="card">
      <img
        src="https://therealdeal.com/wp-content/uploads/2017/10/new-york-city-skyline-1024x768.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <div class="card-title text-center">Feature 2</div>
        <p class="card-text text-center">
          Ideate, organize insights, design flows, and collect feedback in real
          time.
        </p>
        <AnchorLink href="#feature-2">
          <div class="card-text text-center">Learn more</div>
        </AnchorLink>
      </div>
    </div>
    <div class="card">
      <img
        src="https://therealdeal.com/wp-content/uploads/2017/10/new-york-city-skyline-1024x768.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <div class="card-title text-center">Feature 3</div>
        <p class="card-text text-center">
          Keep everyone aligned, increase team throughput, and deliver better
          results.
        </p>
        <AnchorLink href="#feature-3">
          <div class="card-text text-center">Learn more</div>
        </AnchorLink>
      </div>
    </div>
  </div>
);

export default CardDeck;