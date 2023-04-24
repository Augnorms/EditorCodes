import { Avatar, Box, Grid, Menu, MenuButton, MenuItem,
     MenuList, Icon, Button, Input, HStack, Text} from '@chakra-ui/react'
import React from 'react'
import {BiPlusMedical} from 'react-icons/bi'
import {BsSquare} from 'react-icons/bs'
import {MdFileUpload} from 'react-icons/md'
import FontExtend_Heading from '../sub-component-temp1-text/FontExtend_Heading'
import FontExtend_Subheading from '../sub-component-temp1-text/FontExtend_Subheading'
import FontExtend_Foottext from '../sub-component-temp1-text/FontExtend_Foottext'
import { useContext } from 'react'
import { uplaodSelect } from '../../../assets/context/UploadContext'

interface Props {}

function LeftEditButtons(props: Props) {

    const {showUp, setShowUp, select, setSelect} = useContext(uplaodSelect)

   

    return (
       
        <>

            <Box
                w={'100%'}
                p={'5px'}
            >

                <Menu>
                    <MenuButton>
                        <Box
                            w={14}
                            h={14}
                            rounded="full"
                            bg="#fff"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            boxShadow={'xl'}
                        >
                            <Icon as={BiPlusMedical} color="#0085FF" boxSize={6} />
                        </Box> 

                    </MenuButton>

                    <MenuList
                        w={'30%'}
                        h={'60vh'}
                        p={'10px'}
                        position={'absolute'}
                        top={'-65px'}
                        left={'80px'} 
                        bg={'rgba(246, 246, 246, 0.7)'}
                        borderRadius={'0px'}
                        color={'#222'}
                    >

                        <FontExtend_Heading />
                        <FontExtend_Subheading />
                        <FontExtend_Foottext />

                    </MenuList> 
                </Menu>

            </Box>


            <Box
                w={'100%'}
                p={'5px'}
            >

                <Menu>
                    <MenuButton>
                        <Box
                            w={14}
                            h={14}
                            rounded="full"
                            bg="#fff"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            boxShadow={'xl'}
                        >
                            <Icon as={BsSquare} bg="#FC7225" boxSize={6} />
                        </Box> 

                    </MenuButton>

                    <MenuList
                        w={'204px'}
                        h={'30vh'}
                        p={'0px'}
                        position={'absolute'}
                        top={'-65px'}
                        left={'80px'} 
                        bg={'rgba(246, 246, 246, 0.7)'}
                        borderRadius={'0px'}
                        color={'#222'}
                    >

                      <MenuItem
                       mb={'10px'} 
                       >Head section</MenuItem>

                      <MenuItem
                       mb={'10px'} 
                      >Banner section</MenuItem>

                      <MenuItem
                       mb={'10px'} 
                      >Cart Section</MenuItem>

                      <MenuItem
                       mb={'10px'} 
                      >Footer Section</MenuItem>

                    </MenuList>
                </Menu>

            </Box>


            <Box
                w={'100%'}
                p={'5px'}
            >

                <Menu>
                    <MenuButton>
                        <Box
                            w={14}
                            h={14}
                            rounded="full"
                            bg="#fff"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            boxShadow={'xl'}
                        >
                            <Icon as={MdFileUpload} color="#59AFFF" boxSize={6} />
                        </Box> 

                    </MenuButton>

                    <MenuList
                        w={'204px'}
                        h={'30vh'}
                        p={'0px'}
                        position={'absolute'}
                        top={'-65px'}
                        left={'80px'} 
                        bg={'rgba(246, 246, 246, 0.7)'}
                        borderRadius={'0px'}
                        color={'#222'}
                    >

                      <MenuItem 
                       mb={'10px'} 
                       textAlign={'center'}
                       onClick={()=>{
                         setShowUp(true);
                         setSelect('logos')
                       }}
                       >
                         <Text>Logos</Text>
   
                     </MenuItem>


                      <MenuItem 
                       mb={'10px'} 
                       textAlign={'center'}
                       onClick={()=>{
                        setShowUp(true);
                        setSelect('bannerimage')
                      }}
                       >
                        <Text>BannerImages</Text>

                       </MenuItem>

                    </MenuList>

                    
                </Menu>

            </Box>
           
        </>

    )
}

export default LeftEditButtons
