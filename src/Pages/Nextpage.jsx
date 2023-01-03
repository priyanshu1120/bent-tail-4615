import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Box, Button, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { Cast } from "../Components/cast";
import { Carausel } from "../Components/carausel";
import tv from "../Assets/video/tv.mp4";
import { SinglePageFooter } from "../Components/SinglePageFooter";

export const Nextpage = () => {
  const base_url = process.env.REACT_APP_BASE_URL;
  const [singlepagedata, setSinglepagedata] = useState({});
  const navigate=useNavigate();
  const params = useParams();
  let id = params.id;
  let category = params.category;

  const SingleData = () => {
    axios
      .get(`${base_url}/${category}/${id}`)
      .then((res) => {
        setSinglepagedata(res.data);
      })
      .catch((err) => {
        console.log(err);
        navigate("*")
      });
  };
  useEffect(() => {
    SingleData();
  }, [SingleData]);

  const style = {
    height: "30px",
    width: "180px",
    background: "white",
    borderRadius: "7px",
    color: "black",
    borderColor: "transparent",
    fontWeight: "600",
  };

  return (
    <Box>
      <Box
        style={{
          border: "1px solid transparent",
          position: "absolute",
          marginLeft: "100px",
          marginTop: "40px",
          color: "white",
        }}
      >
        <Text zIndex={10}>{singlepagedata.title}</Text>
      </Box>
      {singlepagedata.video ? (
        <iframe
          title="video"
          style={{ height: "500px", width: "100%", padding: "10px" }}
          src={tv}
          allowFullScreen
        />
      ) : (
        <Image src={singlepagedata.image} w={"100%"} />
      )}

      <VStack
        display="flex"
        margin="auto"
        direction="column"
        mr="50%"
        position="absolute"
        mt="-140px"
        ml="50px"
      >
        <Button style={style}>Play Free Episode</Button>
        <Button style={style}>Accept 3 Months Free</Button>
      </VStack>

      <Stack>
        <Box
          height="25px"
          width="auto"
          border="1px solid transparent"
          ml="250px"
          position="absolute"
          mt="-100px"
          color="white"
        >
          S1 E1 : {singlepagedata.title}
        </Box>

        <Box>
          <Carausel data={singlepagedata.episode} />
        </Box>

        <Box>
          <Cast id={id} />
        </Box>
      </Stack>

      <Box border="1px solid transparent " backgroundColor="#f0f0f3">
        <SinglePageFooter />
      </Box>
    </Box>
  );
};
