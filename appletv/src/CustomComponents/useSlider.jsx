import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import { useState } from 'react';
import { useEffect } from 'react';

const useSlider = ({ url,onclick }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(url)
            .then((r) => {
                setData(r.data);
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
          data.map(({ image }) => (
            <SplideSlide>
              <Img src={image} onClick={onclick} />
            </SplideSlide>
          ))
        }
      </Splide>
    </div>
    )
}
export { useSlider }