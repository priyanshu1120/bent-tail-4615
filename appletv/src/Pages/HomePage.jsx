import { Box,Text } from '@chakra-ui/react'
import React from 'react'
import { Comedy } from '../component/comedy'
import Faq from '../Components/Faq'
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
      <CommonDetailSlider url="https://appletv-server-cljhqn6xz-nrishav007.vercel.app/watchPremiers"  />
      </Box>
      <Box mt="60px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl="40px">Most Popular </Text>
      <CommonSlider url="https://appletv-server-cljhqn6xz-nrishav007.vercel.app/mostPopular"  />
      </Box>

      <Box mt="15px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl="40px">Watch Entire Seasons </Text>
      <CommonSlider url="https://appletv-server-cljhqn6xz-nrishav007.vercel.app/allFeatureFilms"  />
      </Box>
        
      <Box mt="15px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl="40px">Entire Originals</Text>
      <CommonSlider url="https://appletv-server-cljhqn6xz-nrishav007.vercel.app/watchPremiers"  />
      </Box>
    

      <Box mt="15px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl="40px"> Latest Originals </Text>
      <CommonDetailSlider url="https://appletv-server-cljhqn6xz-nrishav007.vercel.app/allDramaFilms"  />
      </Box>

      <Box mt={"100px"}>
      <Text fontSize="22px" fontWeight={700} pl="40px">Included with apple TV+</Text>
      <Text fontSize="19px" fontWeight={400} pl="40px">Watch unforgotable hits as a limited time subscriber bonus </Text>
      <CommonSlider url="https://appletv-server-cljhqn6xz-nrishav007.vercel.app/futureRelease"  />
      </Box>

      <Box mt="15px">
      <Text fontSize="22px" fontWeight={700} pl="40px">Future Releases</Text>
      <Text fontSize="19px" fontWeight={400} pl="40px">Add to Up Next now</Text>
      <StaticSlider2  data = { sliderdata2 } />
      </Box>

     {/* <=========videospace========> */}


         
     <Box mt="15px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl="40px"> Like a Boss </Text>
      <CommonSlider url="https://appletv-server-cljhqn6xz-nrishav007.vercel.app/drama"  />
      </Box>
     
      <Box mt="15px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl="40px"> Nail-Biting Thrills </Text>
      <CommonSlider url="https://appletv-server-cljhqn6xz-nrishav007.vercel.app/latestOriginals"  />
      </Box>

      <Box mt="15px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl="40px"> Defining Moment </Text>
      <CommonSlider url="https://appletv-server-cljhqn6xz-nrishav007.vercel.app/allDramaFilms"  />
      </Box>

      
      <Box mt="15px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl="40px"> Mystery & Mischief </Text>
      <CommonSlider url="https://appletv-server-cljhqn6xz-nrishav007.vercel.app/allComedyFilms"  />
      </Box>

      <Box mt="15px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl="40px"> Nonfiction Films & Series </Text>
      <Text fontSize="19px" fontWeight={400} pl="40px">Explore facinating stories that inspire and enlighten</Text>
      <StaticSlider2 data = { sliderdata3 } />
      </Box>

      <Box>
      <Static/>
     </Box>
      <Faq/>
    </div>
  )
}

export default HomePage
