import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './StaticSlider.css';



function StaticSlider({data,slideshow, slidesToScroll}) {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slideshow,
    slidesToScroll: slidesToScroll,
    initialSlide: 0,
    prevArrow: <SampleNextArrow/> ,
    nextArrow: <SamplePrevArrow />,
   

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slideshow,
          slidesToScroll:slidesToScroll,
          infinite: true,
          dots: false,
          prevArrow: <SampleNextArrow/> ,
          nextArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow:slideshow,
          slidesToScroll:slidesToScroll,
          initialSlide: 2,
          prevArrow: <SampleNextArrow/> ,
          nextArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow:slideshow,
          slidesToScroll:  slidesToScroll,
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

export default StaticSlider;