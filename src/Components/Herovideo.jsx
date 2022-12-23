import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "../Utils/firebase";
import "./herovideo.css";
import Payment from "./Payment/Payment";



const Herovideo = () => {
  const [auth,setAuth] =useState(false);
  const src = "tv.mp4";
   const navigate = useNavigate()
  const handleClick = ()=>{
       navigate("/login")
       
  }
  useEffect(()=>{
    onAuthStateChanged(UserAuth, (user) => {
      if (user) {
        setAuth(true)
      } else {
        setAuth(false)
      }
    });
  },[])

  return (
    <div className="title-video-container">
      <div className="mask">
        <video className="base-img" autoPlay={true} playsInline >
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
        <Payment/>
    
        <p>7 days free then, $6.99/month</p>
      </div>
    </div>
  );
};

export default Herovideo;
