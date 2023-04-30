import React from 'react'
import ExtraItemCard from './ExtraItemCard'

function ExtraItemList() {
  return (
    <div className='extra-item-list'>
      <div className="particular-extra-item">

      <ExtraItemCard name={"Soil and Fertilizers"} url={"/../public/images/soils-and-fertilizers.jpg"}/>
      </div>
      <div className="particular-extra-item">
      <ExtraItemCard name={"Planters"} url={"/../public/images/planters.jpg"}/>
      </div>
      <div className="particular-extra-item">
      <ExtraItemCard name={"Gardening Tools"} url={"/../public/images/gardening-tools.jpg"}/>
      </div>
      <div className="particular-extra-item">
      <ExtraItemCard name={"New"} url={`/../public/images/slider-img3.jpg`}/>
      </div>
    </div>
  )
}

export default ExtraItemList