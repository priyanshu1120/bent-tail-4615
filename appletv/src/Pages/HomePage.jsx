import React from 'react'
import { Comedy } from '../component/comedy'
import Faq from '../Components/Faq'
import Herovideo from '../Components/Herovideo'
import Static from '../Components/StaticSlider/Static'
import { sliderdata2, sliderdata3 } from '../Components/StaticSlider/StaticData'
import StaticSlider2 from '../Components/StaticSlider/StaticSlider2'
import { CustomSlider } from '../CustomComponents/CustomSlider'

const HomePage = () => {
  
  return (
    <div>
      <Herovideo />
      <CustomSlider url="https://appletv-server-cljhqn6xz-nrishav007.vercel.app/watchPremiers"  />
         <StaticSlider2 data = { sliderdata2 } />
      <StaticSlider2 data = { sliderdata3 } />
      <Static/>
      
      <Faq/>
    </div>
  )
}

export default HomePage
