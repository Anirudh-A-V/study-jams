import { useState } from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import { Navbar } from '../components/Navbar/Navbar'
import Login from './Login'
import { LoginContext } from '../contexts/LoginContext'

const Test = () => {

    const [email, setEmail] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <Flex flexDirection={'column'} bg={'#f5f5f5'} minHeight={'100vh'} >

            <Navbar Name={'Veggy'} />

            <Flex alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>

                <LoginContext.Provider value={{email, setEmail, loggedIn, setLoggedIn}}>
                    <Login />
                </LoginContext.Provider>

                {loggedIn && <Heading color={'blue'}>{email}</Heading>}
            </Flex>
        </Flex>
    )
}

export default Test