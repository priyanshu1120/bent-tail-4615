import React from 'react'
import Faq from '../Components/Faq'
import Herovideo from '../Components/Herovideo'
import Static from '../Components/StaticSlider/Static'
import { CustomSlider } from '../CustomComponents/CustomSlider'

const HomePage = () => {
  
  return (
    <div>
      <Herovideo />
      <CustomSlider url="/watchPremiers"  />
      <Static/>
      <Faq/>
    </div>
  )
}

export default HomePage
