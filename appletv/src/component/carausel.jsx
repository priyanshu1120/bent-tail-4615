
import React from 'react'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import { useNavigate } from 'react-router-dom';

const Carausel = ({data}) => {

  const navigate = useNavigate()

const handleclick =(id)=>{
  
navigate(`/${id}`)

}
 
return(
  <div className='pre-wrapper'>
    <h2 className='ppp'>Future Movies</h2>
  <div className="wrapper">
 

  <Splide
    options={ {
      perPage: 5,
      height : '90px',
      rewind : true,
      gap    : '2px',
    } }
    aria-labelledby="basic-example-heading"
    onMoved={ ( splide, newIndex ) => {
      // eslint-disable-next-line
      console.log( 'moved', newIndex );

      // eslint-disable-next-line
      console.log( 'length', splide.length );
    } }
  >
    { data?.map( slide => (
      <SplideSlide key={ slide.id }>
     <div style={{borderRadius:"7px"}}  key={slide.id} onClick={ ()=>  handleclick(slide.id)} >
      <img  src={slide.image}  style={{height:"100%" , width :"90%",borderRadius:"7px"}} 
      
      
      />
     </div>

      </SplideSlide>
    ) ) }
  </Splide>
  
  
  </div>
  </div>
 )
}

export {Carausel}