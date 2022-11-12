import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box,  Container,  Stack,  Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'


const Faq = () => {

  return (
    <Box p={50} 
    bg={useColorModeValue('blackAlpha.800', 'blackAlpha.800')}
    color={useColorModeValue('white', 'white')}>
      <Text pb={5} textAlign={"center"} fontSize={["2xl","5xl","5xl"]}>Questions? & Answers</Text>
      <Container >
      <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'black', color: 'white' }}>
        <Box flex='1' textAlign='left'>
          What is My Tv+?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Apple TV+ is a streaming service from Apple. It features exclusive Apple Original shows and movies from some of the industry's top talent, with new premieres arriving each month.  Browse all of the available content on Apple TV+ inside the Apple TV app on the “Apple TV+” tab or here on
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'black', color: 'white' }}>
        <Box flex='1' textAlign='left'>
          What dose My Tv includes?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Apple TV+ includes Apple Original films and series—which are original shows and movies made exclusively for Apple. It also includes free access for anyone to watch Friday Night Baseball, provided through Apple TV+ in partnership with MLB (Major League Baseball). New shows and movies are being added to the streaming service often, so browse inside the Apple TV app or visit 
    </AccordionPanel>
  </AccordionItem>
</Accordion>
</Container>
<Box 
     
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
              <FaTwitter />
              <FaYoutube />
              <FaInstagram />
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Faq
