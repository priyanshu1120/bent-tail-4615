import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { Img } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const CustomSlider = ({ url }) => {
    const [data, setData] = useState([]);
    const [pathurl,setPathurl]=useState("");
    useEffect(() => {
        axios.get(url)
            .then((r) => {
                setData(r.data);
                if(url.includes("watchPremiers")){
                  setPathurl("watchPremiers");
                }
            });
    }, [])
    return (
        <div>
      <Splide options={{
        perPage: 5,
        height: '150px',
        rewind: true,
        gap: '10px',
      }}>
        {
          data.map(({ image,id }) => (
            <SplideSlide>
              <Link to={`/${pathurl}/${id}`}>
              <Img src={image} />
              </Link>
            </SplideSlide>
          ))
        }
      </Splide>
    </div>
    )
}
export { CustomSlider }