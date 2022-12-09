import React, { useState } from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Input } from '@chakra-ui/react'

const Cards = ({ Name }) => {

    const [count, setCount] = useState(0);

    return (
        <>
            <Card maxW='240px' _hover={{
                boxShadow: 'xl',
            }}>
                <CardBody>
                    <Image
                        src='https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3' alignItems={'center'}>
                        <Heading size='md'>{Name}</Heading>
                        <Text color='grey.600' fontSize='2xl'>
                            ₹ 100
                        </Text>
                    </Stack>
                </CardBody>
                {/* <Divider /> */}
                <CardFooter flexDirection={'column'} alignItems={'center'}>
                    <ButtonGroup spacing='4'>
                        <Button variant='solid' bg={'green'} color={'white'} _hover={{bg: 'green.500'}} onClick={() => { setCount(count - 1) }}>
                            -
                        </Button>
                        <Input type='number' value={count} onChange={(e) => setCount(e.target.value)} maxW={'50px'} />
                        <Button variant='ghost' bg={'green'} color={'white'} _hover={{bg: 'green.500'}} border={'1px'} onClick={() => { setCount(count + 1) }}>
                            +
                        </Button>
                    </ButtonGroup>
                    <Button marginTop={'20px'} maxW={'100px'} variant='solid' bg={'green'} color={'white'} _hover={{bg: 'green.500'}}>
                        Add to Card
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default Cards