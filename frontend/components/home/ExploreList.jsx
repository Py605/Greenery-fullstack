import React from 'react';
import ExploreListItem from './ExploreListItem';
function ExploreList({ list }) {
  return (
    <div className="explore-container">
      <ul className="explore-list">
        <li>
          <ExploreListItem link={list[0]} page={"plants"} />
        </li>
        <li>
          <ExploreListItem link={list[1]}  page={"seeds"}/>
        </li>
        <li>
          <ExploreListItem link={list[2]} page={"pots"}/>
        </li>
        <li>
          <ExploreListItem link={list[3]} page={"gardening"}/>
        </li>
        <li>
          <ExploreListItem link={list[4]} page={"fertilizers"}/>
        </li>
        <li>
          <ExploreListItem link={list[5]} page={"pebbles"}/>
        </li>
        <li>
          <ExploreListItem link={list[6]} page={"accessories"}/>
        </li>

      </ul>
    </div>
  );
}

export default ExploreList;
