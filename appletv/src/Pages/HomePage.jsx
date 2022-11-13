import { Box,Img,Text } from '@chakra-ui/react'
import React from 'react'
import { Comedy } from '../component/comedy'
import Faq from '../Components/Faq'
import { Footer } from '../Components/Footer'
import Herovideo from '../Components/Herovideo'
import Static from '../Components/StaticSlider/Static'
import { sliderdata2, sliderdata3 } from '../Components/StaticSlider/StaticData'
import StaticSlider2 from '../Components/StaticSlider/StaticSlider2'
import CommonDetailSlider from '../CustomComponents/CommonDetailSlider'
import CommonSlider from '../CustomComponents/CommonSlider'


const HomePage = () => {
  
  return (
    <div>
      <Herovideo />
      <Box mt="10px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl="40px">Watch Premieres for free </Text>
      <CommonDetailSlider url="/watchPremiers"  />
      </Box>
      <Box mt="60px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl="40px">Most Popular </Text>
      <CommonSlider url="/mostPopular"  />
      </Box>

      <Box mt="15px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl="40px">Watch Entire Seasons </Text>
      <CommonSlider url="/allFeatureFilms"  />
      </Box>
        
      <Box mt="15px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl="40px">Entire Originals</Text>
      <CommonSlider url="/watchPremiers"  />
      </Box>
    

      <Box mt="15px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl="40px"> Latest Originals </Text>
      <CommonDetailSlider url="/allDramaFilms"  />
      </Box>

      <Box mt={"100px"}>
      <Text fontSize="22px" fontWeight={700} pl="40px">Included with apple TV+</Text>
      <Text fontSize="19px" fontWeight={400} pl="40px">Watch unforgotable hits as a limited time subscriber bonus </Text>
      <CommonSlider url="/futureRelease"  />
      </Box>

      <Box mt={"20px"} >
      <Box>
      <Img  src="https://is4-ssl.mzstatic.com/image/thumb/Features122/v4/b5/aa/57/b5aa5705-1a39-af37-805b-257af57ad42a/db917410-1e16-4f3a-96f6-4f11a8f78fa2.png/2638x988sr.webp" alt="img"/>
      </Box>
      <Box >
      <Text fontSize="22px" fontWeight={700} pl="40px">Future Releases</Text>
      <Text fontSize="19px" fontWeight={400} pl="40px">Add to Up Next now</Text>
      <StaticSlider2  data = { sliderdata2 } />
      </Box>
      </Box>
     {/* <=========videospace========> */}


         
     <Box mt="15px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl="40px"> Like a Boss </Text>
      <CommonSlider url="/drama"  />
      </Box>
     
      <Box mt="15px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl="40px"> Nail-Biting Thrills </Text>
      <CommonSlider url="/latestOriginals"  />
      </Box>

      <Box mt="15px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl="40px"> Defining Moment </Text>
      <CommonSlider url="/allDramaFilms"  />
      </Box>

      
      <Box mt="15px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl="40px"> Mystery & Mischief </Text>
      <CommonSlider url="/allComedyFilms"  />
      </Box>

      <Box mt="15px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl="40px"> Nonfiction Films & Series </Text>
      <Text fontSize="19px" fontWeight={400} pl="40px">Explore facinating stories that inspire and enlighten</Text>
      <StaticSlider2 data = { sliderdata3 } />
      </Box>

      <Box>
      <Static/>
     </Box>
     <Footer/>
      <Faq/>
    </div>
  )
}

export default HomePage
