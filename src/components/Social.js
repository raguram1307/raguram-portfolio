import React from "react";
import {Icon} from "@chakra-ui/icon";
import {HStack} from "@chakra-ui/layout";
import {FaLinkedin,FaTwitter,FaInstagram, FaFacebookF} from "react-icons/fa";
//import {IconButton} from "@chakra-ui/button"


const Social = () => {
    return(
        <HStack spacing="24"> 
        
            <Icon as={FaLinkedin} boxSize={50} />
            

            <Icon as={FaFacebookF} boxSize={50} />
            <Icon as={FaTwitter} boxSize={50} />
            <Icon as={FaInstagram} boxSize={50} />
            

           

       </HStack>
    );
    
}

export default Social;