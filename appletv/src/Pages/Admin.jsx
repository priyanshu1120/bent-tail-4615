
import {  SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { AdminAddcard } from '../Components/AdminAddcard'
import AdmindataManage from '../Components/AdmindataManage'
export const Admin = () => {
  return (
    <><Text fontSize={'4xl'} textAlign={'center'}>Admin's admin panel</Text>
    <SimpleGrid columns={[1,2,2]} m={"auto"}  alignItems={"center"} justifyContent={"space-evenly"} backgroundImage={
        'url(https://img.freepik.com/premium-photo/abstract-white-flower-close-up-full-screen-as-background_476363-1084.jpg?w=2000)'
      } width="full" height={"full"} >
        <AdminAddcard/>
        <AdmindataManage/>
    </SimpleGrid>
    </>
  )
}

