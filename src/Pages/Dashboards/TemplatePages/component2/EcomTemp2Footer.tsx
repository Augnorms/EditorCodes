import { Box, Center, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {TfiTwitter} from 'react-icons/tfi'
import {AiTwotonePhone} from 'react-icons/ai'


interface Props {}

function EcomTemp2Footer(props: Props) {
    const {} = props

    return (
        <Box
        w={'100%'}
        h={'200px'}
        bg={'#1F71BC'}
        display={'flex'}
        alignItems={'center'}
       >

           <Box
            w={'70%'}
            m={'0px auto'}
            display={'grid'}
            gridTemplateColumns={'1fr 1fr 1fr'}
           >
               <Box>
                   <Text 
                     color={'#fff'}
                     fontSize={'50px'}
                     fontWeight={'800'}
                     textAlign={'center'}
                     >Logo</Text>
               </Box>

               <Box>
                   <Text 
                     color={'#fff'}
                     fontSize={'18px'}
                     fontWeight={'300'}
                   >
                       Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                       Ullam nostrum ea et non.
                   </Text>
               </Box>

               <Box>

                   <Box
                     display={'flex'}
                     justifyContent={'center'}
                     p={'10px'}
                   >

                       <Icon as={FaFacebookF} color={'#fff'} m={'5px'}/>
                       <Icon as={AiOutlineInstagram} color={'#fff'} m={'5px'}/>
                       <Icon as={TfiTwitter} color={'#fff'} m={'5px'}/>

                   </Box>

                   <Box
                       display={'flex'}
                       justifyContent={'center'}
                       p={'10px'}
                   >
                       
                       <Text color={'#fff'} textAlign={'center'}>
                       <Icon as={AiTwotonePhone} color={'#fff'} mr={'10px'}/>
                           0244436566
                       </Text>
                   </Box>

               </Box>

           </Box>

       </Box>
    )
}

export default EcomTemp2Footer
