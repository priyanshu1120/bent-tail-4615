import React,{ useEffect, useState,  }  from 'react'
import {Flex,Box,Stack,Button, Heading, Text,  Container, VStack,  Image,} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { DELETE_DATA, GET_PRODUCTS } from '../Redux/App/action';
import { useNavigate,  } from 'react-router-dom';
import CommonDetailSlider from '../CustomComponents/CommonDetailSlider';
const AdmindataManage  = () => {
    const PRODUCTS= useSelector((state)=> state.AppReducer.products)
    const dispatch =useDispatch();
    const navigate =useNavigate();
    const handelDeletedata =(id)=>{
        console.log(id)
        dispatch(DELETE_DATA(id))  
    }
    const handleEdit =(id)=>{
       navigate(`/editdata/${id}`)
    }
    useEffect(()=>{
      if(PRODUCTS.length===0){
          dispatch(GET_PRODUCTS())
      }
  },[])


  const [watchPremiresdata,setWatchPremiresData]=useState([]);
let D=[];
useEffect(()=>{
    fetchBothdata()
},[])

const fetchBothdata = async () => {
  try {
    const res = await Promise.all([
      fetch("https://appletv-server.vercel.app/watchPremiers"),
      fetch("https://bubbly-blossom-witch.glitch.me/products")
      
    ]);
    const data = await Promise.all(res.map(r => r.json()))
    data.forEach((i)=>
    D.push(...i.data)
    )
    setWatchPremiresData(D) 
    console.log(...D,"both data")
  } catch {
    throw Error("Promise failed");
  }

};
  return (
    <>
    {PRODUCTS.length> 0  ?<Container position={"relative"} p={0} m={0} border={0}>
    <Flex 
      minH={'50vh'}
      align={'center'}
      justify={'center'}
      p={0} m={0}
   >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} >
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Admin's added Products
          </Heading>
          {/* maping----------------------------------> */}
         
          {PRODUCTS.length> 0 && PRODUCTS.map((item)=>

                    <VStack key={item.id} bg={"whiteAlpha.800"} color={"blackAlpha.900"} p={10} alignItems={"center"} justifyContent={"center"} boxShadow='md' borderRadius={5}>
                    <Image m={0} width={100} height={57} src={item.image} alt={item.title}/>
                    <VStack>
                        <Text textAlign={"left"} as={"b"} color={"blackAlpha.600"}  > {item.title}</Text>
                       <Box width={"auto"} h={30} overflow={"hidden"}> <Text textAlign={"left"} as={"b"} color={"blackAlpha.600"} > {item.description}</Text></Box>
                        <Text textAlign={"left"} as={"b"} color={"blackAlpha.600"}  >Season: {item.season}</Text>
                    </VStack>
                    <Stack pt={5} spacing={6} direction={['column', 'row']}>
                  <Box><Button
                    bg={'red.400'}
                    color={'white'}
                    rightIcon={<AiOutlineDelete/>}
                    w="full"
                    size='sm'
                    _hover={{
                      bg: 'red.500',
                    }}  onClick={()=>handelDeletedata(item.id)} >
                    Delete
                  </Button></Box>
                  <Button
                    bg={'blue.400'}
                    rightIcon={<AiOutlineEdit/>}
                    color={'white'}
                    w="full"
                    size='sm'
                    _hover={{
                      bg: 'blue.500',
                    }}
                    type="submit"  onClick={()=>handleEdit(item.id,item.title) } >
                    Edit
                  </Button>
                </Stack>
                  </VStack>
          )}</Stack>
       </Stack>
    </Flex>
    </Container>:""}
    </>
  )
}

export default AdmindataManage
