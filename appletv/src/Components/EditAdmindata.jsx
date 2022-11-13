import React,{ useEffect, useState }  from 'react'
import {Flex,Box,FormControl,FormLabel,Input,Stack,Button, Heading, Text, useColorModeValue, Container,} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_DATA, EDIT_DATA, GET_PRODUCTS } from '../Redux/App/action';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
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
        title: moviename,
        image: movieimage,
        description:movieDes,
        season: movieSeason
      }
      dispatch(EDIT_DATA(id,payload))
      .then(()=>{
        toast.success("Data added sucesfully")
        navigate("/admin")});
      ;
    }
console.log(id)
  return (
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
            Admin Add Product
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
          item will be added
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <form>
            <FormControl id="Title" isRequired>
                  <FormLabel>Title</FormLabel>
                  <Input type="text" value={moviename} onChange={(e)=>setMoviename(e.target.value)}  />
                </FormControl>
            <FormControl id="Image" isRequired>
              <FormLabel>Image</FormLabel>
              <Input type="Text" value={movieimage} onChange={(e)=>setMovieImage(e.target.value)}  />
            </FormControl>
            <FormControl id="Description" isRequired>
                  <FormLabel>Description</FormLabel>
                  <Input type="text" value={movieDes} onChange={(e)=>setMovieDes(e.target.value)}   />
                </FormControl>
            <FormControl id="Time" isRequired>
              <FormLabel>Seasons</FormLabel>
              <Input type="text" value={movieSeason} onChange={(e)=>setMovieSeason(e.target.value)} />
            </FormControl>   
            <Stack pt={5} spacing={6} direction={['column', 'row']}>
          <Box><Button
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
           }}c onClick={formclear}>
            Cancel
          </Button></Box>
          <Button
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}
            type="submit"  onClick={handelUpdate }  >
            Add
          </Button>
        </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </Container>
  );
}