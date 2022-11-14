import {  Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Footer } from '../Components/Footer'
import { SignupAdmin } from '../Components/SignupAdmin'

const SignupAdminPage = () => {
  return (
    <>
    <SimpleGrid column={[1,2,2]} 
     m={"auto"}  alignItems={"center"} justifyContent={"space-evenly"}  width="full" height={"full"} >
        <Image w={500} src={"https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7895.jpg?w=2000"}/>
        <SignupAdmin/>
    </SimpleGrid>
    <Footer/>
    </>
  )
}

export default SignupAdminPage
