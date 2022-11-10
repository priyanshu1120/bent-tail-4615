import React from 'react'
import Faq from '../Components/Faq'
import Herovideo from '../Components/Herovideo'
import Static from '../Components/StaticSlider/Static'

const HomePage = () => {
  return (
    <div>
      <Herovideo />
      <Static/>
      <Faq/>
    </div>
  )
}

export default HomePage
