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

  const responsive  = (value)=>{
     
    if(size>980){
       return value[0]
    }else if(size<980 && size>720){
          return value[1]
    }else if(size<720 && size>520){
      return value[2]
    }
    else{
      return value[3]
    }
  }

  return (
    <Box>
      <Herovideo />
      <Box mt="10px">
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}>Watch Premieres for free </Text>
        <CommonDetailSlider url={`${base_url}/watchPremiers`} description={true} slideshow={responsive([4,3,3,1])} slidesToScroll ={responsive([4,3,3,1])} />
      </Box>
      <Box mt="50px">
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1 , 2, 4,7]}>Most Popular </Text>
        <CommonDetailSlider url={`${base_url}/mostPopular`} slideshow={responsive([4,3,3,1])} slidesToScroll ={responsive([4,3,3,1])}  />
      </Box>

      <Box mt="15px">
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}>Watch Entire Seasons </Text>
        <CommonDetailSlider url={`${base_url}/allFeatureFilms`} slideshow={responsive([4,3,3,1])} slidesToScroll ={responsive([4,3,3,1])}  />
      </Box>
        
      <Box mt="15px">
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}>Entire Originals</Text>
        <CommonDetailSlider url={`${base_url}/drama`} slideshow={responsive([4,3,3,1])} slidesToScroll ={responsive([4,3,3,1])} />
      </Box>
    

      <Box mt="15px">
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}> Latest Originals </Text>
        <CommonDetailSlider url={`${base_url}/latestOriginals`} slideshow={responsive([4,3,3,1])} slidesToScroll ={responsive([4,3,3,1])} />
      </Box>

      <Box mt={"50px"}>
        <Text fontSize="22px" fontWeight={700} pl={[1,2,4,7]}>Included with apple TV+</Text>
        <Text fontSize="19px" fontWeight={400} pl={[1,2,4,7]}>Watch unforgotable hits as a limited time subscriber bonus </Text>
        <CommonDetailSlider url={`${base_url}/futureRelease`} slideshow={responsive([4,3,3,1])} slidesToScroll ={responsive([4,3,3,1])} />
      </Box>

      <Box mt={"30px"} >
        <Box>
          <Img  src="https://is4-ssl.mzstatic.com/image/thumb/Features122/v4/b5/aa/57/b5aa5705-1a39-af37-805b-257af57ad42a/db917410-1e16-4f3a-96f6-4f11a8f78fa2.png/2638x988sr.webp" alt="img"/>
        </Box>
        <Box mt={"30px"}  >
          <Text fontSize="22px" fontWeight={700} pl={[1,2,4,7]}>Future Releases</Text>
          <Text fontSize="19px" fontWeight={400} pl={[1,2,4,7]}>Add to Up Next now</Text>
          <StaticSlider  data = {StaticData2}  slideshow={responsive([3,3,2,1])} slidesToScroll ={responsive([3,3,2,1])} />
        </Box>
      </Box>
  
     <Box mt="15px">
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}> Like a Boss </Text>
        <CommonDetailSlider url={`${base_url}/drama`} slideshow={responsive([4,3,3,1])} slidesToScroll ={responsive([4,3,3,1])}  />
     </Box>
     
      <Box mt="15px">
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}> Nail-Biting Thrills </Text>
        <CommonDetailSlider url={`${base_url}/latestOriginals`} slideshow={responsive([4,3,3,1])} slidesToScroll ={responsive([4,3,3,1])} />
      </Box>

      <Box mt="15px">
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}> Defining Moment </Text>
        <CommonDetailSlider url={`${base_url}/allDramaFilms`} description={true} slideshow={responsive([4,3,3,1])} slidesToScroll ={responsive([4,3,3,1])}  />
      </Box>

      <Box mt="55px">
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}> Mystery & Mischief </Text>
        <CommonDetailSlider url={`${base_url}/allComedyFilms`} slideshow={responsive([4,3,3,1])} slidesToScroll ={responsive([4,3,3,1])} />
      </Box>

      <Box mt="15px">
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}> Nonfiction Films & Series </Text>
        <Text fontSize="19px" fontWeight={400} pl={[1,2,4,7]}>Explore facinating stories that inspire and enlighten</Text>
        <StaticSlider data = {StaticData3} slideshow={responsive([3,3,2,1])} slidesToScroll ={responsive([3,3,2,1])} />
      </Box>

      <Box mt="30px">
      <StaticSlider data = {StaticData1} slideshow={responsive([1,1,1,1])} slidesToScroll ={responsive([1,1,1,1])} /> 
     </Box>

     <Box mt={["10px","60px","150px","300px"]}>
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}>Major League Baseball </Text>
        <CommonDetailSlider url={`${base_url}/mostPopular`} slideshow={responsive([4,3,3,1])} slidesToScroll ={responsive([4,3,3,1])} />
      </Box>

      <Box mt="15px">
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}>Watch Entire Seasons </Text>
        <CommonDetailSlider url={`${base_url}/allFeatureFilms`} slideshow={responsive([4,3,3,1])} slidesToScroll ={responsive([4,3,3,1])} />
      </Box>
        
      <Box mt="15px">
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}>Ted Lesso:Winner of 4 Emmey Awards</Text>
        <CommonDetailSlider url={`${base_url}/allComedyFilms`} slideshow={responsive([4,3,3,1])} slidesToScroll ={responsive([4,3,3,1])}  />
      </Box>
     
      <Box mt="15px">
        <Text pt="10px" fontSize="22px" fontWeight={700} pl={[1,2,4,7]}> Kids & Family</Text>
        <Text fontSize="19px" fontWeight={400} pl={[1,2,4,7]}>Discover Shows And Movies Filled With Wonder and Series</Text>
        <CommonDetailSlider url={`${base_url}/funForAll`} slideshow={responsive([4,3,3,1])} slidesToScroll ={responsive([4,3,3,1])} />
      </Box>
     <Footer />
      <Faq/>
    </Box>
  )
}

export default HomePage
