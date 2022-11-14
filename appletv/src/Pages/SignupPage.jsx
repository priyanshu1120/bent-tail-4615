import {  Flex, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Footer } from '../Components/Footer'
import { Signup } from '../Components/Signup'

const SignupPage = () => {
  return (
    <>
    <Flex 
     m={"auto"}  alignItems={"center"} justifyContent={"space-evenly"}  width="full" height={"full"} >
        <Image w={500} src={"https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7895.jpg?w=2000"}/>
        <Signup/>
    </Flex>
    <Footer/>
    </>
  )
}

export default SignupPage
