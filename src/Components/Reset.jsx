import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
    HStack,
  } from '@chakra-ui/react';
import { sendPasswordResetEmail } from 'firebase/auth';
import React,{ useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserAuth } from '../Utils/firebase';
  

  
  export const Reset=()=> {
    const navigate  =useNavigate();
    const [passwordReset,setPasswordReset]=useState("");
    const handelResetPassword =(e)=>{
      e.preventDefault();
      sendPasswordResetEmail(UserAuth, passwordReset)
  .then(() => {
    toast.success("Check you Email & Chane Password")
    navigate("/login")
  })
  .catch((error) => {
    const errorMessage = error.message;
    toast.error(errorMessage)
    // ..
  });
    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Forgot your password?
          </Heading>
          <Text
            fontSize={{ base: 'sm', sm: 'md' }}
            color={useColorModeValue('gray.800', 'gray.400')}>
            You&apos;ll get an email with a reset link
          </Text>
          <form onSubmit={handelResetPassword}>
          <FormControl id="email">
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email" value={passwordReset}  onChange={(e)=> setPasswordReset(e.target.value)}
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
                
              }} type={"submit"} >
              Request Reset
            </Button>
          </Stack>
          </form>
          <HStack alignItems={"center"} justifyContent={"space-between"} color={"blue.500"}><Link to={"/login"}>Login</Link><Link to={"/signup"}>Signup</Link></HStack>
        </Stack>
      </Flex>
    );
  }