import React,{ useState }  from 'react'
import {Flex,Box,FormControl,FormLabel,Input,Stack,Button, Heading, Text, useColorModeValue, Container,} from '@chakra-ui/react';
import { useDispatch,  } from 'react-redux';
import {  EDIT_DATA} from '../Redux/App/action';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineBookmarkAdded } from "react-icons/md";
export const EditCartData =()=> {
    const[moviename,setMoviename]=useState("");
    const[movieDes,setMovieDes]=useState("");
    const [movieimage, setMovieImage]= useState("")
    const [movieSeason, setMovieSeason]= useState("")
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
     
      toast.success("Content Deleted from server")
      navigate("/admin")
      setMoviename("")
      setMovieDes("")
      setMovieImage("")
      setMovieSeason("")
    }
  return (
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
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Admin Edit Product
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
          item will be Edited
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
              <Input type="text" value={movieSeason} onChange={(e)=>setMovieSeason(e.target.value)} />
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
  );
}