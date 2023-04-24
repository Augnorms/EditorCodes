import React from 'react'
import { Box, Card, CardBody, CardHeader, CardFooter, Image, Text, Button } from '@chakra-ui/react'

interface Props {}

function EcomTemplate2Items(props: Props) {
    const {} = props

    return (
        <Box
        w={'100%'}
        h={'685px'} 
        p={'20px 40px'}
        display={'grid'}
        gridTemplateColumns={'repeat(4, 1fr)'}
        gap={5}
        overflow={'auto'}
       >

           <Card  h={'370px'}>
               <CardHeader
                 p={'8px'} 
               >
                  <Image src={'/images/ecom/ecom2_1.svg'} alt={'items'}/>
               </CardHeader>
               <CardBody
               >
                  <Text
                  color={'#222222'}
                  fontWeight={'700'}
                  textAlign={'center'}
                  >GHC 1200</Text> 

                  <Text
                  color={'#222222'}
                  fontWeight={'400'}
                  textAlign={'center'}
                  fontSize={'16px'}
                  >2 Available</Text> 

                  <Box
                   w={'100%'}
                   display={'flex'}
                   justifyContent={'center'}
                   mt={'10px'}
                  >
                     <Button bg={'#15616B'} color={'#fff'}>Add to Cart</Button> 
                  </Box>

               </CardBody>
           </Card> 

           
       </Box>
    )
}

export default EcomTemplate2Items
