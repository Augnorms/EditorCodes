import { Avatar, Box, Grid, Menu, MenuButton, MenuItem, MenuList, Icon, Button } from '@chakra-ui/react'
import React from 'react'
import {RiLinksLine} from 'react-icons/ri'
import {AiFillCopy} from 'react-icons/ai'

interface Props {}

function RightEditButtons(props: Props) {
    const {} = props

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
                            <Icon as={AiFillCopy} color="#0085FF" boxSize={6} />
                        </Box> 

                    </MenuButton>

                    <MenuList
                    w={'204px'}
                    h={'46px'}
                    p={'0px'}
                    position={'absolute'}
                    top={'-65px'}
                    right={'90px'} 
                    >

                        <MenuItem _hover={{bg:'#fff'}} bg={'#fff'}>
                            <Button
                            color="#0085FF"
                            w={'204px'}
                            h={'46px'}
                            bg={'#fff'}
                            borderRadius={'none'}
                            _hover={{bg:'#fff'}}
                            >Pages</Button>
                        </MenuItem>

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
                            <Icon as={RiLinksLine} color="#FF8A00" boxSize={6} />
                        </Box> 

                    </MenuButton>

                    <MenuList
                    w={'204px'}
                    h={'46px'}
                    p={'0px'}
                    position={'absolute'}
                    top={'-65px'}
                    right={'90px'} 
                    >

                        <MenuItem _hover={{bg:'#fff'}} bg={'#fff'}>
                            <Button
                            color="#FF8A00"
                            w={'204px'}
                            h={'46px'}
                            bg={'#fff'}
                            borderRadius={'none'}
                            _hover={{bg:'#fff'}}
                            >Links</Button>
                        </MenuItem>

                    </MenuList> 
                </Menu>

            </Box>
 

        </>
    )
}

export default RightEditButtons
