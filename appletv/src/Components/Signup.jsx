import React,{ useState }  from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center,
  Spinner,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { FcGoogle } from 'react-icons/fc';
import { Link,  useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, GoogleAuthProvider,  signInWithPopup } from 'firebase/auth';
import {  toast } from 'react-toastify';
import { UserAuth } from '../Utils/firebase';
export const Signup =()=> {
  const [showPassword, setShowPassword] = useState(false);
  const [isSigninLoading, setisSigninLoading] = useState(false);
  const [confirmshowPassword, setconfirmShowPassword] = useState(false);
  const navigate =useNavigate();
const [state, setState] = useState({
email: "",
password: "",
displayName:"",
confirmpassword:""
})
const {email, password,confirmpassword,displayName} = state;

const handleSubmit = (e) => {
  e.preventDefault();
  if(password !== confirmpassword){
    toast.error("Passwors do not match")
    return;
  }
  setisSigninLoading(true);
  createUserWithEmailAndPassword(UserAuth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user,"user");
    setisSigninLoading(false);
    toast.success("Acoout created Sucessfull")
    navigate("/login")
    // ...
  })
  .catch((error) => {
    toast.error(error.message)
    setisSigninLoading(false);
    // ..
  });

};

const provider = new GoogleAuthProvider();
const handleGoogleSignIn =()=>{
  signInWithPopup(UserAuth, provider)
  .then((result) => {
  
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    toast.success("Login Sucessfull")
    navigate("/")
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

const handleChange = (e) => {
  let {name,value} =e.target ;
  setState({...state,[name]:value})
};

  return (
    <>
    {isSigninLoading &&   
    <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  />}
    <Flex backdropBlur={50}
      minH={'50vh'}
      align={'center'}
      justify={'center'}
   >
      <Stack spacing={8} mx={'auto'} maxW={'lg'}  px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
          You will be signed in to My TV and My Music
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <form>
            <FormControl id="firstName" isRequired>
                  <FormLabel>Full Name</FormLabel>
                  <Input type="text" onChange={handleChange} name="displayName" value={displayName} />
                </FormControl>
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
            <FormControl id="Confirm password" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input type={confirmshowPassword? 'text' : 'password'}  onChange={handleChange} name="confirmpassword"  value={confirmpassword}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setconfirmShowPassword((confirmshowPassword) => !confirmshowPassword)
                    }>
                    {confirmshowPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack pt={5} spacing={6} direction={['column', 'row']}>
          <Box><Link to={"/"}><Button
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
            }}>
            Cancel
          </Button></Link></Box>
          <Button
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}
            type="submit"  onClick={handleSubmit} >
            Sign Up
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
          <Text>Sign in with Google</Text>
        </Center>
      </Button>
    </Center>
            <HStack justifyContent={"center"} pt={2}>
              <Text align={'center'}> Already Register with us?</Text><Link to="/login" ><Text align={'center'} color={'blue.400'}>Login</Text></Link>
            </HStack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </>
  );
}