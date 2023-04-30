import React, { useState, useEffect } from 'react';
import ExploreList from './plants/ExploreList';
import { fertilizersListImages } from '../data/images_links';
import CardList from './plants/CardList';
import ExtraItemList from './plants/ExtraItemList';

function Ferilizers() {
  return (
    <div className="plants-conatiner">
      <div className="m-3 plants-info">
        <h3>Ferilizers </h3>
        <p>
          Just like humans need food for sustainability, plants need soil and
          fertilizers that provide all the essential nutrients for them to grow.
          Whatever your gardening project, choosing the correct soil and
          fertilizers is crucial for your plants and garden’s health. At
          Nurserylive, we provide just that. If you are a gardening novice or an
          enthusiast looking to grow your own flower or vegetable garden, then
          these are the most convenient and cost-effective methods to ensure
          your plants are growing well.
        </p>
      </div>
      <div className="mb-4">
        <ExploreList list={fertilizersListImages} page={'4'} />
      </div>
      <div className="mb-3">
        <h2>Buy Your Favourite Ferilizers</h2>
      </div>
      
      <div className="mb-4">
        <CardList page={'ferilizers'} />
      </div>
      <div className="btn">
        <button className="load-more-btn">Load More</button>
      </div>
      <div className="mt-4 mb-4 in-between">
        <h4>You may also need</h4>
      </div>
      <div className="mt-4 mb-4">
        <ExtraItemList page={'ferilizers'} />
      </div>
    </div>
  );
}

export default Ferilizers;
