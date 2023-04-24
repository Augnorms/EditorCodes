import React from 'react'
import {Avatar, 
    Box, Button, Grid, IconButton, Menu, 
    MenuButton, MenuItem, MenuList, Text,
    HStack,
    Icon, 
    Divider

} from '@chakra-ui/react'
import {TriangleDownIcon} from '@chakra-ui/icons'
import {BiDesktop} from 'react-icons/bi'
import {BsPhone} from 'react-icons/bs'



interface Props {}

function Head(props: Props) {
    const {} = props

    return (
       <Grid
        w={'100%'}
        h={'88px'}
        templateColumns={'1.1fr 1fr 1fr 1fr 1fr'}
        bg={'#fff'}
       >

            <Box w={'100%'} h={'100%'}  display={'flex'} alignItems={'center'}>

               
                 <Box w={'100%'} display={'flex'}>
                   <Avatar 
                     name='Augustine Normanyo' mr={'10px'}
                     bg={'#D9D9D9'}
                     />

                   <Text 
                     p={'10px'}
                     fontSize={'16px'}
                     color={'#00284C'}
                     >
                         Augustine Normanyo
                    </Text> 
                     
                    <Menu >
                        
                      <MenuButton
                         w={'10px'}
                         fontSize={'10px'}
                         as={IconButton}                
                         bg={'none'}
                         aria-label='none'
                         icon={<TriangleDownIcon />}
                         _hover={{bg:'none'}}
                         _expanded={{bg:'none'}}
                         _focus={{boxShadow:'none'}}
                         mt={'4px'}  
                      />
                
                       <MenuList w={'21%'} ml={'2px'} >
                            <MenuItem _hover={{bg:'none'}}>
                            <button >Logout</button>
                            </MenuItem>
                       </MenuList>

                    </Menu>
                 </Box>
             

            </Box>

            <Box w={'100%'} h={'100%'} display={'flex'} alignItems={'center'} ml={'50px'}>

                <Text color={'#222222'}>Hire a professional</Text>

            </Box>

            <Box w={'100%'} h={'100%'}   display={'flex'} 
            alignItems={'center'} justifyContent={'center'}>

                <Box display={'flex'} justifyContent={'center'}>

                    <Box display={'flex'} justifyContent={'end'} pr={'10px'}>

                      <Icon as={BiDesktop} w={'30px'} h={'29px'} />

                    </Box>
                      
                    <Box borderLeft={'1px'} pl={'10px'}>

                      <Icon as={BsPhone} w={'20px'} h={'30px'}  />

                    </Box>

                </Box>

            </Box>

            <Box w={'100%'} h={'100%'} display={'flex'} alignItems={'center'}>

                <HStack gap={4}>
                    <Button
                     borderRadius={'none'}
                     bg={'#00284C'}
                     color={'#fff'}
                     _hover={{bg:'#00284C'}}
                    >
                        Save
                        
                    </Button>

                    <Button
                     borderRadius={'none'}
                     bg={'#00284C'}
                     color={'#fff'}
                     _hover={{bg:'#00284C'}}
                    >
                        Publish
                    </Button>
                </HStack>

            </Box>

            <Box w={'100%'} h={'100%'} display={'flex'} alignItems={'center'}>

               <Box w={'100%'} >
                    <Text
                     textAlign={'center'}
                     color={'#0085FF'}
                     fontSize={'24px'}
                     fontWeight={'900'}
                    >
                        StoreFront
                    </Text>
               </Box>

            </Box>

       </Grid>
    )
}

export default Head
