import React from "react";
import { Button } from "@chakra-ui/button";
import { Circle, Stack, Flex, Box, Text } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
// imported media query for responsiveness from chakra-ui
import { useMediaQuery } from "@chakra-ui/media-query";

const Header = () => {
  // using the useColorMode hook for light & dark theme
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  //For screen responsive im using useMediaQuery component from chakra-ui
  // name the variable as per your choice
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      {isNotSmallerScreen && (
        <Circle
          position="absolute"
          bg="blue.100"
          opacity="0.1"
          w="300px"
          h="300px"
          alignSelf="flex-end"
        />
      )}

      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : 0}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? 0 : 16 } alignSelf="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"
            bgClip="text"
          >
            Raguram Elango
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            Front end developer at Cognizant.
          </Text>
          <Button mt={8} colorScheme="blue">Hire Me</Button>
        </Box>

        <Image
        mt={isNotSmallerScreen ? "0" :"12"}
        mb={isNotSmallerScreen ? "0" :"12"}
          alignSelf="center"
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          zIndex={1}
          src="./raguram-portfolio/Raguram.jpg"
          alt="profile pic"
        />
      </Flex>
    </Stack>
  );
};

export default Header;
