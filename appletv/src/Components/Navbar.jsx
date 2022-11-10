import React from 'react'
import { Box, Flex, HStack, IconButton, Button, useDisclosure, useColorModeValue, Stack, Image, useColorMode,InputGroup, Input, InputLeftElement, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, ModalBody, ModalFooter } from '@chakra-ui/react';
import {  CloseIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { Link, NavLink, } from 'react-router-dom';
import Weblogo from "../Img/mytv.jpg"
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { MdOutlineManageAccounts } from "react-icons/md";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <div >
        <Box zIndex={"999"} position="sticky" bg={useColorModeValue('black', 'red.900')} px={4} as="header"  >
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'} px={[2, 3, 2]} >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
            <HStack spacing={8} alignItems={'center'}>
              <Box><NavLink to="/"><Image pl={[50,null,null]} w={200} src={Weblogo} alt='LOGO' /></NavLink></Box>
              {onOpen ? (
            <Box pb={9} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
               <Flex justify={"center"} align={"center"}> 
                <Link to="/signin"><Button leftIcon={<MdOutlineManageAccounts />} colorScheme='twitter' size='xs' variant='solid'>Sign in mob</Button></Link></Flex>
              </Stack>
            </Box>
          ) : null}
            </HStack>
            <Flex alignItems={'center'}>
              <HStack
                as={'nav'}
                spacing={2}
                display={{ base: 'none', md: 'flex' }}>

              <InputGroup >
              <InputLeftElement pointerEvents='none' children={<SearchIcon/>} />
              <Input color={"whiteAlpha.900"}  type='text' htmlSize={5} width="auto" placeholder='Search' />
              </InputGroup>
                <Link to="/signin"><Button leftIcon={<MdOutlineManageAccounts />} colorScheme='twitter' variant='solid'>Sign in</Button></Link>
                <Button onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />} </Button>
              </HStack>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={9} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                <Flex pl={9} justify={"center"} align={"center"}> <Button onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />} </Button></Flex>
      

              </Stack>
            </Box>
          ) : null}
        </Box>
      </div>


    </>
  )
}

export default Navbar
