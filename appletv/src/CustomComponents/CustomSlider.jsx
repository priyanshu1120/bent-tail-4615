import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import {  useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { Img } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CustomSlider = ({ url }) => {
  const [data, setData] = useState([]);
  const [pathurl, setPathurl] = useState("");
  const [size, setSize] = useState(window.innerWidth);
  const [perPage, setPerPage] = useState(5);
  const updateSize = () =>
    setSize(window.innerWidth);
  useEffect(() => (window.onresize = updateSize), []);//1320,1080
  useEffect(() => {
    size > 1320 ? setPerPage(5) : size <= 1320 && size > 1080 ? setPerPage(3) : setPerPage(1)
  }, [size])
  useEffect(() => {
    axios.get(url)
      .then((r) => {
        setData(r.data);
        if (url.includes("watchPremiers")) {
          setPathurl("watchPremiers");
        }
        else if (url.includes("latestOriginals")) {
          setPathurl("latestOriginals");
        }
        else if (url.includes("mostPopular")) {
          setPathurl("mostPopular");
        }
        else if (url.includes("futureRelease")) {
          setPathurl("futureRelease");
        }
        else if (url.includes("comedy")) {
          setPathurl("comedy");
        }
        else if (url.includes("drama")) {
          setPathurl("drama");
        }
        else if (url.includes("allFeatureFilms")) {
          setPathurl("allFeatureFilms");
        }
        else if (url.includes("allDramaFilms")) {
          setPathurl("allDramaFilms");
        }
        else if (url.includes("watchPremiers")) {
          setPathurl("allComedyFilms");
        }
        else if (url.includes("funForAll")) {
          setPathurl("funForAll");
        }
      });
  }, [])
  return (
    <div>
      <Splide options={{
        perPage: perPage,
        height: '150px',
        rewind: true,
        gap: '10px',
      }}>
        {
          data.map(({ image, id }) => (
            <SplideSlide key={id}>
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