import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Icon } from "@chakra-ui/icon";
import { DiReact, DiPython, DiPostgresql } from "react-icons/di";

const Profile = () => {
  const isNotSmallerScreen = useMediaQuery([{sm:"30em", md:"48em", lg:"62em", xl:"80em"}]);

  return (
    <div>
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        w="100%"
        maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
      >
        <Box alignSelf="center" px="32" py="16">
          <Heading fontWeight="extrabold" color="cyan.500" fontSize={{base: '24px', md: '40px', lg: '56px' }}>
            3+
          </Heading>
          <Text fontSize={{base: '24px', md: '40px', lg: '56px' }} color="grey.400">
            Years of Experience
          </Text>
        </Box>
        <Box alignSelf={"center"} px="32" py="16">
          <Text fontWeight="bold">PowerApps developer in Cognizant.</Text>
          <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
            <Flex
              direction="column"
              rounded="xl"
              mt={4}
              bg="cyan.400"
              h="30vh"
              w="30vh"
              justify={"flex-end"}
              ml={isNotSmallerScreen ? 4 : 0}
              _hover={{ bg: "green.400" }}
            >
              <Icon color="black" p="4" w="24" h="24" as={DiReact} />
              <Text fontWeight="semibold" fontSize={{ base: '24px', md: '40px', lg: '56px' }} color="black" p="4">
                React
              </Text>
            </Flex>
            <Flex
              direction="column"
              rounded="xl"
              mt={4}
              bg="gray.100"
              h="30vh"
              w="30vh"
              justify={"flex-end"}
              ml={isNotSmallerScreen ? 4 : 0}
              _hover={{ bg: "green.400" }}
            >
              <Icon color="black" p="4" w="24" h="24" as={DiPython} />
              <Text fontWeight="semibold" fontSize={{ base: '24px', md: '40px', lg: '56px' }} color="black" p="4">
                Python
              </Text>
            </Flex>
            <Flex
              direction="column"
              rounded="xl"
              mt={4}
              bg="blue.400"
              h="30vh"
              w="30vh"
              justify={"flex-end"}
              ml={isNotSmallerScreen ? 4 : 0}
              _hover={{ bg: "green.400" }}
            >
              <Icon color="black" p="4" w="24" h="24" as={DiPostgresql} />
              <Text fontWeight="semibold" fontSize={{ base: '24px', md: '40px', lg: '56px' }} color="black" p="4">
                Postgresql
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default Profile;
