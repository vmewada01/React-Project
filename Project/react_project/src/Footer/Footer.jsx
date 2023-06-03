import {
  Box,
  Flex,
  Text,
  Link,
  Divider,
  Image,
  Input,
  Icon,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box  color="black">
      <Box maxW="1200px" mx="auto" py="8" px="4">
        <Flex justifyContent="space-between">
          <Box width={["100%", "50%"]} mb={["6", "0"]} mr='2rem'>
            <Text fontSize="xl" fontWeight="bold" mb="4">
              TANNER GOODS
            </Text>
            <Image
              src="https://www.tannergoods.com/cdn/shop/files/Medium-Dark.png?v=1666198676&width=360"
              alt="img"
            />
            <Text mb="2">
              In a world where we are overwhelmed by products made to break down
              or go out of style, we aim to go against that grain.
            </Text>
            <Link
              display="block"
              mb="2"
              _hover={{ textDecoration: "underline" }}
            >
              About Us
            </Link>
            <Link
              display="block"
              mb="2"
              _hover={{ textDecoration: "underline" }}
            >
              Journal
            </Link>
            <Text>
              <Link href="mailto:info@tannergoods.com">
                info@tannergoods.com
              </Link>
            </Text>
          </Box>
          <Box width={["100%", "50%"]}>
            <Text fontSize="xl" fontWeight="bold" mb="4">
              SHOP
            </Text>
            <Link
              display="block"
              mb="2"
              _hover={{ textDecoration: "underline" }}
            >
              Home
            </Link>
            <Link
              display="block"
              mb="2"
              _hover={{ textDecoration: "underline" }}
            >
              Mazama
            </Link>
            <Link
              display="block"
              mb="2"
              _hover={{ textDecoration: "underline" }}
            >
              Best Sellers
            </Link>
            <Link
              display="block"
              mb="2"
              _hover={{ textDecoration: "underline" }}
            >
              New Arrivals
            </Link>
            <Link
              display="block"
              mb="2"
              _hover={{ textDecoration: "underline" }}
            >
              Wallets
            </Link>
            <Link
              display="block"
              mb="2"
              _hover={{ textDecoration: "underline" }}
            >
              Belts
            </Link>
            <Link
              display="block"
              mb="2"
              _hover={{ textDecoration: "underline" }}
            >
              Bags
            </Link>
            <Link
              display="block"
              mb="2"
              _hover={{ textDecoration: "underline" }}
            >
              Final Sale
            </Link>
          </Box>
          <Box width={["100%", "50%"]}>
            <Text fontSize="xl" fontWeight="bold" mb="4">
              SUPPORT
            </Text>
            <Link
              display="block"
              mb="2"
              _hover={{ textDecoration: "underline" }}
            >
              Home
            </Link>
            <Link
              display="block"
              mb="2"
              _hover={{ textDecoration: "underline" }}
            >
              Contact Us
            </Link>
            <Link
              display="block"
              mb="2"
              _hover={{ textDecoration: "underline" }}
            >
              Shipping
            </Link>
            <Link
              display="block"
              mb="2"
              _hover={{ textDecoration: "underline" }}
            >
              Returns & Exchanges
            </Link>
            <Link
              display="block"
              mb="2"
              _hover={{ textDecoration: "underline" }}
            >
              Replacement & Repairs
            </Link>
            <Link
              display="block"
              mb="2"
              _hover={{ textDecoration: "underline" }}
            >
              Warranty Info
            </Link>
            <Link
              display="block"
              mb="2"
              _hover={{ textDecoration: "underline" }}
            >
              Wholesale
            </Link>
            <Link
              display="block"
              mb="2"
              _hover={{ textDecoration: "underline" }}
            >
              Careers
            </Link>
          </Box>
          <Box width={["100%", "50%"]}>
            <Text fontSize="xl" fontWeight="bold" mb="4">
              STAY IN THE LOOP
            </Text>
            <Text>
              {" "}
              subscribe to our newsletter and save 10% an your first order.
              Plus, receive first-access to our popular sampel sales
            </Text>
            <Input palceholder="Enter your email"  />
            <span>
              <Icon>
                <svg
                   bg="white"
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  class="icon icon-email"
                  viewBox="0 0 256 256"
                  width="128"
                >
                  <path d="M63 52H1V12h62zM1 12l25.68 24h9.72L63 12M21.82 31.68L1.56 51.16m60.78.78L41.27 31.68"></path>
                </svg>
              </Icon>
            </span>
            <Flex gap='1rem'><Icon><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-instagram" viewBox="0 0 32 32"><path fill="#444" d="M16 3.094c4.206 0 4.7.019 6.363.094 1.538.069 2.369.325 2.925.544.738.287 1.262.625 1.813 1.175s.894 1.075 1.175 1.813c.212.556.475 1.387.544 2.925.075 1.662.094 2.156.094 6.363s-.019 4.7-.094 6.363c-.069 1.538-.325 2.369-.544 2.925-.288.738-.625 1.262-1.175 1.813s-1.075.894-1.813 1.175c-.556.212-1.387.475-2.925.544-1.663.075-2.156.094-6.363.094s-4.7-.019-6.363-.094c-1.537-.069-2.369-.325-2.925-.544-.737-.288-1.263-.625-1.813-1.175s-.894-1.075-1.175-1.813c-.212-.556-.475-1.387-.544-2.925-.075-1.663-.094-2.156-.094-6.363s.019-4.7.094-6.363c.069-1.537.325-2.369.544-2.925.287-.737.625-1.263 1.175-1.813s1.075-.894 1.813-1.175c.556-.212 1.388-.475 2.925-.544 1.662-.081 2.156-.094 6.363-.094zm0-2.838c-4.275 0-4.813.019-6.494.094-1.675.075-2.819.344-3.819.731-1.037.4-1.913.944-2.788 1.819S1.486 4.656 1.08 5.688c-.387 1-.656 2.144-.731 3.825-.075 1.675-.094 2.213-.094 6.488s.019 4.813.094 6.494c.075 1.675.344 2.819.731 3.825.4 1.038.944 1.913 1.819 2.788s1.756 1.413 2.788 1.819c1 .387 2.144.656 3.825.731s2.213.094 6.494.094 4.813-.019 6.494-.094c1.675-.075 2.819-.344 3.825-.731 1.038-.4 1.913-.944 2.788-1.819s1.413-1.756 1.819-2.788c.387-1 .656-2.144.731-3.825s.094-2.212.094-6.494-.019-4.813-.094-6.494c-.075-1.675-.344-2.819-.731-3.825-.4-1.038-.944-1.913-1.819-2.788s-1.756-1.413-2.788-1.819c-1-.387-2.144-.656-3.825-.731C20.812.275 20.275.256 16 .256z"></path><path fill="#444" d="M16 7.912a8.088 8.088 0 0 0 0 16.175c4.463 0 8.087-3.625 8.087-8.088s-3.625-8.088-8.088-8.088zm0 13.338a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 1 1 0 10.5zM26.294 7.594a1.887 1.887 0 1 1-3.774.002 1.887 1.887 0 0 1 3.774-.003z"></path></svg></Icon>
            <Icon><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-facebook" viewBox="0 0 14222 14222"><path d="M14222 7112c0 3549.352-2600.418 6491.344-6000 7024.72V9168h1657l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4968.72C2600.418 13603.344 0 10661.352 0 7112 0 3184.703 3183.703 1 7111 1s7111 3183.703 7111 7111zm-8222 7025c362 57 733 86 1111 86-377.945 0-749.003-29.485-1111-86.28zm2222 0v-.28a7107.458 7107.458 0 0 1-167.717 24.267A7407.158 7407.158 0 0 0 8222 14137zm-167.717 23.987C7745.664 14201.89 7430.797 14223 7111 14223c319.843 0 634.675-21.479 943.283-62.013z"></path></svg></Icon>
            </Flex>
          
          </Box>
          
        </Flex>
        <Divider my="6" borderColor="whiteAlpha.400" />
        <Text textAlign="center" fontSize="sm">
          &copy; {new Date().getFullYear()} Tanner Goods. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
