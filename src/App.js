import React from 'react';
import {IconButton} from '@chakra-ui/button'
import {VStack,Flex,Heading,Spacer} from '@chakra-ui/layout';
import {FaSun,FaMoon,FaGithub,FaLinkedin} from 'react-icons/fa'
/* useColorMode hook was imported from chakra-ui for light and dark mode purpose  */
import {useColorMode} from '@chakra-ui/color-mode'

import Header from './components/Header';
import Social from './components/Social';
import Profile from './components/Profile';

const App = () => {

const {colorMode, toggleColorMode} = useColorMode();

const isDark = colorMode === 'dark';


  return(
    <VStack p="5">
        <Flex w="100%">
            <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
                Raguram Elango
            </Heading>
            <Spacer />
            <IconButton 
            ml="2"
            icon = {<FaLinkedin />}
            isRound={true}
            onClick={()=>window.open("https://www.linkedin.com/in/raguram-elango-509267bb/")}
            />
            <IconButton 
            ml="2"
            isRound = 'true'
            icon = {<FaGithub />}
            onClick={()=>window.open("https://github.com/raguram1307")}
            />
            <IconButton 
            ml="8"
            /*  Ternary operatory is used inside the icon property to toggle btw thelight and dark mode */
            isRound = 'true'
            icon = { isDark ?  <FaSun /> : <FaMoon />}
            onClick={toggleColorMode}
            />
          
        </Flex>
        
         <Header />
         <Social />
         <Profile />
    </VStack>
  )
}

export default App;
