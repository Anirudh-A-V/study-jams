import React from 'react'
import { Box, Flex, SimpleGrid } from "@chakra-ui/react"
import { Navbar } from "../components/Navbar/Navbar"
import Cards from '../components/Cards/Cards'

export const Home = () => {
  const Name = [
    'Hello World',
    'How are you',
    'Lorem Lipsum',
    'Karthik',
    'Dhananjay',
    'Sai',
    'Sanjay',
  ]

  return (
    <Flex flexDirection={'column'}>
      <Navbar />
      <SimpleGrid spacing={1} templateColumns='repeat(4, 1fr)'  paddingLeft={'200px'} paddingRight={'200px'}>

        {Name.map((item, index) => {
          return (
            <Cards Name={item}  key={index} />
          )
        })}

      </SimpleGrid>
    </Flex>
  )
}

