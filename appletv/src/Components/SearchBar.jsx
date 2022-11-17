import { Box, Flex, HStack, Image, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {  GET_PRODUCT_SEARCH } from '../Redux/App/action';

const SearchBar = ({query,setQuary}) => {
   
    const [suggestion,setSuggestion]=useState([]);
    const [active,setActiveOption]=useState(0);
    const dispatch =useDispatch();
    const PRODUCTS=useSelector((state)=> state.AppReducer.NavbarSearch)

    useEffect(()=>{
        if(PRODUCTS.length>=0){
            dispatch(GET_PRODUCT_SEARCH())
        }
    },[])

    useEffect(()=>{
        if(query=== ""){
             setSuggestion([]);  
        }
        else{
            const optimiseddQuery = query.trim().toLowerCase();
            let newSuggestion =PRODUCTS.filter((item)=>{
                 return  item.title.trim().toLowerCase().indexOf(optimiseddQuery) !== -1 
                 ?true:
                 false ;
            })
            console.log(suggestion,"suggestion-searchbar.jsx-line:35")
            setSuggestion(newSuggestion);
        }
    },[query])

  return (
    <Box mt={20} px={40}>
    {!!suggestion.length &&(
    <Box bg={"white"} zIndex={15} position={"absolute"} overflow={"auto"} border={"3px solid #0073b4"} w={450} h={223}>
    {suggestion.map((item,i)=>
       <Link key={item.id} to={`/watchPremiers/${item.id}/${item.title}/movie`}> 
            <HStack  lineHeight={"15px"} mt={"3px"} bg={"RGBA(0, 0, 0, 0.64)"} h={10} >

              <Flex flex={5}> <Text px={2} isTruncated as={"b"} color={"black"}>{item.title}</Text></Flex> 
              <Flex flex={1}><Image alignContent={"flex-end"} src={item.image} w={16} h={9}  /></Flex>

            </HStack> 
      </Link>
    )}
     </Box>
 )} 
  </Box>
  )
}

export default SearchBar
