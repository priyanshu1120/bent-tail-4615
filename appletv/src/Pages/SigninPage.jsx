import {  Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Footer } from '../Components/Footer'
import { Signin } from '../Components/Signin'

const SigninPage = () => {
  return (
    <>
    <SimpleGrid column={[1,2,2]}  alignItems={"center"} justifyContent={"space-evenly"} backgroundImage={
        'url(https://storyset.com/illustration/reset-password/cuate)'
      } width="full" height={"full"} >
        <Image w={400} src={"https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=2000"}/>
        <Signin/>
    </SimpleGrid>
    <Footer/>
    </>
  )
}

export default SigninPage
