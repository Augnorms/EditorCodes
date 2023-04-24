import React from 'react'
import { Box, Image, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

interface Props {}

function EcomTemplate2(props: Props) {
    const {} = props

    return (
      <Box
        w={'100%'}
        h={'100%'} 
      >
            <Box 
             w={'150px'}
             h={'100px'}
             position={'relative'}
             top={'60vh'}
             left={{base:'500px', lg:"900px", '2xl':'1988px'}}
            >
              <Button
                 w={'100%'} 
                 bg={'#00284C'} 
                 color={'#fff'}
                 _hover={{bg:"#00284C"}}
                 borderRadius={'none'}
               >

                  <Link to={'/editor/ecomTemp2'}>
                      Edit
                  </Link>

                </Button> 
                
            </Box>

          <Image src={'../../../../../public/images/ecom/Landing page ecom2.svg'}/>

      </Box>
    )
}

export default EcomTemplate2
