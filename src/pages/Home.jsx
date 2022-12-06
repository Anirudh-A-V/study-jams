import React from 'react'
import { Box} from "@chakra-ui/react"
import {Navbar} from "../components/Navbar/Navbar"


export const Home = () => {
  return (
   <Box bg={{base:"red",md:"blue",lg:"green"}} height="100vh">
   <Navbar/>

   </Box>
  )
}

