import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CarouselTwo } from './CarouselTwo'

export const Cast = () => {
  const base_url=process.env.REACT_APP_BASE_URL;
    const [data,setData] = useState([])
    const params = useParams()
    let id =params.id
    let category =params.category
    const Getdata =()=>{
        axios.get(`${base_url}/${category}/${id}`)
    .then((res)=>{setData(res.data)})
    .catch((err)=>{console.log(err)})
    }
    useEffect(()=>{
    Getdata()
    },[])
  return (
    <div>
<CarouselTwo data={data?.cast}  />

    </div>
  )
}
