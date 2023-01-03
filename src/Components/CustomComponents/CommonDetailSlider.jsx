import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomSlider.css";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {slideSetting} from '../../Utils/CommonFunction';

function CommonDetailSlider({ url ,description,slideshow,slidesToScroll}) {
  // const base_url=process.env.REACT_APP_BASE_URL;
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false)
  const [defaultImage, setDefaultImage] = useState({});
  const [pathurl, setPathurl] = useState("");

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault:
        "https://is1-ssl.mzstatic.com/image/thumb/kjrFHClZ3Bt-pT0MJnwdFw/738x416.webp",
    }));
  };

  useEffect(() => {
    setLoading(true)
    axios.get(url).then((r) => {
      setData(r.data);
      setLoading(false)
      if (url.includes("watchPremiers")) {
        setPathurl("watchPremiers");
      } else if (url.includes("latestOriginals")) {
        setPathurl("latestOriginals");
      } else if (url.includes("mostPopular")) {
        setPathurl("mostPopular");
      } else if (url.includes("futureRelease")) {
        setPathurl("futureRelease");
      } else if (url.includes("comedy")) {
        setPathurl("comedy");
      } else if (url.includes("drama")) {
        setPathurl("drama");
      } else if (url.includes("allFeatureFilms")) {
        setPathurl("allFeatureFilms");
      } else if (url.includes("allDramaFilms")) {
        setPathurl("allDramaFilms");
      } else if (url.includes("allComedyFilms")) {
        setPathurl("allComedyFilms");
      } else if (url.includes("funForAll")) {
        setPathurl("funForAll");
      }
    });
  }, []);

  const settings =   slideSetting(slideshow,slidesToScroll)



  return (
    <div className="main-slider">
      <Slider {...settings}>
        {
         
         loading? <div><img src="https://media.tenor.com/wfEN4Vd_GYsAAAAM/loading.gif" width="100px"  height="100px" alt="loading..."/></div>:
        
        data.map((item) => (
          <div className={description?"common-detail-slider-card":"common-slider-card" } key={item.id}>
            <div className="common-detail-slider-card-top">
              <Link to={`/${pathurl}/${item.id}/${item.title}/movie`}>
                <img
                  src={
                    defaultImage[item.title] === item.title
                      ? defaultImage.linkDefault
                      : item.image
                  }
                  alt={item.title}
                  onError={handleErrorImage}
                />
                {
                  description ? <>
                  <p style={{ fontWeight: "600" }}>
                  {item.title} {item.image ?<span style={{ fontWeight: "500" }}>
                   | S{item.season} | E{item.id}
                  </span>:""}
                </p>
                <p style={{ color: "light", fontWeight: "400" }}>
                  {item.description}
                </p>
                  </>:<></>
                }
       
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CommonDetailSlider;
