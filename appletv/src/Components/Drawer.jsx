import {  MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Box, Button, Center, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex,  HStack,  Spacer,  Stack,  Text,  Tooltip, useColorMode, useColorModeValue, useDisclosure, VStack } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { RiAdminLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { UserAuth } from "../Utils/firebase";
import { toast } from "react-toastify";
import { GiPowerButton } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";
import { BsBoxArrowInUpRight, BsFillCreditCard2FrontFill } from "react-icons/bs";

export const  Drawers =()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode();
    const [diplayName,setDisplayName]=useState('');
    const [avatar,setAvatar] =useState(true);
    const [userEmail,setUserEmail]=useState('')
    const[userPhoto,setUserPhoto]=useState('')

    const navigate =useNavigate();
    const firstField = useRef()
    const HandleLogOut =()=>{
        signOut(UserAuth).then(() => {
        toast.success("Logout Sucessfull")
        navigate("/")
      }).catch((error) => {
        toast.error(error.massege)
      })};
      useEffect(()=>{
        onAuthStateChanged(UserAuth, (user) => {
          if (user) {
            setAvatar(true)
            setDisplayName(user.displayName)
            setUserEmail(user.email)
            setUserPhoto(user.photoURL)
          } else {
            setDisplayName('')
            setAvatar(false)
          }
        });
      },[])
    return (
      <Box maxH={3}  bg={useColorModeValue('black', 'red.900')}>
        <Button variant={'ghost'}  pb={5} bg={"transparent"}onClick={onOpen}    _hover="{ backgroundColor: transparent}">
        
        <Button  
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>{avatar?<Avatar
                    size={'sm'}
                    src={userPhoto}
                  />:<Button ><RiAdminLine color='black' size={30}/></Button>}
                </Button>
        </Button>
        <Drawer  variant="secondary" th
          isOpen={isOpen}
          placement='right'
          initialFocusRef={firstField}
          onClose={onClose}
          
        >
          <DrawerOverlay />
          <DrawerContent>
          <DrawerCloseButton pl={2} color={"red.300"} />
            <DrawerHeader borderBottomWidth='1px'>
             <Text textAlign={"center"}>Account and Profile setings</Text> 
            </DrawerHeader>
  
            <DrawerBody>
              <Stack spacing='24px'>
                    
                        {avatar?<VStack><Center><Avatar size={'2xl'}src={userPhoto}/></Center>
                        <Center><Text as={"b"} fontSize="3xl">{diplayName}</Text> </Center>
                        </VStack>:
                        <VStack>
                            <Box flex='1'color={"blackAlpha.700"}  as={"b"} textAlign="left">For Users</Box><Spacer/>
                           <Link to={"/signup"}> <Button colorScheme='blue' size={"lg"} variant='outline'>Sign Up as a User</Button></Link><Spacer/>
                           <Link to={"/login"}> <Button colorScheme='blue' size={"lg"} variant='outline'>Sign In as a User</Button></Link>
                           <Spacer/>
                           <Spacer/>
                           <Divider/>
                            <Box flex='1' color={"blackAlpha.700"} as={"b"} textAlign="left">For Admins</Box>
                            <Spacer/>
                            <Spacer/>
                           <Link to={"/adminsignup"}> <Button colorScheme='green' size={"lg"} variant='outline'>SignUp as a Admin</Button></Link><Spacer/>
                           <Link to={"/adminlogin"}> <Button colorScheme='green' size={"lg"} variant='outline'>Sign In as a Admin</Button></Link>
                        </VStack>}
                  {avatar?  <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                <HStack> <Button p={0} m={0} color={"blackAlpha.700"} bg="transparent"><RiAdminLine  size={18}/></Button> <Text pr={2} as={"b"} fontSize="lg" color={"blackAlpha.700"} >Profile Information</Text></HStack>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <VStack>
                                <Text textAlign={"left"} as={"b"} color={"blackAlpha.600"}>Name :{diplayName} </Text>
                                <Spacer/>
                                <Text textAlign={"left"} as="b" color={"blackAlpha.600"}>Email id: {userEmail}</Text>
                                </VStack>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                              <HStack><Button p={0} color={"blackAlpha.700"} bg="transparent"><FiSettings  size={16}/></Button>  <Text pr={2} as={"b"} fontSize="lg" color={"blackAlpha.700"} >Account Settings</Text></HStack>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            <VStack>
                                <Link to={"/reset-password"} ><Button rightIcon={<BsBoxArrowInUpRight/>} color={"teal.500"} variant={"outline"}><Text> Forget Password? </Text></Button></Link><Spacer/>
                                <Link to={"/update-email"} ><Button rightIcon={<BsBoxArrowInUpRight/>} color={"teal.500"} variant={"outline"}><Text>Update Email Id</Text></Button></Link><Spacer/>
                            </VStack>
                            </AccordionPanel>
                        </AccordionItem>
                        </Accordion>:""}
                        <HStack  alignItems={"center"} justifyContent={"center"}><Text as={"b"} fontSize={"1xl"} >Change Theme</Text> <Button onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />} </Button></HStack>
                        <Divider/>
                        <Link to={"/payment"}><HStack  alignItems={"center"} justifyContent={"center"}><Text as={"b"} color={"blackAlpha.800"} fontSize={"lg"} >Subscripe our plan</Text>
                         <Button p={0} m={0} bg={"transparent"} color={"blackAlpha.700"}><BsFillCreditCard2FrontFill size={20}/></Button></HStack></Link> <Divider/>
                        {avatar?<HStack   alignItems={"center"} justifyContent={"center"}><Text as={"b"} color={"red.500"} fontSize={"3xl"} >Logout</Text><Link to={"/"}> <Button   bg={"gray.300"} color={"red.500"}  onClick={HandleLogOut} onClose={onClose}><Tooltip hasArrow label='Logout' bg='red.600'><GiPowerButton size={20} color={"red.500"}/></Tooltip></Button></Link></HStack>:""}
                        <Divider/>
              </Stack>
            </DrawerBody>
  
            <DrawerFooter borderTopWidth='1px'>
              <Flex m={"auto"} alignItems={"center"} justifyContent={"center"} ><Button color={"red.300"} variant='outline' mr={3} onClick={onClose}>Cancel</Button></Flex>
                
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    )
  }