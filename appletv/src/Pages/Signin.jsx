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
import { Link,useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_FIREBASE, SIGN_UP_FIREBASE } from '../Redux/Auth/action';
export const Signin =()=> {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch()
const [state, setState] = useState({
email: "",
password: "",
})
const {email, password,} = state;
const handleGoogleSignIn = () => {}
const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LOGIN_FIREBASE(email,password))
    setState({email: "",
    password: "",
    displayName:"",
    confirmpassword:""})
  };
  const handleChange = (e) => {
    let {name,value} =e.target ;
    setState({...state,[name]:value})
  };
  return (
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
  );
}