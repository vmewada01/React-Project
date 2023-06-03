import React from "react";
import ImageWithContent from "../Pages/Home";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import HighlightedDiv from "../Pages/Hover";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";

const EntireHome = () => {
  return (
    <div>
      <ImageWithContent />
      <Box
        gap="2rem"
        width="50%"
        margin="auto"
        textAlign="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Box>
          <Text fontSize="4xl" as="i">
            We Create Products Worth Holding Onto
          </Text>
        </Box>
        <Box>
          {" "}
          <Text fontsize="xl" as="i">
            In a world where we are overwhelmed by goods made to break down or
            go out style, we aim to go aaginst the grain. From US made leather
            goods to handcrafted tableware , all products are designed in our
            Portland Studio.
          </Text>
        </Box>
        <Box>
          {" "}
          <Text fontSize="4xl" as="i">
            Break it in. Wear it well . Pass it on.
          </Text>
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateRows="repeat(2,1fr)"
        gridTemplateColumns="repeat(2,1fr)"
        gap="2rem"
        margin="3rem"
      >
        <Box
          position="relative"
          transition="transform 0.3s"
          _hover={{ transform: "scale(1.1)" }}
        >
          <Text
            position="absolute"
            top="70%"
            left="30%"
            transform="translate(-50%, -50%)"
            color="white"
            fontSize="24px"
            fontWeight="bold"
            textAlign="center"
            as="i"
          >
            Belts
          </Text>
          <Button
            position="absolute"
            top="90%"
            left="30%"
            transform="translate(-50%, -50%)"
            color="white"
            bg="rgb(177,105,67)"
            fontSize="24px"
            fontWeight="bold"
            textAlign="center"
          >
            {" "}
            <NavLink key="products" to="/products">
            SHOP NOW
            </NavLink>
          </Button>

          <img
            src="https://images.unsplash.com/photo-1476231790875-016a80c274f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            alt=""
          />
        </Box>
        <Box
          position="relative"
          transition="transform 0.3s"
          _hover={{ transform: "scale(1.1)" }}
        >
          <Text
            position="absolute"
            top="70%"
            left="30%"
            transform="translate(-50%, -50%)"
            color="white"
            fontSize="24px"
            fontWeight="bold"
            textAlign="center"
            as="i"
          >
            Wallets
          </Text>
          <Button
            position="absolute"
            top="90%"
            left="30%"
            transform="translate(-50%, -50%)"
            color="white"
            bg="rgb(177,105,67)"
            fontSize="24px"
            fontWeight="bold"
            textAlign="center"
          >
            {" "}
            <NavLink key="products" to="/products">
            SHOP NOW
            </NavLink>
          </Button>

          <img
            src="https://images.unsplash.com/photo-1567016627485-de3bcbecdbb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </Box>
        <Box
          position="relative"
          transition="transform 0.3s"
          _hover={{ transform: "scale(1.1)" }}
        >
          <Text
            position="absolute"
            top="70%"
            left="30%"
            transform="translate(-50%, -50%)"
            color="white"
            fontSize="24px"
            fontWeight="bold"
            textAlign="center"
            as="i"
          >
            Accessories
          </Text>
          <Button
            position="absolute"
            top="90%"
            left="30%"
            transform="translate(-50%, -50%)"
            color="white"
            bg="rgb(177,105,67)"
            fontSize="24px"
            fontWeight="bold"
            textAlign="center"
          >
            {" "}
            <NavLink key="products" to="/products">
            SHOP NOW
            </NavLink>
          </Button>

          <img
            src="
https://images.unsplash.com/photo-1683183191178-58a299409692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </Box>
        <Box
          position="relative"
          transition="transform 0.3s"
          _hover={{ transform: "scale(1.1)" }}
        >
          <Text
            position="absolute"
            top="70%"
            left="30%"
            transform="translate(-50%, -50%)"
            color="white"
            fontSize="24px"
            fontWeight="bold"
            textAlign="center"
            as="i"
          >
            Bags
          </Text>
          <Button
            position="absolute"
            top="90%"
            left="30%"
            transform="translate(-50%, -50%)"
            color="white"
            bg="rgb(177,105,67)"
            fontSize="24px"
            fontWeight="bold"
            textAlign="center"
          >
            {" "}
            <NavLink key="products" to="/products">
            SHOP NOW
            </NavLink>
          </Button>
          <img
            src="
https://images.unsplash.com/photo-1622560481156-01fc7e1693e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt=""
          />{" "}
        </Box>
      </Box>
      <br />
      <Heading>Explore Best Sellers</Heading>
      <br />
      <br />
      <HighlightedDiv />
      <Box>
        <img
          src="https://www.tannergoods.com/cdn/shop/files/TG-Worth-Holding-Onto-Banner-Lifestyle-Hero_82fe166f-9792-45e2-a800-923942b0d1bc.jpg?v=1676058290&width=1920"
          alt="img"
        />
      </Box>
    
    </div>
  );
};

export default EntireHome;
