import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const ImageWithContent = () => {

    const [index, setIndex] = useState(0);

     const images=["https://plus.unsplash.com/premium_photo-1681582863624-24337f436b78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                 "https://images.unsplash.com/photo-1624222247344-550fb60583dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                 "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ] 

    const update = () => {
        setIndex((prev) => (prev + 1) % images.length);
      };
    
      useEffect(() => {
        const id = setInterval(update, 3000);
        return () => {
          clearInterval(id);
        };
      }, []);
  return (
    <Box position="relative">
      <Image src={images[index]} alt="Sliding Image" width="100%" height="600px" />
    
      <Text
       
        position="absolute"
        top="50%"
        left="30%"
        transform="translate(-50%, -50%)"
        color="white"
        fontSize="34px"
        fontWeight="bold"
        textAlign="center"
      >
        G O _ W H E R E V E R _ A D V E N T U R E _ L E A D S
      </Text>
    <Button
     position="absolute"
     
     top="60%"
     left="30%"
     transform="translate(-50%, -50%)"
     color="white"
     bg='rgb(177,105,67)'
     fontSize="34px"
     fontWeight="bold"
     textAlign="center"
    > EXPLORE NOW</Button>
    </Box>
  );
};

export default ImageWithContent;