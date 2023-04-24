import { Box } from '@chakra-ui/react'
import React from 'react'
import EcomTemp1Head from '../component1/EcomTemp1Head'
import EcomTemp1SubHead from '../component1/EcomTemp1SubHead'
import EcomTemp1Banner from '../component1/EcomTemp1Banner'
import EcomTemp1Items from '../component1/EcomTemp1Items'
import EcomTemp1Footer from '../component1/EcomTemp1Footer'

interface Props {}

function EcomTemp1Page(props: Props) {
    const {} = props

    return (
        <Box 
         w={'100%'}
        >

          <EcomTemp1Head />  
          <EcomTemp1SubHead />
          <EcomTemp1Banner />
          <EcomTemp1Items />
          <EcomTemp1Footer />
             
        </Box>
    )
}

export default EcomTemp1Page
