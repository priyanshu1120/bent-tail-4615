import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Carausel2 } from './carosel2'
export const Cast = ({id}) => {
    const [data,setData] = useState([])
    
    const Getdata =()=>{
        axios.get(`https://appletv-server.vercel.app/futureRelease/${id}`)
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
