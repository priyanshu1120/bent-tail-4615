import React, { useEffect, useState } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import { useNavigate, useParams } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";

const Carausel = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/${id}`);
  };
  const [size, setSize] = useState(window.innerWidth);
  const [perPage, setPerPage] = useState(5);
  const updateSize = () => setSize(window.innerWidth);
  useEffect(() => (window.onresize = updateSize), []); //1320,1080
  useEffect(() => {
    size > 1320
      ? setPerPage(5)
      : size <= 1320 && size > 1080
      ? setPerPage(3)
      : setPerPage(1);
  }, [size]);
  const params = useParams();
  let id = params.id;
  let category = params.category;

  return (
    <div className="pre-wrapper">
      <h2 className="ppp">{category} Movies</h2>
      <div className="wrapper">
        <Splide
          options={{
            perPage: perPage,
            rewind: true,
            gap: "20px",
          }}
          onMoved={(splide, newIndex) => {
            // eslint-disable-next-line
            console.log("moved", newIndex);

            // eslint-disable-next-line
            console.log("length", splide.length);
          }}
        >
          {data?.map((slide) => (
            <SplideSlide key={slide.id}>
              <div
                style={{ borderRadius: "7px" }}
                key={slide.id}
                onClick={() => handleClick(slide.id)}
              >
                <img
                  src={slide.image}
                  style={{ height: "100%", borderRadius: "7px" }}
                />
                <Text fontSize={"13px"}>Episode {slide.episode}</Text>
                <Text fontSize={"14px"} fontWeight="bold" w={"200px"}>
                  {slide.title}
                </Text>
                <Text fontSize={"13px"} w={"200px"}>
                  {slide.description}
                </Text>
                <Text fontSize={"13px"} mt={"10px"}>
                  {slide.time} {slide.date}
                </Text>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
        
    </div>
  );
};

export { Carausel };
