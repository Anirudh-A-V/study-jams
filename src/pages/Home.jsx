import React, { useState, useEffect } from 'react'
import { Flex, SimpleGrid, Input } from "@chakra-ui/react"
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

  const [query, setQuery] = useState('')
  const [name, setName] = useState([])
  const [image, setImage] = useState([])

  useEffect(() => {
    fetch(process.env.REACT_APP_VEGETABLE_API)
      .then(res => res.json())
      .then(
        (data) => {
          console.log(data)
          setName(data.map((item) => item.name))
          console.log(name)
        }
      )
  }, [])

  function search(items) {
    return items.filter((name) => name.toLowerCase().includes(query.toLowerCase()))
  }

  return (
    <Flex flexDirection={'column'} bg={'#F5F5F5'}>
      <Navbar Name={'Veggy'} />

      <Input variant='outline' placeholder='Outline' onChange={(e) => setQuery(e.target.value)} />

      <SimpleGrid spacing={1} templateColumns='repeat(4, 1fr)' paddingLeft={'200px'} paddingRight={'200px'} paddingTop={'50px'} paddingBottom={'50px'}>
        {search(name).map((item, index) => {
          return (
            <Cards Name={item} key={index} />
          )
        })}

      </SimpleGrid>
    </Flex>
  )
}

