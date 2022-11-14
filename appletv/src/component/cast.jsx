import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Carausel2 } from './carosel2'
export const Cast = () => {
    const [data,setData] = useState([])
    const params = useParams()
    let id =params.id
    let category =params.category
    const Getdata =()=>{
        axios.get(`https://jewel-sneaky-dingo.glitch.me/${category}/${id}`)
    .then((res)=>{setData(res.data)})
    .catch((err)=>{console.log(err)})
    }
    
    useEffect(()=>{
    Getdata()
    },[])


  return (
    <div>
<Carausel2  data={data?.cast}  />

    </div>
  )
}
