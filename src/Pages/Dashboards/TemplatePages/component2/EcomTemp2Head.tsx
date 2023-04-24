import { Box, Input, Text, InputGroup, InputRightElement, Icon } from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'
import React from 'react'
import {BsCart} from 'react-icons/bs'

interface Props {}

function EcomTemp2Head(props: Props) {
    const {} = props

    return (
        <Box
        w={'100%'}
        h={'70px'}
        bg={'#fff'}
        display={'grid'}
        gridTemplateColumns={'0.9fr 1fr 3fr 0.5fr 1fr'}
      >

          <Box 
            display={'flex'}
            alignItems={'center'}
            >

             <Text 
               textAlign={'center'}
               fontSize={'24px'}
               fontWeight={'800'}
               color={'#1F71BC'}
               >Logo</Text>

          </Box>  

          <Box 
            display={'flex'}
            alignItems={'center'}
          >

              <Text 
                  textAlign={'center'}
                  fontSize={'20px'}
                  fontWeight={'600'}
                  color={'#fff'}
                  bg={'#1F71BC'}
                  p={'4px'}
                  borderRadius={'8px'}
                  >Wholesale</Text>

          </Box>  

          <Box 
            display={'flex'}
            alignItems={'center'}
          >

             <Box 
              w={'60%'} 
              m={'0px auto'} 
              bg={'#fff'}
              borderRadius={'5px'}
              > 
                <InputGroup>
                  <Input placeholder='search' border={'1px'} borderColor={'#1F71BC'}/>
                  <InputRightElement children={<SearchIcon color={'#1F71BC'}/>}/> 
                </InputGroup>
              </Box>

          </Box>  

          <Box 
            display={'flex'}
            alignItems={'center'}
            >
              <Icon as={BsCart} w={'30px'} h={'30px'} color={'#1F71BC'}/>
          </Box>  

          <Box 
            display={'flex'}
            alignItems={'center'}
          >
              <Text fontSize={'20px'} fontWeight={'400'} color={'#1F71BC'}>Username</Text>
          </Box>  

      </Box>
    )
}

export default EcomTemp2Head
