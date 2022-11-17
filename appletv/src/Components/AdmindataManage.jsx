import React,{ useEffect, useState,  }  from 'react'
import {Flex,Box,Stack,Button, Heading, Text,  Container, VStack,  Image,} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { DELETE_DATA, DELETE_DATA_TO_WATCH_PRE, GET_PRODUCTS } from '../Redux/App/action';
import { useNavigate,  } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { UserAuth } from '../Utils/firebase';
import { toast } from 'react-toastify';
const AdmindataManage  = () => {
  const [displayName,setDisplayName]=useState('');
    const PRODUCTS= useSelector((state)=> state.AppReducer.products)
    const dispatch =useDispatch();
    const navigate =useNavigate();
    const handelDeletedata =(id)=>{
        dispatch(DELETE_DATA(id))  
        dispatch(DELETE_DATA_TO_WATCH_PRE(id))
        toast.success("Content Deleted Successfully")
        
    }
    const handleEdit =(id,title)=>{
       navigate(`/${displayName}/${id}/edit`)
    }
    useEffect(()=>{
      if(PRODUCTS.length>=0){
          dispatch(GET_PRODUCTS())
      }
  },[])
  useEffect(()=>{
    onAuthStateChanged(UserAuth, (user) => {
      if (user) {
        setDisplayName(user.displayName)
      } else {
        setDisplayName('')
      }
    });
  },[])

  return (
    <>
    {PRODUCTS.length> 0  ?<Container position={"relative"} p={0} m={0} border={0}>
    <Flex 
      minH={'50vh'}
      align={'center'}
      justify={'center'}
      p={0} m={0}
   >
      <Stack  mx={'auto'} maxW={'lg'} >
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Admin's added Products
          </Heading>
          {/* maping----------------------------------> */}
          
         <Box border={"1px solid red"} overflow="auto" h={300} mt={5}  
  sx={{
    '&::-webkit-scrollbar': {
      width: '16px',
      borderRadius: '8px',
      backgroundColor: `rgba(0, 0, 0, 0.05)`,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: `rgba(0, 0, 0, 0.05)`,
    },
  }}>
          {PRODUCTS.length> 0 && PRODUCTS.map((item)=>
  item.title && item.image && item.season&& item.season?
                  <VStack  key={item.id} bg={"whiteAlpha.800"} color={"blackAlpha.900"} p={10} alignItems={"center"} justifyContent={"center"} boxShadow='md' borderRadius={5}>
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
                    }}  onClick={()=>handelDeletedata(item.id,item.title)} >
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
                  :""
          )}</Box></Stack>
          
          {PRODUCTS.length>2?<Text mt={-20} p={0} as={"b"} textAlign={"center"} color={"red.500"} fontSize={"2xs"}>Scroll Down</Text>:""}
          <Text as={"b"} textAlign={"center"} color={"blackAlpha.900"} fontSize={"2xl"}>Total Content available: {PRODUCTS.length }</Text>
       </Stack>
    </Flex>
    </Container>:
    <Image src='https://media.istockphoto.com/id/841884438/vector/empty-shopping-bag-icon-cute-disappointed-shopping-bag-flat-thin-line-design-isolated-vector.jpg?s=612x612&w=0&k=20&c=q4-NaJiL4BG8kIEIsU5N0Wgy_9zv6_dJutV1qfs1_x4=' alt="You Din't added any thing yet" />}
    
    </>
  )
}

export default AdmindataManage
