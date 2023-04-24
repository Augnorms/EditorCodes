import { Box, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {}

function EcomTemp2SubHead2(props: Props) {
    const {} = props

    return (
        <Box
          w={'100%'}
          h={'140px'}
        >
   
           <Box
            w={'70%'}
            h={'100%'}
            m={'0px auto'}
            textAlign={'center'}
           >

             <Text 
              mb={'10px'}
              fontSize={'40px'}
              fontWeight={'400'}
              color={'#222'}
              >Loriem Emporium</Text>

             <Text
               fontSize={'20px'}
               fontWeight={'400'}
               color={'#222'}
             >
               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nunc vulputate libero et velit.
             </Text>
             
           </Box>
          

        </Box>
    )
}

export default EcomTemp2SubHead2
