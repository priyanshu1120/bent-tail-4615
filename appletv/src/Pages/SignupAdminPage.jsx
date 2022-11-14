import {  Box, Flex, Heading, HStack, Image,  Stack } from '@chakra-ui/react'
import React from 'react'
import { Footer } from '../Components/Footer'
import { SignupAdmin } from '../Components/SignupAdmin'

const SignupAdminPage = () => {
  return (
    <>
  

    <Heading   fontSize={'4xl'} textAlign={'center'}>Sign Up to become Admin</Heading>
    <HStack align={"center"} justify={"center"}>
     <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} spacing={[2,50,60]}>
       <Stack align={"center"} justify={"center"}> <Image w={[300,500,500]} src={"https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7895.jpg?w=2000"}/></Stack>
        <Box><SignupAdmin/></Box>
    </Stack>
    </HStack>
    <Footer/>

    <Footer/>
    </>
  )
}

export default SignupAdminPage
