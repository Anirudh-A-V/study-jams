import { useState } from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import { Navbar } from '../components/Navbar/Navbar'
import Login from './Login'

const Test = () => {

    return (
        <Flex flexDirection={'column'} bg={'#f5f5f5'} minHeight={'100vh'} >

            <Navbar Name={'Veggy'} />

            <Flex alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
                {/* <Heading marginTop={'50px'}>This is a Test Page</Heading> */}

                <Login />

            </Flex>
        </Flex>
    )
}

export default Test