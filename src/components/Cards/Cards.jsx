import React, { useState } from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'

const Cards = ({Name}) => {

    const [count, setCount] = useState(0);

    return (
        <>
            <Card maxW='240px'>
                <CardBody>
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{Name}</Heading>
                        <Text color='blue.600' fontSize='2xl'>
                            {count}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue' onClick={() => { setCount(count - 1) }}>
                            -
                        </Button>
                        <Button variant='ghost' colorScheme='blue' onClick={() => { setCount(count + 1) }}>
                            +
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    )
}

export default Cards