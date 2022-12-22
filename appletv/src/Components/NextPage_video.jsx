import React from 'react'
import "../Components/herovideo.css";
import tv from "../video/tv.mp4";
const Video = () => {
  return (
    <div className='title-video-container'>
   <div className='mask'>
   <video  className="base-img"   autoPlay  playsinline muted preload="auto">
      <source src={tv} type="video/mp4"  />
    </video>
   </div>
   </div>
  )
}

export default Video