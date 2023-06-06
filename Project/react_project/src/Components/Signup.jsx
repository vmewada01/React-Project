import {
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";

const initial = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [username, setUsername] = useState(initial);

  const navigate = useNavigate();
  const [indication, setIndication] = useState(false);
  const [signupdata, setSignupData] = useState([]);
  const new_data_signup = [...signupdata];

  const handleUsernameChange = (event) => {
    const { first_name, last_name, email, password, name } = event.target;

    setUsername({
      ...username,
      [name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    setIndication(!indication);
    console.log(username);
    new_data_signup.push(username);
    setSignupData(new_data_signup);

    localStorage.setItem("signupDATA", JSON.stringify(signupdata));
  };
  const isError1 = username.first_name === "";
  const isError2 = username.last_name === "";
  const isError3 = username.email === "";
  const isError4 = username.password === "";

  return (
    <Box
     boxShadow=' rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
      display="flex"
      flexDirection="column"
      width="70%"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      margin="auto"
      gap='1rem'
      padding='1rem'
    >
      <Heading>Sign Up</Heading>
     
      <Button color="white" bg="green" variant="primary w-100 mb-4">
        <GrGoogle /> Sign Up with Google
      </Button>
   
      <Button color="white" bg="green" variant="primary w-100 mb-4">
        <FaFacebookF /> Sign Up with Facebook
      </Button>
   

      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={isError1}>
          <FormLabel>F I R S T _ N A M E</FormLabel>
          <Input
            htmlSize={25}
            width="auto"
            type="username"
            name="first_name"
            value={username.first_name}
            onChange={handleUsernameChange}
          />
          {!isError1 ? (
            <FormHelperText>Enter your name</FormHelperText>
          ) : (
            <FormErrorMessage>Name is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={isError2}>
          <FormLabel>L A S T _ N A M E</FormLabel>

          <Input
            htmlSize={25}
            width="auto"
            type="username"
            name="last_name"
            value={username.last_name}
            onChange={handleUsernameChange}
          />
          {!isError2 ? (
            <FormHelperText>Enter last name</FormHelperText>
          ) : (
            <FormErrorMessage>Last Name is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={isError3}>
          <FormLabel>E M A I L</FormLabel>
          <Input
            htmlSize={25}
            width="auto"
            type="useremail"
            name="email"
            value={username.email}
            onChange={handleUsernameChange}
          />
          {!isError3 ? (
            <FormHelperText>
              Enter your email to login next time .
            </FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={isError4}>
          <FormLabel>P A S S W O R D</FormLabel>
          <Input
            htmlSize={25}
            width="auto"
            type="password"
            name="password"
            value={username.password}
            onChange={handleUsernameChange}
          />
          {!isError4 ? (
            <FormHelperText>
              Password should have alphabets and Numeric values.
            </FormHelperText>
          ) : (
            <FormErrorMessage>password is required.</FormErrorMessage>
          )}
        </FormControl>

        <Button size="md" type="submit" color="white" bg="black">
          {" "}
          C R E A T E{" "}
        </Button>

        {indication && (
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Account Created Successfully !
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Thanks for Creating your account.
            </AlertDescription>
            <Button onClick={() => navigate("/login")} bg="green" color="white">
              Move to login page
            </Button>
          </Alert>
        )}
      </form>
    </Box>
  );
};

export default Signup;
