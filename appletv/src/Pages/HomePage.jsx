import React from 'react'
import Faq from '../Components/Faq'
import Herovideo from '../Components/Herovideo'
import Static from '../Components/StaticSlider/Static'
import { CustomSlider } from '../CustomComponents/CustomSlider'

const HomePage = () => {
  
  return (
    <div>
      <Herovideo />
      <CustomSlider url="https://appletv-server-cljhqn6xz-nrishav007.vercel.app/watchPremiers"  />
      <Static/>
      <Faq/>
    </div>
  )
}

export default HomePage
