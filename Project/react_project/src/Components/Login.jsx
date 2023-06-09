import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [indicate, setIndicate] = useState(true);

  const navigate = useNavigate();
  const [indication, setIndication] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const data_sig = JSON.parse(localStorage.getItem("signupDATA"));

  const handleSubmit = (e) => {
    e.preventDefault()
    // Perform login logic here
    for (let i = 0; i < data_sig.length; i++) {
      if (data_sig[i].email === username && data_sig[i].password) {
        alert("LOGIN SUCCESSFULL");

        navigate("/products");
        setIndicate(!indicate);
      }
    }
 
  };


  const isError = username === "";
  const isPassword = password === "";

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="70%"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      margin="auto"
    >
      <Heading>Login</Heading>
      <form>
        <FormControl isInvalid={isError}>
          <FormLabel>E M A I L</FormLabel>
          <Input
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
          S I G N _ I N{" "}
        </Button>
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
