import React from 'react';
import ExploreListItem from './ExploreListItem';
import { metaList } from '@/data/exploreList';

function ExploreList({ list,page,handledata }) {

  const nameList = metaList[page];

  //fiter the data 
  function filterdata(filtertext){
       const text = filtertext.toString().split(' ');
       console.log(text[0].toLowerCase());
       const text1 = text[0].toLowerCase();
       handledata(text1)
  }
  return (
    <div className="explore-container">
      <ul className="explore-list">
        {
        nameList.map((element,index)=>{
          return (
          <li id={index}>
            <button onClick={()=> filterdata(element)} style={{all:'unset'}}>
            <ExploreListItem key="{index}" link={list[index]} text={element } onClick={()=> datasend(element)}/>
            </button>
          </li>
          )})
        }
      </ul>
    </div>
  );
}

export default ExploreList;
