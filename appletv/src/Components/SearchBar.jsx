import { SettingsIcon } from '@chakra-ui/icons';
import { Box, HStack, Image, Text } from '@chakra-ui/react';
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
    <>
    {!!suggestion.length &&(
    <Box bg={"white"} zIndex={15} overflow={"auto"} border={"1px solid red"} w={200} h={45}>
    {suggestion.map((item,i)=>
       <Link key={item.id} to={`/watchPremiers/${item.id}/${item.title}/movie`}> 
            <HStack h={10} gap={3}>
                <Text as={"b"} color={"black"}>{item.title}</Text>
                <Image alignContent={"flex-end"} src={item.image} w={16} h={9}  />
            </HStack> 
      </Link>
    )}
     </Box>
 )} 
  </>
  )
}

export default SearchBar
