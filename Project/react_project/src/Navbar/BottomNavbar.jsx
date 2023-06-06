import {
  Box,
  Button,
 
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

import { BsCartCheckFill } from "react-icons/bs";
import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import {  GrUserAdd } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";

const BottomNavbar = () => {
  return (
    <Box paddingTop="1rem" >
      <Box padding="2rem" display="flex" justifyContent="space-between">
        <Box>
          <img
            src="https://www.tannergoods.com/cdn/shop/files/Tanner-Goods-Mazama_0cde7532-1bc0-415c-9d15-cc7207ffea6f.png?v=1676573435&width=140"
            alt="img"
          />{" "}
        </Box>

        <Box display="flex" gap="1.5rem" alignItems="center"  whiteSpace="nowrap" overflow='hidden'>
          <Box>
            <Menu>
              <MenuButton as={Button} variant="ghost">
                Mazama Wares
              </MenuButton>
              <MenuList>
                <MenuItem minH="48px">
                    <NavLink key='Home' to="/">
                  <Image
                    boxSize="10rem"
                    borderRadius="full"
                    src="https://www.tannergoods.com/cdn/shop/collections/tanner-goods-natural-belts-product-hero.jpg?v=1677619816&width=832"
                    alt="img"
                    mr="12px"
                  />
                  <span>Belts</span>
                  </NavLink>
                </MenuItem>
                <MenuItem minH="40px">
                <NavLink key='Products' to="/products">
                  <Image
                    boxSize="10rem"
                    borderRadius="full"
                    src="https://www.tannergoods.com/cdn/shop/collections/Tanner-Goods-Wallet-Collection.jpg?v=1677619779&width=832"
                    alt="img"
                    mr="12px"
                  />
                  <span>Wallets</span>
                  </NavLink>
                </MenuItem>
                <MenuItem minH="40px">
                <NavLink key='Home' to="/">
                  <Image
                    boxSize="10rem"
                    borderRadius="full"
                    src="https://www.tannergoods.com/cdn/shop/collections/Tanner-Goods-M81-Lifestyle-Hero-01.jpg?v=1677619749&width=832"
                    alt="img"
                    mr="12px"
                  />
                  <span>Bags</span>
                  </NavLink>
                </MenuItem>
                <MenuItem minH="40px">
                <NavLink key='Home' to="/">
                  <Image
                    boxSize="10rem"
                    borderRadius="full"
                    src="https://www.tannergoods.com/cdn/shop/collections/tanner-goods-leather-accessories-hero.jpg?v=1677619858&width=832"
                    alt="img"
                    mr="12px"
                  />
                  <span>Accessories</span>
                  </NavLink>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box>
            <Menu>
              <MenuButton variant="ghost" as={Button}>
                Mazam Wares
              </MenuButton>
              <MenuList>
              <NavLink key='Products' to="/products">
                <MenuItem>Tableware</MenuItem>
           
                <MenuItem>Ceramic Mugs</MenuItem>
                <MenuItem>Glassware</MenuItem>
                </NavLink>
              </MenuList>
            </Menu>
          </Box>
          <Box>
            <Menu>
              <MenuButton variant="ghost" as={Button}>
                Featured Collections
              </MenuButton>
              <MenuList>
              <NavLink key='Products' to="/products">
                <MenuItem>Father's Day Gift Shop</MenuItem>
                <MenuItem>New Arrivals</MenuItem>
                <MenuItem>Best Sellers</MenuItem>
                <MenuItem>Made in USA</MenuItem>
                <MenuItem>Everyday Carry</MenuItem>
                <MenuItem>Apparel & Accessories</MenuItem>
                <MenuItem>Gifts for Her</MenuItem>
                <MenuItem>Last Call</MenuItem>
                </NavLink>
              </MenuList>
            </Menu>
          </Box>
          <Box>
            <Menu>
            <NavLink key='Products' to="/products">
              <MenuButton variant="ghost" as={Button}>
              Father's Day Gift
              </MenuButton>
              </NavLink>
            </Menu>
          </Box>
          <Box>
            <Menu>
            <NavLink key='About' to="/about">
              <MenuButton variant="ghost" as={Button}>
                About
              </MenuButton>
              </NavLink>
            </Menu>
          </Box>
        </Box>

        <Box display="flex" gap="2rem" alignItems="center"  flexWrap="wrap">
        <Box>
         <Text fontSize='2xl'> search</Text>
        <BsSearch />
           
          
          </Box>
        
          <Box>
            <NavLink key="login" to="/login">
            <Text fontSize='2xl'> login</Text>
            <AiOutlineLogin />
           
            </NavLink>
          </Box>
          <Box>
          <NavLink key="login" to="/signup">
          <Text fontSize='2xl'> Register</Text>
            <GrUserAdd />
          </NavLink>
          </Box>

          <Box>
         <NavLink key="cart" to="/cart">   
         <Text fontSize='2xl'> Cart</Text>
         <BsCartCheckFill />
         </NavLink>
          </Box>
        </Box>
      </Box>
      <Box
        color="white"
        bg="rgb(198,156,109)"
        textAlign="center"
        padding="1rem"
 
      >
        {" "}
        FREE U.S. SHIPPING ON ORDERS $199+ | 30-DAY EASY RETURN && EXCHANGES
      </Box>
     
    </Box>
  );
};

export default BottomNavbar;
