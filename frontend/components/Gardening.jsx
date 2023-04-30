import ExploreList from './plants/ExploreList';
import { gardeningListImages } from '../data/images_links';
import CardList from './plants/CardList';
import ExtraItemList from './plants/ExtraItemList';

function Gardening() {
  return (
    <div className="plants-conatiner">
      <div className="m-3 plants-info">
        <h3>Gardening </h3>
        <p>
          Gardening is not just an activity – for some, it is a stress release.
          For others, it is an escape into a world filled with hope and joy.
          While some people tend to their gardens just to prevent their plants
          from dying, others treat their gardens with care and love. Gardening
          helps improve physical fitness, builds mental resilience, and also
          helps unleash creativity. When there is so much that gardening can do
          for you, there must be something you can do to make your garden
          special!
        </p>
      </div>
      <div className="mb-4">
        <ExploreList list={gardeningListImages} page={'3'} />
      </div>
      <div className="mb-3">
        <h2>Buy Your Favourite Gardening</h2>
      </div>
      
      <div className="mb-4">
        <CardList page={'gardening'} />
      </div>
      <div className="btn">
        <button className="load-more-btn">Load More</button>
      </div>
      <div className="mt-4 mb-4 in-between">
        <h4>You may also need</h4>
      </div>
      <div className="mt-4 mb-4">
        <ExtraItemList page={'gardening'} />
      </div>
    </div>
  );
}

export default Gardening;
