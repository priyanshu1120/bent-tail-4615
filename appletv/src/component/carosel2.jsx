
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import { useNavigate, useParams } from 'react-router-dom';

const Carausel2 = ({data}) => {

  const navigate = useNavigate()

const handleclick =(id)=>{
navigate(`/${id}`)

}
const params = useParams()
    let category =params.category

return(
  <div className='pre-wrapper'>
    <h2 className='ppp'>{category} Movies</h2>
  <div className="wrapper">
 

  <Splide
    options={ {
      perPage: 5,
      height : '200px',
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
     <div style={{height :"100px" , width :"100px", border :"1px solid transparent"}}  key={slide.id} onClick={ ()=>  handleclick(slide.id)} >
      <img  src={slide.image}  style={{height:"100%" , width :"100%" , borderRadius:"50%"}}/>
      
      <h3 >{slide.name}</h3>
      <h3 >{slide.subname}</h3>
     </div>
    
      </SplideSlide>
        
      

    ) ) }
  </Splide>
  
  
  </div>
  </div>
 )
}

export {Carausel2}