import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CommonSlider.css';
import { useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


function CommonSlider({ url }) {
  const [defaultImage, setDefaultImage] = useState({});
    const [data, setData] = useState([]);
    const [pathurl,setPathurl]=useState("");

    const handleErrorImage = (data) => {
      setDefaultImage((prev) => ({
        ...prev,
        [data.target.alt]: data.target.alt,
        linkDefault: "https://is1-ssl.mzstatic.com/image/thumb/kjrFHClZ3Bt-pT0MJnwdFw/738x416.webp",
      }));
    };

    useEffect(() => {
        axios.get(url)
            .then((r) => {
                setData(r.data);
                if(url.includes("watchPremiers")){
                  setPathurl("watchPremiers");
                }
                else if (url.includes("latestOriginals")) {
                  setPathurl("latestOriginals");
                }
                else if (url.includes("mostPopular")) {
                  setPathurl("mostPopular");
                }
                else if (url.includes("futureRelease")) {
                  setPathurl("futureRelease");
                }
                else if (url.includes("comedy")) {
                  setPathurl("comedy");
                }
                else if (url.includes("drama")) {
                  setPathurl("drama");
                }
                else if (url.includes("allFeatureFilms")) {
                  setPathurl("allFeatureFilms");
                }
                else if (url.includes("allDramaFilms")) {
                  setPathurl("allDramaFilms");
                }
                else if (url.includes("watchPremiers")) {
                  setPathurl("allComedyFilms");
                }
                else if (url.includes("funForAll")) {
                  setPathurl("funForAll");
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
        {data.map((item) => (
          <div className="common-slider-card" key={item.id}>
            <div className="common-slider-card-top">
            <Link to={`/${pathurl}/${item.id}`}> 
            <img
                src={
                  defaultImage[item.title] === item.title ? 
                  defaultImage.linkDefault : item.image
                }
                alt={item.title}
                onError={handleErrorImage}
              /></Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CommonSlider;