import { Box, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {}

function EcomTemp1SubHead(props: Props) {
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
              color={'#15616B'}
              fontSize={'20px'}
              fontWeight={'400'}
            >Women</Text> 

           </Box>  

        

        </Box>
    )
}

export default EcomTemp1SubHead
