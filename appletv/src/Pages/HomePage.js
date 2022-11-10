import React from 'react'
import "./homePage.css"
import { images, static2, StaticData } from '../Components/StaticSlider/StaticData'
import ImageSlider from '../Components/StaticSlider/ImageSlider'
import { Box, Flex } from '@chakra-ui/react'
import Herovideo from '../Components/Herovideo'
import Static from '../Components/StaticSlider/Static'
const HomePage = () => {
  
  return (
    <div>
        <Herovideo />
        <Static/>
    </div>
  )
}

export default HomePage
