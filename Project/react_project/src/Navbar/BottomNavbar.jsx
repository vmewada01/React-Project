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


import React from "react";

import { NavLink } from "react-router-dom";

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
                Final Sale
              </MenuButton>
              </NavLink>
            </Menu>
          </Box>
          <Box>
            <Menu>
            <NavLink key='Products' to="/products">
              <MenuButton variant="ghost" as={Button}>
                Father's Day Gifts
              </MenuButton>
              </NavLink>
            </Menu>
          </Box>
        </Box>

        <Box display="flex" gap="2rem" alignItems="center"  flexWrap="wrap">
          <Box>
            <NavLink key="login" to="/login">
            User
            <Icon>
              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                class="icon icon-user"
                viewBox="0 0 256 256"
                width="128"
                height="128"
              >
                <path d="M35 39.84v-2.53c3.3-1.91 6-6.66 6-11.41 0-7.63 0-13.82-9-13.82s-9 6.19-9 13.82c0 4.75 2.7 9.51 6 11.41v2.53c-10.18.85-18 6-18 12.16h42c0-6.19-7.82-11.31-18-12.16z"></path>
              </svg>
            </Icon>
            </NavLink>
          </Box>
          <Box>
            {" "}
            Search
            <Icon>
              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                class="icon icon-search"
                viewBox="0 0 256 256"
                width="128"
                height="128"
              >
                <path d="M47.16 28.58A18.58 18.58 0 1 1 28.58 10a18.58 18.58 0 0 1 18.58 18.58zM54 54L41.94 42"></path>
              </svg>
            </Icon>
          </Box>

          <Box>
         <NavLink key="cart" to="/cart"> Cart</NavLink>  
   
            
            <Icon>
              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                class="icon icon-bag-minimal"
                viewBox="0 0 256 256"
                width="128"
                height="128"
              >
                <path
                  stroke="null"
                  id="svg_4"
                  fill-opacity="null"
                  stroke-opacity="null"
                  fill="null"
                  d="M11.375 17.863h41.25v36.75h-41.25z"
                ></path>
                <path
                  stroke="null"
                  id="svg_2"
                  d="M22.25 18c0-7.105 4.35-9 9.75-9s9.75 1.895 9.75 9"
                ></path>
              </svg>
            </Icon>
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
