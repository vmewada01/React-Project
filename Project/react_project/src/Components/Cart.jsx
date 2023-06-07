import { Box, Button, Heading, Image, Input, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const details = JSON.parse(localStorage.getItem("items")) || [];
  //console.log(details)
  const [coupon, setCoupon] = useState("");
  const [input, setInput] = useState("");
  const [disabled, setDisabled]= useState(false)


  const [data, setData] = useState(details);

  function deleteFunction(price) {
    // console.log(price)
    const newDetails = data.filter((abc) => abc.prices !== price);
    //console.log(newDetails)
    setData(newDetails);
    localStorage.setItem("items", JSON.stringify(newDetails));
  }

  const totalprice = data.reduce((acc, curr) => acc + curr.prices, 0);
  // console.log(totalprice);
  // console.log(typeof coupon)
  let new_total = totalprice;
  const [pay, setPay] = useState(totalprice);


  //  console.log(data.length);

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
        <Box
          display="flex"
          borderRadius="1rem"
          boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
          margin="auto"
          flexDirection="column"
          justifyContent="center"
          gap="2rem"
        >
          <Box fontSize="24px" size="md" fontWeight="800" textAlign="center">
            {" "}
            Cart Details{" "}
          </Box>
          <Box
            borderRadius="0.5rem"
            color="white"
            bg="rgb(198,156,109)"
            fontSize="24px"
            fontWeight="800"
          >
            {" "}
            No. of Items : {data.length}
          </Box>
          <Box
            borderRadius="0.5rem"
            color="white"
            bg="rgb(198,156,109)"
            fontSize="24px"
            fontWeight="800"
          >
            Total Price : $ {totalprice}{" "}
          </Box>
          
          
          <Button
            colorScheme="orange"
            borderRadius="0.5rem"
            color="white"
            fontSize="24px"
            fontWeight="500"
          >
         <NavLink key="Checkout" to="/checkout">   Proceed to Payment Page </NavLink>
          </Button>
         
        </Box>

        {data.length>0 &&
          data.map((abc) => {
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
                  onClick={() => deleteFunction(abc.prices)}
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
