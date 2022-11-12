import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CommonSlider.css';
import { useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


function CommonSlider({ url }) {
    const [data, setData] = useState([]);
    const [pathurl,setPathurl]=useState("");
    useEffect(() => {
        axios.get(url)
            .then((r) => {
                setData(r.data);
                if(url.includes("watchPremiers")){
                  setPathurl("watchPremiers");
                }
            });
    }, [])

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
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    prevArrow: <SampleNextArrow/> ,
    nextArrow: <SamplePrevArrow />,
   

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          prevArrow: <SampleNextArrow/> ,
          nextArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          prevArrow: <SampleNextArrow/> ,
          nextArrow: <SamplePrevArrow />,
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
    <div className="slider3">
      <Slider {...settings}>
        {data.map((item,i) => (
          <div className="common-slider-card" key={i}>
            <div className="common-slider-card-top">
            <Link to={`/${pathurl}/${item.id}`}> <img
                src={
                    item.image
                }
                alt={item.title}
              /></Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CommonSlider;