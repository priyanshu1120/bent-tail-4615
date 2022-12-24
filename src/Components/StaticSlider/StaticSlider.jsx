import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../CustomComponents/CustomSlider.css';
import { slideSetting } from '../../Utils/CommonFunction';

function StaticSlider({data,slideshow, slidesToScroll}) {

  const settings =   slideSetting(slideshow,slidesToScroll)


  return (
    <div className="main-slider">
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