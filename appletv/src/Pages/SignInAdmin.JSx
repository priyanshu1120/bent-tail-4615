import {  Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Footer } from '../Components/Footer'
import { SigninAdmin } from '../Components/SigninAdmin'

const SigninAdminPage = () => {
  return (
    <>
    <SimpleGrid column={[1,2,2]}  m={"auto"}  alignItems={"center"} justifyContent={"space-evenly"} width="full" height={"full"} >
        <Image w={400} src={"https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=2000"}/>
        <SigninAdmin/>
    </SimpleGrid>
    <Footer/>
    </>
  )
}

export default SigninAdminPage
