import { Link } from "react-router-dom";
import React from "react";
import "./herovideo.css";
import Payment from "./Payment/Payment";

const Herovideo = () => {
  const src = "tv.mp4";
  return (
    <div className="title-video-container">
      <div className="mask">
        <video className="base-img"  autoPlay   playsinline muted preload="auto">
          <source src={src} type="video/mp4" />
        </video>
      </div>

      <div className="content">
        <h1>THE MOSQUITO COAST</h1>
        <h4>Thriller</h4>
        <h3>
          The Fox family begin a new chapter in their dangerous quest. Watch the
          Season 2 premiere.
        </h3>
        {/* <Link to="/payment"></Link> */}
        <Payment />
        <p>7 days free then, $6.99/month</p>
      </div>
    </div>
  );
};

export default Herovideo;
