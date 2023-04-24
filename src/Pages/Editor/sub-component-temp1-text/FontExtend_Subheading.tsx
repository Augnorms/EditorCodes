import { Avatar, Box, Grid, Menu, MenuButton, MenuItem,
    MenuList, Icon, Button, Input, HStack, Text} from '@chakra-ui/react'
import {MdPlayArrow} from 'react-icons/md'
import { CompactPicker } from 'react-color';
import { useContext } from 'react';
import { TemponeText } from '../../../assets/context/TemplateOneEditontext';
import { TemponeColorChange } from '../../../assets/context/TemplateOneColorContext';

interface Props {}

function FontExtend_Subheading(props: Props) {
    const {} = props
    const {temponetext, setTemponetext, setUnique, setTextSizeSubHead} = useContext(TemponeText)

    const {subHeadColor, setSubHeadColor} = useContext(TemponeColorChange)

    const handleColorChange = (color:any)=>{
        setSubHeadColor(color.hex)
    }

    return (
        <Box
        w={'100%'}
        display={'flex'}
        mb={'10px'}
       >

             <Box 
                w={'20%'}
                display={'flex'}
                alignItems={'center'}
                color={'#222'}
                fontWeight={'500'}
                 >SubHead</Box>

                      <Box 
                       w={'70%'}
                       >
                          <Input 
                           name={'subhead'}
                           borderRadius={'0px'} 
                           bg={'#fff'}
                           placeholder='sub heading here..'
                           value={temponetext.subhead}
                           onChange={(e)=>{
                              const {value, name} = e.target
                              setTemponetext((prevState)=>({
                                 ...prevState, subhead:value 
                              }));
                              setUnique(name)
                           }}
                           />
                          
                      </Box>

                      <Box 
                        w={'10%'}
                        display={'flex'}
                        alignItems={'center'}
                       >
                          <Menu>
                              <MenuButton>
                                 <Icon as={MdPlayArrow}/>
                              </MenuButton>

                              <MenuList
                                 w={'30%'}
                                 h={'10vh'}
                                 p={'10px'}
                                 position={'absolute'}
                                 top={'-35px'}
                                 left={'50px'} 
                                 bg={'rgba(246, 246, 246, 0.7)'}
                                 borderRadius={'0px'}
                                 color={'#222'}
                              >

                                <Box
                                 w={'100%'}
                                 display={'flex'}
                                 mb={'10px'}
                                >

                                  <Box w={'90%'}>Fonts</Box>
                                  <Box w={'10%'}>
                                      <Menu>
                                          <MenuButton><Icon as={MdPlayArrow}/></MenuButton>

                                          <MenuList
                                             w={'30%'}
                                             p={'10px'}
                                             position={'absolute'}
                                             top={'-35px'}
                                             left={'36px'} 
                                             bg={'rgba(246, 246, 246, 0.7)'}
                                             borderRadius={'0px'}
                                             color={'#222'}
                                          >

                                              <MenuItem 
                                               bg={'rgba(246, 246, 246, 0.7)'}
                                               color={'#222'}
                                               onClick={()=>{setTextSizeSubHead('64px')}} 
                                              >
                                                  <Text  
                                                   textAlign={'center'}
                                                   fontSize={'20px'}
                                                   >
                                                      H1 Heading 64px
                                                  </Text>
                                              </MenuItem>

                                              <MenuItem 
                                               bg={'rgba(246, 246, 246, 0.7)'}
                                               color={'#222'}
                                               onClick={()=>{setTextSizeSubHead('48px')}} 
                                              >
                                                  <Text  
                                                   textAlign={'center'}
                                                   fontSize={'17px'}
                                                   >
                                                      H1 Heading 48px
                                                  </Text>
                                              </MenuItem>

                                              <MenuItem 
                                               bg={'rgba(246, 246, 246, 0.7)'}
                                               color={'#222'}
                                               onClick={()=>{setTextSizeSubHead('24px')}} 
                                              >
                                                  <Text  
                                                   textAlign={'center'}
                                                   fontSize={'14px'}
                                                   >
                                                      H1 Heading 24px
                                                  </Text>
                                              </MenuItem>

                                              <MenuItem 
                                               bg={'rgba(246, 246, 246, 0.7)'}
                                               color={'#222'}
                                               onClick={()=>{setTextSizeSubHead('16px')}} 
                                              >
                                                  <Text  
                                                   textAlign={'center'}
                                                   fontSize={'11px'}
                                                   >
                                                      H1 Heading 16px
                                                  </Text>
                                              </MenuItem>

                                          </MenuList>
                                      </Menu>
                                  </Box>
                                   
                                </Box>


                                <Box
                                 w={'100%'}
                                 display={'flex'}
                                >

                                  <Box w={'90%'}>Colors</Box>
                                  <Box w={'10%'}>
                                      <Menu>
                                          <MenuButton><Icon as={MdPlayArrow}/></MenuButton>

                                          <MenuList
                                             w={'320px'}
                                             p={'10px'}
                                             position={'absolute'}
                                             top={'-35px'}
                                             left={'36px'} 
                                             bg={'rgba(246, 246, 246, 0.7)'}
                                             borderRadius={'0px'}
                                             color={'#222'}
                                          >
                                              <MenuItem  w="300px" bg={'rgba(246, 246, 246, 0.7)'}>
                                                 <CompactPicker 
                                                   color={subHeadColor}
                                                   onChange={handleColorChange}
                                                 />
                                              </MenuItem>
                                          </MenuList>
                                      </Menu>
                                  </Box>
                                   
                                </Box>

                          </MenuList>
                       </Menu>
               </Box>
       </Box>
    )
}

export default FontExtend_Subheading
