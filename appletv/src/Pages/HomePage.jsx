import { Box,Img,Text } from '@chakra-ui/react'
import React from 'react'
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
      {/* <Box mt="10px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1 , 2, 4,7]}>Watch Premieres for free </Text>
      <CommonDetailSlider url="/watchPremiers"  />
      </Box>
      <Box mt="50px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1 , 2, 4,7]}>Most Popular </Text>
      <CommonSlider url="/mostPopular"  />
      </Box>

      <Box mt="15px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}>Watch Entire Seasons </Text>
      <CommonSlider url="/allFeatureFilms"  />
      </Box>
        
      <Box mt="15px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}>Entire Originals</Text>
      <CommonSlider url="/watchPremiers"  />
      </Box>
    

      <Box mt="15px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}> Latest Originals </Text>
      <CommonDetailSlider url="/latestOriginals"  />
      </Box>

      <Box mt={"50px"}>
      <Text fontSize="22px" fontWeight={700} pl={[1,2,4,7]}>Included with apple TV+</Text>
      <Text fontSize="19px" fontWeight={400} pl={[1,2,4,7]}>Watch unforgotable hits as a limited time subscriber bonus </Text>
      <CommonSlider url="/futureRelease"  />
      </Box>

      <Box mt={"20px"} >
      <Box>
      <Img  src="https://is4-ssl.mzstatic.com/image/thumb/Features122/v4/b5/aa/57/b5aa5705-1a39-af37-805b-257af57ad42a/db917410-1e16-4f3a-96f6-4f11a8f78fa2.png/2638x988sr.webp" alt="img"/>
      </Box>
      <Box >
      <Text fontSize="22px" fontWeight={700} pl={[1,2,4,7]}>Future Releases</Text>
      <Text fontSize="19px" fontWeight={400} pl={[1,2,4,7]}>Add to Up Next now</Text>
      <StaticSlider2  data = { sliderdata2 } />
      </Box>
      </Box> */}
     {/* <=========videospace========> */}


{/*          
     <Box mt="15px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}> Like a Boss </Text>
      <CommonSlider url="/drama"  />
      </Box>
     
      <Box mt="15px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}> Nail-Biting Thrills </Text>
      <CommonSlider url="/latestOriginals"  />
      </Box>

      <Box mt="15px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}> Defining Moment </Text>
      <CommonSlider url="/allDramaFilms"  />
      </Box>

      
      <Box mt="15px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}> Mystery & Mischief </Text>
      <CommonSlider url="/allComedyFilms"  />
      </Box>

      <Box mt="15px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}> Nonfiction Films & Series </Text>
      <Text fontSize="19px" fontWeight={400} pl={[1,2,4,7]}>Explore facinating stories that inspire and enlighten</Text>
      <StaticSlider2 data = { sliderdata3 } />
      </Box>

      <Box>
      <Static/>
     </Box>

     <Box mt="60px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}>Major League Baseball </Text>
      <CommonSlider url="/mostPopular"  />
      </Box>

      <Box mt="15px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}>Watch Entire Seasons </Text>
      <CommonSlider url="/allFeatureFilms"  />
      </Box>
        
      <Box mt="15px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}>Ted Lesso:Winner of 4 Emmey Awards</Text>
      <CommonSlider url="/watchPremiers"  />
      </Box>
     
      <Box mt="15px">
      <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}> Kids & Family</Text>
      <Text fontSize="19px" fontWeight={400} pl={[1,2,4,7]}>Discover Shows And Movies Filled With Wonder and Series</Text>
      <CommonSlider url="/funForAll"/>
      </Box> */}

     <Footer />
      <Faq/>
    </div>
  )
}

export default HomePage
