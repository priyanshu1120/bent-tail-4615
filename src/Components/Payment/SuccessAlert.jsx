import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SuccessAlert = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  return (
    <Alert
      status="success"
      variant="subtle"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
      width="500px"
      marginTop="15%"
      marginLeft="35%"
      backgroundColor="black"
      color="white"
    >
      <AlertIcon boxSize="40px" mr={0} color="blue" />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Payment Successful
      </AlertTitle>
      <AlertDescription maxWidth="sm" fontSize="16px">
        Thanks for subscribing! Enjoy MY TV+ for 30 days!
      </AlertDescription>
    </Alert>
  );
};

export default SuccessAlert;
