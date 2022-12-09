import React, { useState } from 'react';
import { Heading, Flex, Text, Input, Button } from "@chakra-ui/react"
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';

export const Navbar = ({ Name }) => {
    const [text, setText] = useState('');
    console.log(text);

    return (
        <Flex bg="#FFF" h="100px" align="center" justifyContent="center" p="6">

            <Heading color="green">
                <Link to='/'>
                    {Name}
                </Link>
            </Heading>

            <Flex marginLeft={'50px'}>
                <Input variant='outline' placeholder='Outline' maxW={'400px'} minW={'300px'} onChange={(e) => setText(e.target.value)} />
                <Button bg={'green'} color={'white'} _hover={{bg: 'green.500'}}>
                    <AiOutlineSearch />
                </Button>
            </Flex>

            <Flex marginLeft={'50px'}>
                <Flex flexDirection={'column'}>
                    <Text color={'green'}>No. of items : 0</Text>
                    <Text color={'green'}>Sub Total : 0</Text>
                </Flex>
                <Heading>👜</Heading>
            </Flex>

            <Button marginLeft={'50px'} bg={'green'} color={'white'} _hover={{bg: 'green.500',}}>
                <Link to='/test'>
                    Log In
                </Link>
            </Button>

        </Flex>
    )
}