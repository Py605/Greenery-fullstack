import Image from 'next/image';
import React from 'react';

function Card({url,page}) {
  return (
    <div className="card">
      <div className='card-image'>
        <Image
          className="card-img-top"
          src={`${url}`}
          width={300}
          height={200}
          alt="Card image cap"
        />
      </div>
      <div className="card-body">
        <h5 className="card-name">New {page}</h5>
        <p className="card-rate">$100</p>
        <button href="#" className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;