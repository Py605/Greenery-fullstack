import ExploreList from './plants/ExploreList';
import { seedsListImages } from '../data/images_links';
import CardList from './plants/CardList';
import ExtraItemList from './plants/ExtraItemList';

function Seeds() {
  return (
    <div className="plants-conatiner">
      <div className="m-3 plants-info">
        <h3>Seeds </h3>
        <p>
          Gardening has become an essential part of a healthy lifestyle and
          hence most modern families have adapted to the culture of home
          gardens. But to have a garden, one needs plants, and to grow healthy
          plants, one definitely needs healthy seeds. Seeds are an essential
          constituent in addition to soil and pots when we talk about gardening.
        </p>
      </div>
      <div className="mb-4">
        <ExploreList list={seedsListImages} page={'0'} />
      </div>
      <div className="mb-3">
        <h2>Buy Your Favourite Seeds</h2>
      </div>
      
      <div className="mb-4">
        <CardList page={'seeds'} />
      </div>
      <div className="btn">
        <button className="load-more-btn">Load More</button>
      </div>
      <div className="mt-4 mb-4 in-between">
        <h4>You may also need</h4>
      </div>
      <div className="mt-4 mb-4">
        <ExtraItemList />
      </div>
    </div>
  );
}

export default Seeds;
