import { Box,Container,Flex, Image,SimpleGrid,Stack,Text,useColorModeValue,VStack,} from '@chakra-ui/react';
import {  NavLink, } from 'react-router-dom';
import Weblogo from "../Img/mytv.jpg"
import { BiMobileLandscape } from "react-icons/bi"
import {  RiMacbookLine } from "react-icons/ri" 
import { MdAirplay } from "react-icons/md"
import { GiConsoleController } from "react-icons/gi"
import { FiMonitor } from "react-icons/fi"
import { CiStreamOn } from "react-icons/ci"
import {  TbDeviceMobileRotated } from "react-icons/tb"
export const Footer =()=> {
  return (
    <Box mt={10} pt={50} borderTopRightRadius={"25px"}
    borderTopLeftRadius={"25px"}
      bg={useColorModeValue('black', 'black')}
      color={useColorModeValue('white', 'white')}>
      <Container 
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <Box><NavLink to="/"><Image overflow={"hidden"} h={10} pl={[50,null,null]} w={"auto"} src={Weblogo} alt='LOGO' /></NavLink></Box>
        <Box>
          <Text textAlign={"center"} fontSize={["2xl","5xl","5xl"]}  >Watch My TV+ here or anywhere </Text>
          <Text textAlign={"center"} fontSize={["lg","2xl","2xl"]}>Find My TV+ on the My TV app,available on Appel devices,smart TVs, and more.</Text>
          <Flex alignItems={"center"} justifyContent={"center"}>
          <SimpleGrid as='abbr' columns={[2,4,4]} spacing={10}>
          <VStack> <BiMobileLandscape size={90}/><Text >Mobile Phone</Text></VStack>
            <VStack> <TbDeviceMobileRotated  size={90}/><Text >iPad</Text></VStack>
            <VStack><RiMacbookLine size={90}/><Text >Laptop</Text></VStack>
            <VStack><MdAirplay size={90}/><Text >AirPlay</Text></VStack>
           </SimpleGrid >
          </Flex>
        </Box>
        <VStack alignItems={"center"} justifyContent={"center"}>
        <Text fontSize={["2xl","3xl","3xl"]}>See it on you big screen</Text>
          <SimpleGrid pl={[null,20,20]}  columns={[2,4,4]} spacing={5}>
          <VStack><CiStreamOn size={60}/><Text as='b'>Streamin Devices</Text><VStack Text color={"gray.500"}><>Roku</><Text>Fire TV</Text><Text>Apple Tv</Text></VStack></VStack>
          <VStack ><FiMonitor  size={60}/><Text as='b' >Smart TVs</Text><VStack color={"gray.500"}><Text>Samsung</Text><Text>Sony</Text><Text>LG</Text></VStack></VStack>
         <VStack><GiConsoleController size={60}/><Text as='b'> Gaming Console</Text><VStack Text color={"gray.500"}><Text>PlayStation</Text><Text>Xbox</Text></VStack></VStack>
        </SimpleGrid>
        </VStack>
        <Text textAlign={"center"} fontSize='xs'  >Device availability varies by country or region. </Text>
      </Container>
    </Box>
  );
}