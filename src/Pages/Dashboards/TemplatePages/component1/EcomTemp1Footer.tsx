import { Box, Center, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {TfiTwitter} from 'react-icons/tfi'
import {AiTwotonePhone} from 'react-icons/ai'
import { useContext } from 'react'
import { TemponeText } from '../../../../assets/context/TemplateOneEditontext'
import { TemponeColorChange } from '../../../../assets/context/TemplateOneColorContext'

interface Props {}

function EcomTemp1Footer(props: Props) {
    const {} = props

    const {temponetext, TextSizeFooter} = useContext(TemponeText)
    const {FootColors} = useContext(TemponeColorChange)

    return (
        <Box
         w={'100%'}
         h={'200px'}
         bg={'#222222'}
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
                      color={FootColors === '' ? '#fff' : FootColors}
                      fontSize={TextSizeFooter != '' ? TextSizeFooter :'18px'}
                      fontWeight={'300'}
                    >
                        {
                          temponetext.footertext == "" ?  
                        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Ullam nostrum ea et non.'
                        :
                         temponetext.footertext
                        }
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

export default EcomTemp1Footer
