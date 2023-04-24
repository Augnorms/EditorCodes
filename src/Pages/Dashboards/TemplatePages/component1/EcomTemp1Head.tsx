import { Box, Input, Text, InputGroup, InputRightElement, Icon, Image } from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'
import React from 'react'
import {BsCart} from 'react-icons/bs'
import { useContext } from 'react'
import { fileSelect } from '../../../../assets/context/SelectedImageContext'

interface Props {}

function EcomTemp1Head(props: Props) {
    const {fileLogo1} = useContext(fileSelect)

    return (
        <Box
          w={'100%'}
          h={'70px'}
          bg={'#15616B'}
          display={'grid'}
          gridTemplateColumns={'0.9fr 1fr 3fr 0.5fr 1fr'}
        >

            <Box 
              display={'flex'}
              alignItems={'center'}
              >

               {
                 fileLogo1 === null ?
                 (<Text 
                  textAlign={'center'}
                  fontSize={'24px'}
                  fontWeight={'800'}
                  color={'#fff'}
                  >Logo</Text>)
                   :
                  (<Image 
                   w={'50%'}
                   h={'50px'}
                   m={'0 auto'}
                   src={fileLogo1 ? URL.createObjectURL(fileLogo1):''}
                   alt={'logo1'}
                  />)
               }

            </Box>  

            <Box 
              display={'flex'}
              alignItems={'center'}
            >

                <Text 
                    textAlign={'center'}
                    fontSize={'20px'}
                    fontWeight={'600'}
                    color={'#15616B'}
                    bg={'#fff'}
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
                    <Input placeholder='search'/>
                    <InputRightElement children={<SearchIcon />}/> 
                  </InputGroup>
                </Box>

            </Box>  

            <Box 
              display={'flex'}
              alignItems={'center'}
              >
                <Icon as={BsCart} w={'30px'} h={'30px'} color={'white'}/>
            </Box>  

            <Box 
              display={'flex'}
              alignItems={'center'}
            >
                <Text fontSize={'20px'} fontWeight={'400'} color={'#fff'}>Username</Text>
            </Box>  

        </Box>
    )
}

export default EcomTemp1Head
