import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './StaticSlider2.css';



function StaticSlider2({data}) {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className="slider2">
      <Slider {...settings}>
        {data.map((item,i) => (
          <div className="card" key={i}>
            <div className="card-top">
              <img
                src={
                    item.linkImg
                }
                alt={item.title}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default StaticSlider2;