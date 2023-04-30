import React, { useState, useEffect } from 'react';
import ExploreList from './plants/ExploreList';
import { pebblesListImages } from '../data/images_links';
import CardList from './plants/CardList';
import ExtraItemList from './plants/ExtraItemList';

function Pebbles() {
  return (
    <div className="plants-conatiner">
      <div className="m-3 plants-info">
        <h3>Pebbles </h3>
        <p>
          Just like every beautiful house can do with a little extra help, so
          can your garden. Pebbles bring your garden to life and add to its
          beauty. Individual plants in pots can sometimes look empty. A
          wonderful way to make them look fuller and prettier is by simply
          adding some coloured pebbles. Varying the sizes and colours are
          perfect for creating a unique look.
        </p>
      </div>
      <div className="mb-4">
        <ExploreList list={pebblesListImages} page={'5'} />
      </div>
      <div className="mb-3">
        <h2>Buy Your Favourite Pebbles</h2>
      </div>
      <div className="mb-4">
        <CardList page={'pebbles'} />
      </div>

      <div className="btn">
        <button className="load-more-btn">Load More</button>
      </div>
      <div className="mt-4 mb-4 in-between">
        <h4>You may also need</h4>
      </div>
      <div className="mt-4 mb-4">
        <ExtraItemList page={'pebbles'} />
      </div>
    </div>
  );
}

export default Pebbles;
