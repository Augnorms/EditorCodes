import React from 'react'
import { Box, Text } from '@chakra-ui/react'

interface Props {}

function EcomTemp2SubHead1(props: Props) {
    const {} = props

    return (
        <Box
        w={'100%'}
        h={'70px'}
        bg={'#fff'}
        p={'10px'}
       >

          <Box
           w={'70%'}
           h={'100%'}
           m={'0px auto'}
           display={'grid'}
           gridTemplateColumns={'repeat(5, 1fr)'}
           alignItems={'center'}
           overflow={'auto'}
          >
           
           <Text
             textAlign={'center'}
             p={'5px'}
             color={'#1F71BC'}
             fontSize={'20px'}
             fontWeight={'400'}
           >Women</Text> 

          </Box>  

       

       </Box>
    )
}

export default EcomTemp2SubHead1
