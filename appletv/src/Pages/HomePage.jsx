import React from 'react'
import Faq from '../Components/Faq'
import Herovideo from '../Components/Herovideo'
import Static from '../Components/StaticSlider/Static'
import { sliderdata2, sliderdata3 } from '../Components/StaticSlider/StaticData'
import StaticSlider2 from '../Components/StaticSlider/StaticSlider2'


const HomePage = () => {
 
  return (
    <div>
      <Herovideo />
      <StaticSlider2 data = { sliderdata2 } />
      <StaticSlider2 data = { sliderdata3 } />
      <Static />
      <Faq/>
    </div>
  )
}

export default HomePage
