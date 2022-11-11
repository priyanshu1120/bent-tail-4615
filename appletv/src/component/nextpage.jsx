import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { background, Box, Button, Image, VStack } from "@chakra-ui/react"
import { Episode } from './episode'
import { Cast } from './cast'
import { Carausel } from './carausel'
import "../Components/herovideo.css"
export const Nextpage = () => {
    const [singlepagedata, setSinglepagedata] = useState({})

    const params = useParams()
    let id = params.id
    let category = params.category

    const SingleData = () => {
        axios.get(`https://appletv-server.vercel.app/${category}/${id}`)
            .then((res) => { setSinglepagedata(res.data) })
            .catch((err) => { console.log(err) })
    }


    console.log(singlepagedata.episode)
    useEffect(() => {
        SingleData()

    }, [])
    const style = {
        height: "30px",
        width: "150px",
        background: "white",
        borderRadius: "7px",
        color: "black",
        borderColor: "transparent",
        fontWeight: "600"
    }
    const src = "tv.mp4"
    return (
        <Box  >
            <Box style={{
                border: "1px solid transparent", position: "absolute", marginLeft: "100px",
                marginTop: "40px", color: "white"
            }}
            ><h2>{singlepagedata.title}</h2></Box>
            {/* {
    singlepagedata.video ?  <video  className="base-img"   autoPlay  playsinline muted preload="auto">
    <source src={src} type="video/mp4"  />
  </video>  :  <Image src={singlepagedata.image} w={"100%"}  />     
} */}
            {/* <video className="base-img" autoPlay playsinline muted preload="auto">
                <source src={src} type="video/mp4" />
            </video> */}
            <Image src={singlepagedata.image} w={"100%"} />


            <VStack display="flex" margin="auto" direction='column'
                mr="50%" position="absolute" mt="-100px" ml="70px"

            >

                <Button style={style} >Play Free Episode</Button>
                <Button style={style} >Accept 3 Months Free</Button>
            </VStack>


            <Box height="25px" width="auto" border="1px solid transparent" ml="250px" position="absolute"
                mt="-100px" color="white"
            >
                S1 E1 :  {singlepagedata.title}
            </Box>


            <Box>
                <Carausel data={singlepagedata.episode} />
            </Box>

            <Box>
                <Cast id={id} />



            </Box>
        </Box>



    )
}
