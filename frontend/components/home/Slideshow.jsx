import React, { useState, useEffect } from 'react';
import Image from 'next/image';
const Slideshow = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 2000); // Change this value to adjust the interval time
    return () => clearInterval(intervalId);
  }, [currentImage, images.length]);

  return (
    <div className='home-container'>
      <Image
        src={images[currentImage]}
        alt="slideshow"
        width={1300}
        height={600}
        className="slider-images"
      />
    </div>
  );
};

export default Slideshow;