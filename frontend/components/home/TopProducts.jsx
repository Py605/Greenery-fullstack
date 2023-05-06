import React from 'react';
import Image from 'next/image';
import HeadingText from './HeadingText';

function TopProducts() {
  return (
    <div>
      <HeadingText text="Our Top Products" />
      <div className="parent">
        <div className="first">
          <div className="first-image">
            <Image
              src="/../public/images/flowering-plants.jpg"
              width={800}
              height={350}
              className="top-products-image-div1 image"
              alt="Example Image"
            />
          </div>

          <div className="first-image">
            <Image
              src="/../public/images/indoor-plants.jpg"
              width={800}
              height={350}
              className="top-products-image-div1 image"
              alt="Example Image"
            />
          </div>
        </div>
        <div className="second">
          <Image
            src="/../public/images/low-maintanence-plants.jpg"
            width={350}
            height={250}
            className="top-products-image-div2"
            alt="Example Image"
          />
          <Image
            src="/../public/images/bonsai-plants.jpg"
            width={350}
            height={250}
            className="top-products-image-div2"
            alt="Example Image"
          />
          <Image
            src="/../public/images/herbs-plants.jpg"
            width={350}
            height={250}
            className="top-products-image-div2"
            alt="Example Image"
          />
        </div>
      </div>
    </div>
  );
}

export default TopProducts;