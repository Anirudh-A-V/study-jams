import { Box, Flex, Heading, FormControl, FormLabel, Input, Button, } from '@chakra-ui/react'
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <Flex flexDirection={'column'} bg={'#f5f5f5'}>
            <Flex alignItems={'center'} flexDirection={'column'}>

                <Heading marginTop={'50px'}>Log In</Heading>

                <Box marginTop={'50px'} minW={'300px'} bg={'#FFF'} padding={'25px'}>

                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input type='email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input type='password' />
                    </FormControl>

                    <Button marginTop={'20px'} bg={'green'} color={'white'}
                        onClick={() => setLoggedIn(true)}
                        _hover={{
                            bg: 'green.500',
                        }}
                    >
                        Log In
                    </Button>


                </Box>
                {loggedIn && <Heading color={'blue'}>{email}</Heading>}

            </Flex>
        </Flex>
    )
}

export default Login