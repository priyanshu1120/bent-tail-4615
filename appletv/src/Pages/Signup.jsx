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
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { FcGoogle } from 'react-icons/fc';
import { Link,  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GOOGLE_SIGN_UP_FIREBASE, SIGN_UP_FIREBASE } from '../Redux/Auth/action';
import { useEffect } from 'react';
export const Signup =()=> {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmshowPassword, setconfirmShowPassword] = useState(false);
const [state, setState] = useState({
email: "",
password: "",
displayName:"",
confirmpassword:""
})
const dispatch = useDispatch();
const {currentUser} = useSelector((state)=> state.user)
const {email, password,confirmpassword,displayName} = state;
const handleGoogleSignIn = () => {
  dispatch(GOOGLE_SIGN_UP_FIREBASE())
}
const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(SIGN_UP_FIREBASE(email,password,displayName))
 setState({email: "",
  password: "",
  displayName:"",
  confirmpassword:""})
};
const handleChange = (e) => {
  let {name,value} =e.target ;
  setState({...state,[name]:value})
};
// const history = useNavigate();
// useEffect(()=>{
// if(currentUser){
//   history("/")
// }
// },[currentUser,history])
console.log(currentUser,state,"currentuser")
  return (
    <Flex backdropBlur={50}
      minH={'50vh'}
      align={'center'}
      justify={'center'}
   >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
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
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}  
                 type="submit"  onClick={handleSubmit}   >
                Sign up
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
  );
}