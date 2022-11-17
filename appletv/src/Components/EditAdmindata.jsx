import React,{ useEffect, useRef, useState }  from 'react'
import {Flex,Box,FormControl,FormLabel,Input,Stack,Button, Heading, Text, useColorModeValue, Container, Image, SimpleGrid, VStack, HStack,} from '@chakra-ui/react';
import { useDispatch, useSelector,  } from 'react-redux';
import {  EDIT_DATA, EDIT_DATA_AGAIN, GET_PRODUCTS} from '../Redux/App/action';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { GrFormView, GrFormViewHide } from "react-icons/gr";

export const EditCartData =()=> {
  const Priviousdata = "Privious data will Remain same if Seasonfild gonna be Empty."
    const[moviename,setMoviename]=useState("");
    const[movieDes,setMovieDes]=useState("");
    const [movieimage, setMovieImage]= useState("")
    const [movieSeason, setMovieSeason]= useState("")
    // const [viewPrevData, setviewPrevData]= useState(false)
    // const [viewCruntData, setviewCruntData]= useState(false)
    const PRODUCTS= useSelector((state)=> state.AppReducer.products)
// const handelviewPrevData=()=>{
//   setviewPrevData(true);
// }
// const handelviewCruntData=()=>{
//   setviewCruntData(false);
// }
// const handelHidePrevData=()=>{
//   setviewPrevData(true);
// }
// const handelHideCruntData=()=>{
//   setviewCruntData(false);
// }
const dispatch = useDispatch();
const formclear =()=>{
navigate("/admin")
  toast.success("Edit Cancled")
}
const {id} =useParams();
    const navigate =useNavigate();
 const handelUpdate =()=>{
      const payload={
      }
      if(moviename !== ""){
        payload.title = moviename 
     }
     if(movieDes !== ""){
       payload.description = movieDes 
     }
     if(movieimage !== ""){
       payload.image = movieimage
    }
    if(movieSeason !== ""){
      payload.season = movieSeason 
    }
      dispatch(EDIT_DATA(id,payload))
      .then(()=>{
      });
 
      dispatch(EDIT_DATA_AGAIN(id,payload))
      .then(()=>{

      });
      toast.success("Content Deleted from server")
      navigate("/admin")
      setMoviename("")
      setMovieDes("")
      setMovieImage("")
      setMovieSeason("")
    }
    useEffect(()=>{
      if(PRODUCTS.length>=0){
          dispatch(GET_PRODUCTS())   
      }},[])

  return (
    <SimpleGrid  mt={20} columns={[1,2,2]}>
{/* <HStack  justify={"center"} align={"center"}>
  <VStack>
  <Text  color={"red.500"} as={"b"} textAlign={"center"} fontSize={"2xl"} zIndex={5}>Privous Data</Text>
<>{PRODUCTS.length> 0 && PRODUCTS.map((item) =>{

return (
  item.title && item.image && item.season&& item.season?
  <VStack  key={item.id} bg={"whiteAlpha.800"} h={450} color={"blackAlpha.900"} px={10} alignItems={"center"} justifyContent={"center"} boxShadow='md' borderRadius={5}>
              <>
                    <Image borderRadius={"5px"} border={"2px solid RGBA(0, 0, 0, 80)"} m={0} width={300} height={169} boxShadow={"xl"} src={item.image} alt={item.image}/>
                    <VStack>
                    <FormControl > <FormLabel color={"black"} as="b" >New Title</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"30px"} overflow={"auto"}>
                         <Text  px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"}  > {item.title}</Text></Box></FormControl>
                        <VStack>
                     <FormControl> <FormLabel color={"black"} as="b">New Description</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"50px"} overflow={"auto"}>
                         <Text  px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"} > {item.description}</Text></Box></FormControl>
                       </VStack>
                        <Text  px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"}  ><Text color={"black"} as="b">New Season:</Text> {item.season}</Text>
                    </VStack>
              </>
                  </VStack>:"")})}
  </>
                  </VStack> */}
                  {/* </HStack> */}



<HStack  justify={"center"} align={"center"}>
  <VStack>
<Text  color={"blue.500"} as={"b"} textAlign={"center"} fontSize={"2xl"} zIndex={5}>New Data</Text>
<VStack  bg={"whiteAlpha.800"} h={450} color={"blackAlpha.900"} px={10} alignItems={"center"} justifyContent={"center"} boxShadow='md' borderRadius={5}>
              <>
                    <Image  borderRadius={"5px"} border={"2px solid RGBA(0, 0, 0, 80)"} m={0} width={300} height={169} boxShadow={"xl"}  src={movieimage} alt={moviename}/>
                    <VStack>
                    <FormControl > <FormLabel color={"black"} as="b" >New Title</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"30px"} overflow={"auto"}>
                         <Text  px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"}  > {moviename?`${moviename}`:`${Priviousdata}`}</Text></Box></FormControl>
                        <VStack>
                     <FormControl> <FormLabel color={"black"} as="b">New Description</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"50px"} overflowX={"auto"}>
                         <Text  px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"}  > {movieDes?`${movieDes}`:`${Priviousdata}`}</Text></Box></FormControl>
                     {movieDes===""?"":  <Text  mt={-20} p={0} as={"b"} textAlign={"center"} color={"red.500"} fontSize={"2xs"}>Scroll Down</Text>}
                       </VStack>
                       <FormControl> <FormLabel color={"black"} as="b">New Season</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"30px"} overflow={"auto"}>
                         <Text px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"}  > {movieSeason?`${movieSeason}`:`${Priviousdata}`}</Text></Box></FormControl>
                    </VStack>
              </>
                  </VStack>
                  </VStack>
                  </HStack>

    <Stack justifyContent={"center"} alignItems={"center"} spacing={4} >
    <Container p={0} m={0} border={0}>
    <Flex 
      minH={'50vh'}
      align={'center'}
      justify={'center'}
      p={0} m={0}
   >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} >
        <Stack align={'center'}>
          <Heading color={"teal.400"} fontSize={'2xl'} textAlign={'center'}>
            Edit here
          </Heading>
          <Text color={"teal.400"} fontSize={'lg'} >
          Edit single & Multiple item here
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack >
          <form>
            <FormControl id="Title" >
                  <FormLabel>Title</FormLabel>
                  <Input type="text" value={moviename} onChange={(e)=>setMoviename(e.target.value)}  />
                </FormControl>
            <FormControl id="Image" >
              <FormLabel>Image</FormLabel>
              <Input type="Text" value={movieimage} onChange={(e)=>setMovieImage(e.target.value)}  />
            </FormControl>
            <FormControl id="Description" >
                  <FormLabel>Description</FormLabel>
                  <Input type="text" value={movieDes} onChange={(e)=>setMovieDes(e.target.value)}   />
                </FormControl>
            <FormControl id="Time" >
              <FormLabel>Seasons</FormLabel>
              <Input type="number" value={movieSeason} onChange={(e)=>setMovieSeason(e.target.value)} />
            </FormControl>   
            <Stack pt={5} spacing={6} direction={['column', 'row']}>
          <Box><Button leftIcon={<IoMdArrowRoundBack/>}
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
           }}c onClick={formclear}>
            Go Back
          </Button></Box>
          <Button 
          rightIcon={<MdOutlineBookmarkAdded/>}
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}
            type="submit"  onClick={handelUpdate }  >
            Submit
          </Button>
        </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </Container>
    </Stack>
    </SimpleGrid>
  );
}