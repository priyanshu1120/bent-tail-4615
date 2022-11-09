import React, { useState } from 'react'

// import styles from "./Pages/HomePage.module.css"

import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from "react-icons/md"


const ImageSlider = ({StaticData}) => {
const [current,setCurrent] = useState(0)
const length = StaticData.length;

if(!Array.isArray(StaticData) || length<=0 ){
    return null;
}

const next = ()=>{
setCurrent(current===length-1 ? 0: current+1)
}

const prev = ()=>{
    setCurrent(current===0 ? length-1 : current-1)
}

// console.log(current)
  return (
    <div className="static-slider">
        <MdKeyboardArrowRight  className="right-arrow" onClick={next} />
        <MdKeyboardArrowLeft  className="left-arrow" onClick={prev}/>

        {
            StaticData.map((slide,index)=>(
                    <div className= {index === current ? "slide active" :"active"} key = {index}>
                         {index === current && (<img src={slide.image} alt="slide" className = "static-slide-images"/>)}
                    </div>
                
            ))
        }
    </div>
  )
}

export default ImageSlider