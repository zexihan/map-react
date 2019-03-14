import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";

const CardDeck = () => (
  <div class="card-deck">
    <div class="card">
      <img
        src="https://therealdeal.com/wp-content/uploads/2017/10/new-york-city-skyline-1024x768.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <AnchorLink href="#feature-1">
          <h5 class="card-title">Feature 1</h5>
        </AnchorLink>
        <p class="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
    <div class="card">
      <img
        src="https://therealdeal.com/wp-content/uploads/2017/10/new-york-city-skyline-1024x768.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <AnchorLink href="#feature-2">
          <h5 class="card-title">Feature 2</h5>
        </AnchorLink>
        <p class="card-text">
          This card has supporting text below as a natural lead-in to additional
          content.
        </p>
      </div>
    </div>
    <div class="card">
      <img
        src="https://therealdeal.com/wp-content/uploads/2017/10/new-york-city-skyline-1024x768.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <AnchorLink href="#feature-3">
          <h5 class="card-title">Feature 3</h5>
        </AnchorLink>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
        </p>
      </div>
    </div>
  </div>
);

export default CardDeck;