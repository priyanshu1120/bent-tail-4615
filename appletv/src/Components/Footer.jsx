import {
  Box,
  chakra,
  Container,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {  NavLink, } from 'react-router-dom';
import Weblogo from "../Img/mytv.jpg"
import { BiMobileLandscape } from "react-icons/bi"
import { FcIpad } from "react-icons/fc" 
import { RiMacbookLine } from "react-icons/ri" 
import { MdAirplay } from "react-icons/md"
import { GiConsoleController } from "react-icons/gi"

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer =()=> {
  return (
    <Box
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
          <Text>Watch My TV+ here or anywhere </Text>
          <Text>Find My TV+ on the My TV app,available on Appel devices,smart TVs, and more.</Text>
          <Box>
            <BiMobileLandscape/>
            <FcIpad/>
            <RiMacbookLine/>
            <MdAirplay/>
            <GiConsoleController/>
          </Box>
        </Box>
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'}>Home</Link>
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Blog</Link>
          <Link href={'#'}>Contact</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2022 My TV+. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}