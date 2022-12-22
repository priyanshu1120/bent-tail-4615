import {  Box, Heading, HStack, Image,  Stack } from '@chakra-ui/react'
import React from 'react'
import { Footer } from '../Components/Footer'
import { SigninAdmin } from '../Components/SigninAdmin'

const SigninAdminPage = () => {
  return (
  <>
    <Heading   fontSize={'4xl'} textAlign={'center'}>Wellcome Back</Heading>
    <HStack align={"center"} justify={"center"}>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} spacing={[2,50,60]}>
          <Stack align={"center"} justify={"center"}>
              <Image w={[300,500,500]} src={"https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=2000"}/>
          </Stack>
          <Box>
             <SigninAdmin/>
          </Box>
      </Stack>
    </HStack>
    <Footer/>
  </>
  
  )
  
}

export default SigninAdminPage
