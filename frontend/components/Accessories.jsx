import React, { useState, useEffect } from 'react';
import ExploreList from './plants/ExploreList';
import { accessoriesListImages } from '../data/images_links';
import CardList from './plants/CardList';
import ExtraItemList from './plants/ExtraItemList';

function Accessories() {
  return (
    <div className="plants-conatiner">
      <div className="m-3 plants-info">
        <h3>Accessories </h3>
        <p>
          The word 'garden' comes from the Latin word meaning 'back garden',
          while 'back' refers to the root of a plant as in the case of a vine.
          And the gardening accessories or tools are amongst several instruments
          explicitly made for horticulture and agriculture, well-classified into
          'power tools' and 'hand tools'.
        </p>
      </div>
      <div className="mb-4">
        <ExploreList list={accessoriesListImages} page={'6'} />
      </div>
      <div className="mb-3">
        <h2>Buy Your Favourite Accessories</h2>
      </div>
     
      <div className="mb-4">
        <CardList page={'accessories'} />
      </div>
      <div className="btn">
        <button className="load-more-btn">Load More</button>
      </div>
      <div className="mt-4 mb-4 in-between">
        <h4>You may also need</h4>
      </div>
      <div className="mt-4 mb-4">
        <ExtraItemList page={'accessories'} />
      </div>
    </div>
  );
}

export default Accessories;
