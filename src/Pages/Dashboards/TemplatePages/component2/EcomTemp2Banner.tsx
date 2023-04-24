import React from 'react'
import { Box, Heading, Image, Text } from '@chakra-ui/react'

interface Props {}

function EcomTemp2Banner(props: Props) {
    const {} = props

    return (
        <Box
        w={'100%'}
        h={'400px'}
   
       >

         <Box
          w={'100%'}
          h={'100%'}
          border={'1px'}
          position="relative"
         >

            <Image 
             src={'../../../../../public/images/ecom/Banner2.svg'} 
             alt={'banner1'}
             style={{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }}
             objectFit={'cover'}
             />

         </Box>  

       </Box>
    )
}

export default EcomTemp2Banner
