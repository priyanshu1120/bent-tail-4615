import {  Box,  Center,  Heading, HStack, Image,  Stack } from '@chakra-ui/react'
import React from 'react'
import { Footer } from '../Components/Footer'
import { Signup } from '../Components/Signup'

const SignupPage = () => {
  
  return (
    <>
      <Heading fontSize={'4xl'} textAlign={'center'}>Sign Up with us</Heading>
      <HStack align={"center"} justify={"center"} h={"auto"}>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} spacing={[2,10,30]}>
        <Center>
        <Image
        w={[300,450,500,500]}
        h={[300,450,500,500]}
        src={"https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7895.jpg"}/>
        </Center>
        <Box>
          <Signup/>
        </Box>
      </Stack>
      </HStack>
      <Footer/>
    </>
  )
}

export default SignupPage
