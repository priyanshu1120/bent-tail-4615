import React,{ useState }  from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { ADD_DATA } from '../Redux/App/action';
export const Admin =()=> {
const [form, setForm]= useState({
  title: "",
  image: "",
  description:"",
  season: null
})
const dispatch = useDispatch();
const {currentData} = useSelector((state)=> state.AppReducer)
const OnChangeValue =(e)=>{
  let{name:key,value,}= e.target ;
setForm({
      ...form,
      [key]:value
    })
  }


const OnsubmitPress =(e)=>{
  e.preventDefault();
  
    dispatch(ADD_DATA({...form})).then((r)=>{
    })
    setForm({
      title: "",
      image: "",
      description:"",
      season: ""
    })}

console.log(currentData,"currentData")
  return (
    <Flex backdropBlur={50}
      minH={'50vh'}
      align={'center'}
      justify={'center'}
   >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
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
                  <Input type="text"onChange={OnChangeValue} name="title" />
                </FormControl>
            <FormControl id="Image" isRequired>
              <FormLabel>Image</FormLabel>
              <Input type="Text" onChange={OnChangeValue} name="image"  />
            </FormControl>
            <FormControl id="Description" isRequired>
                  <FormLabel>Description</FormLabel>
                  <Input type="text" onChange={OnChangeValue} name="description"  />
                </FormControl>
            <FormControl id="Time" isRequired>
              <FormLabel>Time</FormLabel>
              <Input type="text" onChange={OnChangeValue} name="season"/>
            </FormControl>   
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}  
                 type="submit"  onClick={ OnsubmitPress}   >
                Add 
              </Button>
            </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
