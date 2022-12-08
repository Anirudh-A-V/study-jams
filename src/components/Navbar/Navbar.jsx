import React, {useState} from 'react';
import { Heading, Flex, Text, Input, Button } from "@chakra-ui/react"
import { AiOutlineSearch } from "react-icons/ai";

export const Navbar = ({Name}) => {
    const [text, setText] = useState('');
    console.log(text);

    return (
        <Flex bg="#FFF" h="100px" align="center" justifyContent="center" p="6">

            <Heading color="green">{Name}</Heading>

            <Flex marginLeft={'50px'}>
                <Input variant='outline' placeholder='Outline' maxW={'400px'} minW={'300px'} onChange={(e) => setText(e.target.value)} />
                <Button  bg={'green'} color={'white'}>
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

        </Flex>
    )
}