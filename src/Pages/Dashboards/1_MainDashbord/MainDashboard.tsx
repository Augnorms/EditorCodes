import React, { useEffect } from 'react'
import {Image, Box, Grid} from "@chakra-ui/react"
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Contents from '../components/Contents'

interface Props {}

function MainDashboard(props: Props) {
    const {} = props





    return (
        <Box
         w={'100%'}
         h={{base:'', md:'', lg:'100vh', '2xl':'100vh'}}
        >
          <Header />

          <Grid templateColumns={{base:'1fr', md:'1fr', lg:`0.29fr 1fr`, '2xl':'0.22 1fr'}}>
            <SideBar />
            <Contents />
          </Grid>
          
       
        </Box>
    )
}

export default MainDashboard
