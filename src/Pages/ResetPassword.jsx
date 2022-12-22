import {  Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Footer } from '../Components/Footer'
import { Reset } from '../Components/Reset'
const ResetPassword = () => {
  return (
    <>
    <SimpleGrid column={[1,2,2]}  m={"auto"}  alignItems={"center"} justifyContent={"space-evenly"} backgroundImage={
        'url(https://png.pngtree.com/thumb_back/fh260/background/20190727/pngtree-hexagonal-minimalist-white-paper-cut-wind-business-background-image_285716.jpg))'
      } width="full" height={"full"} >
        <Image w={400} src={"https://img.freepik.com/free-vector/reset-password-concept-illustration_114360-7886.jpg?w=2000"}/>
        <Reset/>
    </SimpleGrid>
    <Footer/>
    </>
  )
  
}

export default ResetPassword
