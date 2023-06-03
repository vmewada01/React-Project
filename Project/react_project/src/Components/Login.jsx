import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
   
    const navigate = useNavigate();
    const [indication, setIndication] = useState(false);
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Perform login logic here
  
    
    };

  
    const isError = username === "";
    const isPassword = password === "";
  
    return (
      <Box display='flex' flexDirection='column' width='70%' justifyContent='center' alignContent='center' alignItems='center' margin='auto'>
        <Heading>Login</Heading>
        <form onSubmit={handleSubmit}>
  
          <FormControl isInvalid={isError}>
            <FormLabel>User Details</FormLabel>
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
          <Button type="submit">Login</Button>
        </form>
      </Box>
    );
  };
  
  export default Login;
  