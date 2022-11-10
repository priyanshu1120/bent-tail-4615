import React from 'react'
import { Carausel } from './carausel'
import { useState } from 'react';
import axios from "axios"
import { useEffect } from 'react'

export const Future = () => {
    const [data,setData] = useState([])
    
    const Getdata =()=>{
        axios.get("https://appletv-server.vercel.app/futureRelease")
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
