import React from 'react';
import {Heading,Flex} from "@chakra-ui/react"

export const Navbar = ()=>{
    return (
       <Flex bg="grey" h="100px" align="center" justifyContent="space-between" p="6">
           <Heading color="white">Cart</Heading>
           <Heading>👜</Heading>
       </Flex>
    )
}