import { Box,Img, Text,} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Faq from '../Components/Faq'
import { Footer } from '../Components/Footer'
import Herovideo from '../Components/Herovideo'
import { StaticData2, StaticData1 , StaticData3 } from '../Components/StaticSlider/StaticData'
import StaticSlider from '../Components/StaticSlider/StaticSlider'
import CommonDetailSlider from '../Components/CustomComponents/CommonDetailSlider'

const HomePage = () => { 
        const base_url=process.env.REACT_APP_BASE_URL;
  const [size, setSize] = useState(window.innerWidth);
  const updateSize = () =>
    setSize(window.innerWidth);
  useEffect(() => (window.onresize = updateSize), []);

  return (
    <Box>
      <Herovideo />
      <Box mt="10px">
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}>Watch Premieres for free </Text>
        <CommonDetailSlider url={`${base_url}/watchPremiers`} description={true} />
      </Box>
      <Box mt="50px">
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1 , 2, 4,7]}>Most Popular </Text>
        <CommonDetailSlider url={`${base_url}/mostPopular`}  />
      </Box>

      <Box mt="15px">
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}>Watch Entire Seasons </Text>
        <CommonDetailSlider url={`${base_url}/allFeatureFilms`}  />
      </Box>
        
      <Box mt="15px">
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}>Entire Originals</Text>
        <CommonDetailSlider url={`${base_url}/watchPremiers`} />
      </Box>
    

      <Box mt="15px">
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}> Latest Originals </Text>
        <CommonDetailSlider url={`${base_url}/latestOriginals`} />
      </Box>

      <Box mt={"50px"}>
        <Text fontSize="22px" fontWeight={700} pl={[1,2,4,7]}>Included with apple TV+</Text>
        <Text fontSize="19px" fontWeight={400} pl={[1,2,4,7]}>Watch unforgotable hits as a limited time subscriber bonus </Text>
        <CommonDetailSlider url={`${base_url}/futureRelease`} />
      </Box>

      <Box mt={"30px"} >
        <Box>
          <Img  src="https://is4-ssl.mzstatic.com/image/thumb/Features122/v4/b5/aa/57/b5aa5705-1a39-af37-805b-257af57ad42a/db917410-1e16-4f3a-96f6-4f11a8f78fa2.png/2638x988sr.webp" alt="img"/>
        </Box>
        <Box mt={"30px"}  >
          <Text fontSize="22px" fontWeight={700} pl={[1,2,4,7]}>Future Releases</Text>
          <Text fontSize="19px" fontWeight={400} pl={[1,2,4,7]}>Add to Up Next now</Text>
        {
        size > 720 ? 
        (<StaticSlider  data = {StaticData2} slideshow={3} slidesToScroll ={2}  />)
         : size<720 && size>420? <StaticSlider  data = {StaticData2} slideshow={2} slidesToScroll ={2} />
         :<StaticSlider  data = {StaticData2} slideshow={1} slidesToScroll ={1} /> }  
        </Box>
      </Box>
     {/* <=========videospace========> */}     
     <Box mt="15px">
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}> Like a Boss </Text>
        <CommonDetailSlider url={`${base_url}/drama`} />
     </Box>
     
      <Box mt="15px">
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}> Nail-Biting Thrills </Text>
        <CommonDetailSlider url={`${base_url}/latestOriginals`} />
      </Box>

      <Box mt="15px">
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}> Defining Moment </Text>
        <CommonDetailSlider url={`${base_url}/allDramaFilms`} />
      </Box>

      <Box mt="15px">
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}> Mystery & Mischief </Text>
        <CommonDetailSlider url={`${base_url}/allComedyFilms`} />
      </Box>

      <Box mt="15px">
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}> Nonfiction Films & Series </Text>
        <Text fontSize="19px" fontWeight={400} pl={[1,2,4,7]}>Explore facinating stories that inspire and enlighten</Text>
        {
        size > 720 ? 
        (<StaticSlider  data = {StaticData3} slideshow={3} slidesToScroll ={2} />)
         : size<720 && size>420? <StaticSlider  data = {StaticData3} slideshow={2} slidesToScroll ={2} />
         :<StaticSlider data = {StaticData3} slideshow={1} slidesToScroll ={1} />
        }  
      </Box>

      <Box mt="20px">
      {
      size > 720 ? 
      (<StaticSlider data = {StaticData1} slideshow={1} slidesToScroll ={1}  />)
       : size<720 && size>420? <StaticSlider  data = {StaticData1} slideshow={1} slidesToScroll ={1} />
       :<StaticSlider data = {StaticData1} slideshow={1} slidesToScroll ={1} />
      }  
     </Box>

     <Box mt="60px">
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}>Major League Baseball </Text>
        <CommonDetailSlider url={`${base_url}/mostPopular`} />
      </Box>

      <Box mt="15px">
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}>Watch Entire Seasons </Text>
        <CommonDetailSlider url={`${base_url}/allFeatureFilms`} />
      </Box>
        
      <Box mt="15px">
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}>Ted Lesso:Winner of 4 Emmey Awards</Text>
        <CommonDetailSlider url={`${base_url}/watchPremiers`} />
      </Box>
     
      <Box mt="15px">
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}> Kids & Family</Text>
        <Text fontSize="19px" fontWeight={400} pl={[1,2,4,7]}>Discover Shows And Movies Filled With Wonder and Series</Text>
        <CommonDetailSlider url={`${base_url}/funForAll`} />
      </Box>
     <Footer />
      <Faq/>
    </Box>
  )
}

export default HomePage
