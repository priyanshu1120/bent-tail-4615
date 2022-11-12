import React, { useEffect, useState } from 'react'
import ImageSlider from './ImageSlider'
import { static2, StaticData } from './StaticData'
import "./static.css"

const Static = () => {

  const [size, setSize] = useState(window.innerWidth);
  const updateSize = () =>
    setSize(window.innerWidth);
  useEffect(() => (window.onresize = updateSize), []);

  return (
  
    <div className= "static-slide-show">
       {
        size > 720 ?   <ImageSlider StaticData={StaticData}  /> :   <ImageSlider StaticData={static2}  /> 
       }
         
      </div> 

  )
}

export default Static