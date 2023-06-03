import { Box, Heading, Image } from "@chakra-ui/react";

const HighlightedDiv = () => {
  const items = [
    {
      id: 1,
      url: "https://www.tannergoods.com/cdn/shop/products/Tanner-Goods-Cognac-Journeyman-Lifestyle-01.jpg?v=1678833017&width=540",
      heading: "Utility Bifold - Natural",
      brand: "TANNER GOODS",
      price: 125.0,
    },
    {
      id: 2,
      url: "https://www.tannergoods.com/cdn/shop/products/Mazama-Standard-Mug-Sandstone.jpg?v=1667151306&width=720",
      heading: "Standard Mug",
      brand: "TANNER GOODS",
      price: 85.0,
    },
    {
      id: 3,
      url: "https://www.tannergoods.com/cdn/shop/products/Standard-Belt-Black-Top.jpg?v=1648152389&width=540",
      heading: "Classic Belt Cognac",
      brand: "TANNER GOODS",
      price: 115.0,
    },
    {
      id: 4,
      url: "https://www.tannergoods.com/cdn/shop/files/Tanner-Goods-Crossbody-Tan-Lifestyle-Bike-Lifestyle-01.jpg?v=1683135646&width=540",
      heading: "Cany Crossbody Pack - Utility Tan",
      brand: "TANNER GOODS",
      price: 100.0,
    },
    {
      id: 5,
      url: "https://www.tannergoods.com/cdn/shop/products/TG-Lifestyle-Mazama-Sandstone-Stacking-Bowl.jpg?v=1681251168&width=720",
      heading: "Stacking Bowl",
      brand: "MAZAMA",
      price: 27.0,
    },
    {
      id: 6,
      url: "https://www.tannergoods.com/cdn/shop/products/Tanner-Goods-Natural-Journeyman-Lifestyle-03.jpg?v=1678828752&width=540",
      heading: "Utility Cognac",
      brand: "MAZAMA",
      price: 40.0,
    },
  ];

  return (
    <Box  height='700px' display="grid" gridTemplateRows="repeat(3,1fr)" gridTemplateColumns='repeat(3,1fr)' gap='2rem' justifyContent='center' alignItems='center' alignContent='center' marginLeft='3rem'>
       
      {items.map((abc) => {
        return (
          <>
            <Box
             
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.1)" }}
              textAlign='center'
            >
             <Box> <Image src={abc.url} alt="Image" width="400px" height="250px" /></Box>
             <Box> <h3>{abc.heading}</h3></Box>
             <Box>   <h3>{abc.brand}</h3></Box>
              <Box><h3>${abc.price}</h3></Box>
            </Box>
          </>
        );
      })}
    </Box>
  );
};

export default HighlightedDiv;
