import React from 'react'
import Image from 'next/image'
function ExtraItemCard({name,url}) {
  return (
    <div className='extra-item-card'>
      <Image src={url} width={150} height={200} alt="image" className="extra-item-card-image"/>
      <div className='extra-item-text in-between'>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default ExtraItemCard