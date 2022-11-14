import React from 'react'
import { Carausel } from './carausel'
import { useState } from 'react';
import axios from "axios"
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';

export const Future = () => {
    const [data,setData] = useState([])
    const params = useParams()
    let category =params.category
    const Getdata =()=>{
        axios.get(`https://appletv-server.vercel.app/${category}`)
    .then((res)=>{setData(res.data)})
    .catch((err)=>{console.log(err)})
    }
    
    useEffect(()=>{
    Getdata()
    },[])

  return (
   <Carausel  data ={data}  />
  )
}
