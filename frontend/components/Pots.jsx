import ExploreList from './plants/ExploreList';
import { potsListImages } from '../data/images_links';
import CardList from './plants/CardList';
import ExtraItemList from './plants/ExtraItemList';

function Pots() {
  return (
    <div className="plants-conatiner">
      <div className="m-3 plants-info">
        <h3>Pots </h3>
        <p>
          Your home garden will look much better with various types of planters
          available. Whether you want to hang plants on the wall or have them
          placed in pots and boxes, you will find the perfect planter to suit
          your liking. From traditional planter styles to modern, contemporary
          designs, you are sure to find one that will complement your home's
          style perfectly.
        </p>
      </div>
      <div className="mb-4">
        <ExploreList list={potsListImages} page={'3'} />
      </div>
      <div className="mb-3">
        <h2>Buy Your Favourite Pots</h2>
      </div>
      <div className="mb-4">
        <CardList page={'pots'} />
      </div>

      <div className="btn">
        <button className="load-more-btn">Load More</button>
      </div>
      <div className="mt-4 mb-4 in-between">
        <h4>You may also need</h4>
      </div>
      <div className="mt-4 mb-4">
        <ExtraItemList page={'pots'} />
      </div>
    </div>
  );
}

export default Pots;
