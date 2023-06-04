import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const details = JSON.parse(localStorage.getItem("items"));
  //console.log(details)



  const deleteFunction = (price) => {
    details.filter((abc) => {
      return abc.price !== price;
    });
  };
  console.log(details);


  return (
    <Box>
      <Box marginBottom="3rem" position="relative">
        <img
          src="https://images.unsplash.com/photo-1572584642822-6f8de0243c93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="image"
          width="100%"
        />

        <Heading position="absolute" top="60%" left="10%" color="white">
          Hurry Up!
        </Heading>
        <Heading position="absolute" top="70%" left="10%" color="white">
          Don't Miss the Deal
        </Heading>
        <Heading position="absolute" top="80%" left="10%" color="white">
          Explore new gifts with best Offers...!!
        </Heading>
        <Heading position="absolute" top="20%" left="10%" color="white">
          Father's Day Special..!!
        </Heading>
      </Box>
      <Box display="flex" flexDirection="column" gap="2rem">
        {details &&
          details.map((abc) => {
            return (
              <Box
                key={abc.id}
                display="flex"
                gap="2rem"
                justifyContent="center"
                alignItems="center"
                boxShadow="md"
                margin="auto"
                width="70%"
                transition="transform 0.3s"
                _hover={{ transform: "scale(1.1)" }}
              >
                <Image src={abc.urls} alt="img" width="200px" />
                <Text fontSize="2xl"> {abc.brands}</Text>
                <Text fontSize="2xl">{abc.heading}</Text>

                <Text fontSize="2xl">Price: $ {abc.prices}</Text>
                <Button
                  onClick={() => deleteFunction(abc.price)}
                  color="white"
                  bg="rgb(198,156,109)"
                >
                  Delete
                </Button>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

export default Cart;
