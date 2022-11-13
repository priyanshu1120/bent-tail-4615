
import React,{ useState }  from 'react'
import {Flex, Box,FormControl,FormLabel, Input,InputGroup, HStack,InputRightElement,Stack,Button,Heading, Text,useColorModeValue, Center, Spinner,} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate} from 'react-router-dom';
import {  GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import {  UserAuth } from '../Utils/firebase';
import { toast } from 'react-toastify';



export const SigninAdmin =()=> {
  const [showPassword, setShowPassword] = useState(false);
  const [isSigninLoading, setisSigninLoading] = useState(false);
  const navigate =useNavigate();
const [state, setState] = useState({
email: "",
password: "",
})
const {email, password,} = state;
const provider = new GoogleAuthProvider();
const handleGoogleSignIn = () => {
signInWithPopup(UserAuth, provider)
  .then((result) => {
  
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    toast.success("Login Sucessfull")
    navigate("/admin")
    // ...
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    toast.error("Login Failed")
    toast.error(errorCode,errorMessage)
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  })};
const handleSubmit = (e) => {
    e.preventDefault();
    setisSigninLoading(true)
signInWithEmailAndPassword(UserAuth, email, password)
  .then((userCredential) => {
    // Signed in 
    const Loguser = userCredential.user;
    console.log(Loguser)
    setisSigninLoading(false);
    toast.success("Login Sucessfull")
    navigate("/")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error(errorCode,errorMessage)
    setisSigninLoading(false);
  });
    setState({email: "",
    password: "",})
  };
  const handleChange = (e) => {
    let {name,value} =e.target ;
    setState({...state,[name]:value})
  };
  return (
    <> <Flex alignItems={"center"} justifyContent={"center"}>{isSigninLoading &&   
      <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='black'
      size='xl'
    />}
    </Flex>
    <Flex backdropBlur={50}
      minH={'5vh'}
      align={'center'}
      justify={'center'}
   >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign In
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
          Wellcome Back.
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <form >
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={handleChange} name="email" value={email} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'}  onChange={handleChange} name="password" value={password}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}  
                 type="submit"  onClick={handleSubmit}  >
                Log In
              </Button>
            </Stack>
            </form>
            <Text textAlign={"center"}>or</Text>
            <Center px={8}>
      <Button 
        w={'full'}
        maxW={'md'}
        variant={'outline'}
        leftIcon={<FcGoogle />} onClick={handleGoogleSignIn}>
        <Center>
          <Text>Log in with Google</Text>
        </Center>
      </Button>
    </Center>
            <HStack justifyContent={"center"} pt={2}>
              <Text align={'center'}> Click here to Register with us?</Text><Link to="/signup" ><Text align={'center'} color={'blue.400'}>Sign Up</Text></Link>
            </HStack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </>
  );
}