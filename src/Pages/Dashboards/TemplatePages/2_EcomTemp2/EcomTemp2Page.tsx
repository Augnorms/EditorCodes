import { Box } from '@chakra-ui/react'
import React from 'react'
import EcomTemp2Head from '../component2/EcomTemp2Head'
import EcomTemp2SubHead1 from '../component2/EcomTemp2SubHead1'
import EcomTemp2Banner from '../component2/EcomTemp2Banner'
import EcomTemplate2Items from '../component2/EcomTemplate2Items'
import EcomTemp2Footer from '../component2/EcomTemp2Footer'
import EcomTemp2SubHead2 from '../component2/EcomTemp2SubHead2'
import EcomTemp2TextArea from '../component2/EcomTemp2TextArea'

interface Props {}

function EcomTemp2Page(props: Props) {
    const {} = props

    return (
        <Box
         w={'100%'} 
        >

          <EcomTemp2Head />
          <EcomTemp2SubHead1 />
          <EcomTemp2SubHead2 />
          <EcomTemp2Banner /> 
          <EcomTemplate2Items />
          <EcomTemp2TextArea />
          <EcomTemp2Footer />

        </Box>
    )
}

export default EcomTemp2Page
