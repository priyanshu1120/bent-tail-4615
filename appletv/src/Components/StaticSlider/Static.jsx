import React from 'react'
import ImageSlider from './ImageSlider'
import { StaticData } from './StaticData'
import "./static.css"

const Static = () => {
  return (
  
    <div className= "static-slide-show">
         <ImageSlider StaticData={StaticData}  />   
      </div> 

  )
}

export default Static