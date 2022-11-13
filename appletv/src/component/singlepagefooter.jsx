import { Box} from '@chakra-ui/react'
import {  Modals } from './Modal'

const SinglepageFooter =()=>{

return(
    <div  style={{border:"1px solid transparent" , width :"100%" , margin:"auto", padding:"0 10px 0 10px " }}  >
<h2 style={{fontWeight:"500"}}>About</h2>

<Box border="1px solid transparent" borderRadius="7px"  mb="10px"   w = {{ sm:"100%" ,md:"60%"}} backgroundColor="white" >
<h1 style={{fontWeight:"700"}} >Slow Horse</h1>
This quick-witted spy drama follows a dysfunctional team of MI5 agents—and their obnoxious boss, the notorious Jackson Lamb—as they navigate the espionage < Modals />


</Box>

<hr style={{borderBlockColor:"black"}}></hr>

        {/* main div  */}
<Box display="flex" flexDirection={{sm:"column", md:"row" ,lg:"row" }} gap="35px" mt="20px" >

<Box border="1px solid  transparent "  w = {{   sm:"100%" ,md:"30%" ,lg:"30%" }} h="300px" >
  <h1  style={{fontWeight:"700"}}>Information</h1>
  
  <h2 style={{fontWeight:"500"}}>Genre</h2>
  <p>Thriller</p>

  <h2 style={{fontWeight:"500"}}>Release</h2>
  <p>2022</p>
  
  <h2 style={{fontWeight:"500"}}>Released</h2>
  <p>A</p>

  <h2>Region of king</h2>
  <p>United Kingdom</p>
</Box>

<Box border="1px solid transparent"   w = {{   sm:"100%" ,md:"30%" ,lg:"30%"}} h="300px">
<h1 style={{fontWeight:"700"}}>Language</h1>
 
<h2 style={{fontWeight:"500"}}>Original Audio</h2>
  <p>English</p>

  <h2 style={{fontWeight:"500"}}>Audio</h2>
  <p>English (AD, Dolby Atmos, Dolby 5.1, AAC), and 9 more...</p>
  
  <h2 style={{fontWeight:"500"}}>Subtitle</h2>
  <p>English (AD, Dolby Atmos, Dolby 5.1, AAC)</p>

  <h2 style={{fontWeight:"500"}}>Region of king</h2>
  <p>United Kingdom</p>
</Box>

<Box border="1px solid transparent"   w = {{  sm:"100%" ,md:"30%",lg:"30%"}}>
<h1 style={{fontWeight:"700"}}>Accessiblity</h1>
  

<h2 style={{fontWeight:"500"}}>CC</h2>
  <p>Closed captions refer to subtitles in available languages with the addition of relevant non-dialogue information.</p>

  
  
  
  <h2 style={{fontWeight:"500"}}>AD</h2>
  <p>Audio descriptions (AD) refer to a narration track describing what is happening on screen to provide context for those who are blind or have low vision.</p>
</Box>

</Box>



    </div>
)

}

export {SinglepageFooter}
