import React from 'react';
import Image from 'next/image';

function ExploreListItem({ link,text }) {
  return (
    <div className='image-component in-between'>
      <div className="image">
        <Image
          src={link}
          alt="some picture"
          width={180}
          height={180}
          priority
          className='particluar-image'
        />
      </div>
      <h5>{text}</h5>
    </div>
  );
}

export default ExploreListItem;
