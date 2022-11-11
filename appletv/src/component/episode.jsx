import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Carausel } from './carausel'

export const Episode = ({data}) => {

const params = useParams()
    let category =params.category
// const Episodedata=()=>{
//     axios.get(`https://appletv-server.vercel.app/${category}/${id}`)
//     .then((res)=>{setData(res.data)})
//     .catch((err)=>console.log(err))
// }


useEffect(()=>{
    // Episodedata()
    // console.log(data)
},[])

  return (
    <div>
      
      {/* {
        data.length>0 && data.map((ele)=>(
          <h1>{ele.episode.time}</h1>
        ))
      } */}
<Carausel  data ={data} />
    </div>
  )
}
