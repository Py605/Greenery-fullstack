import React, { Component } from 'react';
import Slider from 'react-slick';
//import Card from './Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ background: '#fff' }} onClick={onClick}>
      <img
        style={{ width: '20px' }}
        src="https://www.pngfind.com/pngs/m/302-3023323_arrow-pointing-to-right-comments-right-arrow-png.png"
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ background: '#fff' }} onClick={onClick}>
      <img
        style={{ width: '20px' }}
        src="https://toppng.com/uploads/preview/arrow-pointing-to-the-left-115501167743epfu1fapc.png"
      />
    </div>
  );
}

function PlantsSlider() {
  var settings = {
    // centerPadding: '60px',
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="mb-4">
      <div className="App">
        <div>
          <h2> Explore Plants </h2>
          <Slider {...settings}>
          {/*  <div>
               <Card
              className="card"
                page={'Plant'}
                url={'/../public/images/slider-img1.jpg'}
              />
            </div>
            <div>
              <Card
                page={'Plant'}
                url={'/../public/images/slider-img1.jpg'}
              />
            </div>
            <div>
              <Card
                page={'Plant'}
                url={'/../public/images/slider-img1.jpg'}
              />
            </div>
            <div>
              <Card
                page={'Plant'}
                url={'/../public/images/slider-img1.jpg'}
              />
            </div> */}
            <div className="explore-plants-card-see-more-btn">
              <Link href="/Plants" legacyBehavior>
                <a src="" className="see-more-btn" >
                  See more
                </a>
              </Link>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default PlantsSlider;
