import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'

const Test = () => {
    return (
        <Flex flexDirection={'column'} bg={'#f5f5f5'} minHeight={'100vh'}>
            <Navbar Name={'Veggy'} />
            <Flex  alignItems={'center'} flexDirection={'column'}>
                <Heading marginTop={'50px'}>This is a Test Page</Heading>
            </Flex>
        </Flex>
    )
}

export default Test