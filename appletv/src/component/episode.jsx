import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Carausel } from './carausel'

export const Episode = ({id}) => {

const[data,setData] = useState()

const Episodedata=()=>{
    axios.get(`https://appletv-server.vercel.app/futureRelease/${id}`)
    .then((res)=>{setData(res.data)})
    .catch((err)=>console.log(err))
}

console.log(data?.episode)

useEffect(()=>{
    Episodedata()

},[])

  return (
    <div>
<Carausel  data ={data?.episode} />
    </div>
  )
}
