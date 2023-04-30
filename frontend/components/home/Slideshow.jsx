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
    <div>
      <Image
        src={images[currentImage]}
        alt="slideshow"
        width={1200}
        height={500}
        className="slider-images"
      />
    </div>
  );
};

export default Slideshow;
