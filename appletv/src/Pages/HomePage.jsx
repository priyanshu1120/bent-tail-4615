import React from 'react'
import "./homePage.css"
import { images, static2, StaticData } from '../Components/StaticSlider/StaticData'
import ImageSlider from '../Components/StaticSlider/ImageSlider'
const HomePage = () => {
  return (
    <div>
      <div className= "static-slide-show">
         <ImageSlider StaticData={StaticData}  />
         <h1>hellow</h1>
         <h1>hellow</h1>
         <h1>hellow</h1>
         <ImageSlider StaticData={static2}  />     
    </div>

    </div>
  )
}

export default HomePage
