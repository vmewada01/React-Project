import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);

  const { auth, setAuth } = useContext(CartContext);

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const data_sig = JSON.parse(localStorage.getItem("signupDATA"));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    for (let i = 0; i < data_sig.length; i++) {
      if (data_sig[i].email === username && data_sig[i].password) {
        setAuth(false);
        setIsOpen(true);
        setTimeout(() => {
          navigate("/product");
        }, 3000);
    
        // Clear the interval when the component is unmounted

      }
    }

  };



 

  const isError = username === "";
  const isPassword = password === "";

  return (
    <Box
      padding="1rem"
      display="flex"
      flexDirection="column"
      width="70%"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      margin="auto"
      boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
    >
      <Heading>Login</Heading>
      <form>
        <FormControl isInvalid={isError}>
          <FormLabel>E M A I L</FormLabel>
          <Input
            htmlSize={25}
            width="auto"
            size="lg"
            type="username"
            value={username}
            onChange={handleUsernameChange}
          />
          {!isError ? (
            <FormHelperText>
              Enter the email you'd register at the time of Signup
            </FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
          <FormLabel>P A S S W O R D</FormLabel>
          <Input
            htmlSize={25}
            width="auto"
            size="lg"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {!isPassword ? (
            <FormHelperText>
              Password should match with the signup details.
            </FormHelperText>
          ) : (
            <FormErrorMessage>password is required.</FormErrorMessage>
          )}
        </FormControl>

        <Button
          onClick={handleSubmit}
          size="md"
          type="submit"
          color="white"
          bg="black"
        >
          S I G N_I N
        </Button>

        <AlertDialog isOpen={isOpen} onClose={onClose}>
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader>A L E R T</AlertDialogHeader>
              <AlertDialogBody>
                <Heading> LOGIN_SUCCESSFUL..!!</Heading>
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button colorScheme="red" onClick={onClose}>
                  Close
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>

        <br />
        <br />

        <NavLink key="Signup" to="/signup">
          <FormLabel>Create Account</FormLabel>
        </NavLink>
      </form>
    </Box>
  );
};

export default Login;
