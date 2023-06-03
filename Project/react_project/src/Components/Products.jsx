import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const items = [
    {
      id: 1,
      url: "https://www.tannergoods.com/cdn/shop/products/Tanner-Goods-Cognac-Journeyman-Lifestyle-01.jpg?v=1678833017&width=540",
      heading: "Utility Bifold - Natural",
      brand: "TANNER GOODS",
      price: 125.0
    },
    {
      id: 2,
      url: "https://www.tannergoods.com/cdn/shop/products/Mazama-Standard-Mug-Sandstone.jpg?v=1667151306&width=720",
      heading: "Standard Mug",
      brand: "TANNER GOODS",
      price: 85.0
    },
    {
      id: 3,
      url: "https://www.tannergoods.com/cdn/shop/products/Standard-Belt-Black-Top.jpg?v=1648152389&width=540",
      heading: "Classic Belt Cognac",
      brand: "TANNER GOODS",
      price: 115.0
    },
    {
      id: 4,
      url: "https://www.tannergoods.com/cdn/shop/files/Tanner-Goods-Crossbody-Tan-Lifestyle-Bike-Lifestyle-01.jpg?v=1683135646&width=540",
      heading: "Cany Crossbody Pack - Utility Tan",
      brand: "TANNER GOODS",
      price: 100.0
    },
    {
      id: 5,
      url: "https://www.tannergoods.com/cdn/shop/products/TG-Lifestyle-Mazama-Sandstone-Stacking-Bowl.jpg?v=1681251168&width=720",
      heading: "Stacking Bowl",
      brand: "MAZAMA",
      price: 27.0
    },
    {
      id: 6,
      url: "https://www.tannergoods.com/cdn/shop/products/Tanner-Goods-Natural-Journeyman-Lifestyle-03.jpg?v=1678828752&width=540",
      heading: "Utility Cognac",
      brand: "MAZAMA",
      price: 40.0
    },
    {
      id: 7,
      url: "https://www.tannergoods.com/cdn/shop/products/Mazama-Spirit-Bottle-Thumb.jpg?v=1617083126&width=360",
      heading: "Spirit Bottle",
      brand: "MAZAMA",
      price: 87.5
    },
    {
      id: 8,
      url: "https://www.tannergoods.com/cdn/shop/products/Mazama-Dinner-Plate-Thumb.jpg?v=1616733038&width=360",
      heading: "Dinner Plate",
      brand: "MAZAMA",
      price: 33.75
    },
    {
      id: 9,
      url: "https://www.tannergoods.com/cdn/shop/products/Mazama-Wine-Glass-Thumb.jpg?v=1617083182&width=360",
      heading: "Wine Glass",
      brand: "MAZAMA",
      price: 44.0
    },
    {
      id: 10,
      url: "https://www.tannergoods.com/cdn/shop/products/Koru-Rucksack-Black-3_4-Front.jpg?v=1605228485&width=540",
      heading: "Koru Rucksack-Black Konbu",
      brand: "TANNER GOODS",
      price: 585
    },
    {
      id: 11,
      url: "https://www.tannergoods.com/cdn/shop/products/TG-Cognac-Holton-Front.jpg?v=1627945538&width=540",
      heading: "Holton Leather Pack - Cognac",
      brand: "TANNER GOODS",
      price: 680
    },
    {
      id: 12,
      url: "https://www.tannergoods.com/cdn/shop/products/Zip-Wallet-Large-Cognac-Front.jpg?v=1680978207&width=540",
      heading: "UNiversal Zip Pouch",
      brand: "TANNER GOODS",
      price: 45
    },
    {
      id: 13,
      url: "https://www.tannergoods.com/cdn/shop/products/classic_coaster_cognac_2016_thumb_91f72d95-044a-42e2-a69a-9a1c1836e713.jpg?v=1636127199&width=540",
      heading: "TG Coaster Set -Cognac",
      brand: "TANNER GOODS",
      price: 15
    },
    {
      id: 14,
      url: "https://www.tannergoods.com/cdn/shop/products/Canyon-Crossbody-Gray-Front.jpg?v=1670992086&width=540",
      heading: "Canyon Crossbody Pack - Slate Grey",
      brand: "TANNER GOODS",
      price: 100
    },
    {
      id: 15,
      url: "https://www.tannergoods.com/cdn/shop/products/Tote-Black-Front.jpg?v=1670992345&width=540",
      heading: "Simple Tote- Onyx (Waxed Canvas)",
      brand: "TANNER GOODS",
      price: 100
    },
    {
      id: 16,
      url: "https://www.tannergoods.com/cdn/shop/products/TG-Classic-Belt-Cognac-Stainless-Thumb.jpg?v=1648151092&width=540",
      heading: "Classic Belt - Cognac",
      brand: "TANNER GOODS",
      price: 120
    },
    {
      id: 17,
      url: "https://www.tannergoods.com/cdn/shop/products/TG-Classic-Belt-Black-Stainless-Thumb-edit.jpg?v=1648151008&width=540",
      heading: "Classic Belt - Black",
      brand: "TANNER GOODS",
      price: 135
    },
    {
      id: 18,
      url: "https://www.tannergoods.com/cdn/shop/products/tanner-goods-heritage-belt-cognac-thumb_6341e12d-b2b5-4b9c-99fc-9f3482895b36.jpg?v=1629492911&width=540",
      heading: "Heirtage  Belt - Cognac",
      brand: "TANNER GOODS",
      price: 135
    },
    {
      id: 19,
      url: "https://www.tannergoods.com/cdn/shop/products/TG_fob_natural-Thumb.jpg?v=1610752958&width=540",
      heading: "Key Fob- Natural",
      brand: "TANNER GOODS",
      price: 12
    },
    {
      id: 20,
      url: "https://www.tannergoods.com/cdn/shop/products/TG_fob_cognac-Thumb.jpg?v=1610753060&width=540",
      heading: "Key Fob- Cognac",
      brand: "TANNER GOODS",
      price: 22
    },
    {
      id: 21,
      url: "https://www.tannergoods.com/cdn/shop/products/sunglasscase_natural_2015_thumb_47978b25-b106-49d2-9ef4-3fe22f821a17.jpeg?v=1610673258&width=540",
      heading: "Sunglass Case- Natural",
      brand: "TANNER GOODS",
      price: 22
    },
    {
      id: 22,
      url: "https://www.tannergoods.com/cdn/shop/products/Tanner-Goods-Recycled-Bifold-Saddle-Tan-02-edit.jpg?v=1678212338&width=540",
      heading: "Recycled Utility Bifold - Saddle Tan",
      brand: "TANNER GOODS",
      price: 95
    },
    {
      id: 23,
      url: "https://www.tannergoods.com/cdn/shop/products/travel_saddle_tan_2015_thumb_61730d68-4a00-405a-a51e-663f781c73f7.jpeg?v=1597258251&width=540",
      heading: "Travel Wallet - Saddle Tan",
      brand: "TANNER GOODS",
      price: 175
    },
    {
      id: 24,
      url: "https://www.tannergoods.com/cdn/shop/files/Tanner-Goods-Mazama-Ashley-B-Thumb.jpg?v=1682716378&width=720",
      heading: "LakeSide Mug",
      brand: "MAZAMA",
      price: 125
    },
    {
      id: 25,
      url: "https://www.tannergoods.com/cdn/shop/products/Mazama-Crater-Lake-Mug-Thumb_9da69366-ee88-4bf2-a8ed-43d9d9eb3980.jpg?v=1667153002&width=720",
      heading: "CRATER LAKE MUG",
      brand: "MAZAMA",
      price: 27
    },
    {
      id: 26,
      url: "https://cdn.shopify.com/s/files/1/0044/9802/products/journeyman_natural_2020_thumb_01_cd11fa34-61ce-4b05-91a5-adb690f2fd77_360x.jpg?v=1638303744",
      heading: "Journeyman - Golden",
      brand: "TANNER GOODS",

      price: 399
    },
    {
      id: 27,
      url: "https://cdn.shopify.com/s/files/1/0044/9802/products/tanner-goods-heritage-belt-cognac-thumb_6341e12d-b2b5-4b9c-99fc-9f3482895b36_360x.jpg?v=1629492911",
      heading: "Heritage belt",
      brand: "TANNER GOODS",

      price: 599
    },
    {
      id: 28,
      url: "https://cdn.shopify.com/s/files/1/0044/9802/products/TG_Product_SimpleTote_PacificMoss_101819-2-Thumb_360x.jpg?v=1623181630",
      heading: "Simple Tote - Pacific",
      brand: "TANNER GOODS",

      price: 799
    },
    {
      id: 29,
      url: "https://cdn.shopify.com/s/files/1/0044/9802/products/Tanner-Goods-Konbu-Simple-Tote-Thumb_5cdf285d-0f83-4457-b639-0d6decd1dd3b_360x.jpg?v=1649450016",
      heading: "Simple Tote - Black Konbu",
      brand: "TANNER GOODS",

      price: 899
    },
    {
      id: 30,
      url: "https://cdn.shopify.com/s/files/1/0044/9802/products/TG-Cognac-Holton-Front_360x.jpg?v=1627945538",
      heading: "Holton Leather Pack",
      brand: "TANNER GOODS",

      price: 449
    },
  ];

const Products = () => {


  return (
    <Box>
     <Heading>hii</Heading>
    </Box>
  );
};

export default Products;
