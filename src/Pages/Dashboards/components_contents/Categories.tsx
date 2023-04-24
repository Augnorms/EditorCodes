import { 
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
      Heading,
      Text,
      Tag,
      TagLeftIcon,
      TagLabel
    } from '@chakra-ui/react'
import {TriangleDownIcon} from '@chakra-ui/icons'
import React,{useState} from 'react'
import Ecommerce from '../Templates/Ecommerce'
import Blog from '../Templates/Blog'
import TemplatePopup from '../TemplateModal/TemplatePopup'
import { FaShapes } from 'react-icons/fa'
import { BsShop } from 'react-icons/bs'
import {RiPagesLine} from 'react-icons/ri'
import {selectTemplate} from '../../../assets/context/SelectTemplateContext'
import { useContext } from 'react'
import { tempDisplay } from '../../../assets/context/ShowTemplateSelectContext'


interface Props {}

function Categories(props: Props) {
    const {} = props
    const {selectTemp, setSelectTemp} = useContext(selectTemplate)
    const {tempState} = useContext(tempDisplay)


  
    return (
        <Box width={'100%'} h={'100%'} p={'10px'}>

          
          <Box
           w={'250px'}
           h={'100px'}
           mb={'20px'}
           display={'grid'}
           gridTemplateColumns={'0.5fr 1.5fr 0.3fr'}
           alignItems={'center'}
           border={'1px'}
           p={'10px'}
          >

             <FaShapes size={25}/>

             <Text
              color={'#222222'} 
              fontSize={'24px'}
              fontWeight={'600'}
              >

                {selectTemp ? selectTemp : 'Category'}

              </Text>
 
             <Menu>
                <MenuButton
                  as={IconButton}
                  bg={'none'}
                  aria-label='none'
                  icon={<TriangleDownIcon />}
                  _hover={{bg:'none'}}
                  _expanded={{bg:'none'}}
                  _focus={{boxShadow:'none'}}
                  />

                  <MenuList 
                     w={'287px'}
                     padding={'30px 10px'}
                     position={'relative'}
                     left={{base:'50px', md:'40px', lg:'350px', '2xl':'650px'}}
                  >
                     
                      <MenuItem
                       w={'100%'}
                       bg={'none'} 
                       display={'flex'}
                       justifyContent={'center'}
                       onClick={()=>{setSelectTemp('Ecommerce')}}                 
                      >
                       
                       <Tag
                        bg={'none'}
                        w={'199px'}
                        borderBottom={'1px'}
                        p={'10px'}
                       >
                        <TagLeftIcon as={BsShop} boxSize="20px"/>
                        <TagLabel 
                          ml={'20px'}
                          fontSize={'24px'}
                          color={'#222222'}
                          fontWeight={'400'}
                          >Ecommerce</TagLabel>
                        </Tag> 
                        
                      </MenuItem>   

                      <MenuItem
                       w={'100%'}
                       bg={'none'} 
                       display={'flex'}
                       justifyContent={'center'}  
                       onClick={()=>{setSelectTemp('Blog')}}               
                      >
                       
                       <Tag
                        bg={'none'}
                        w={'199px'}
                        borderBottom={'1px'}
                        p={'10px'}
                       >
                        <TagLeftIcon as={RiPagesLine} boxSize="20px"/>
                        <TagLabel 
                          ml={'20px'}
                          fontSize={'24px'}
                          color={'#222222'}
                          fontWeight={'400'}
                          >Blog</TagLabel>
                        </Tag> 
                        
                      </MenuItem>

                  </MenuList>
      
             </Menu>
            
          </Box>

          

          <Box 
            w={'100%'}
            borderTop={'1px'} 
            height={{base:'50vh', md:"50vh", lg:"60vh", '2xl':'90vh'}}
            overflow={'auto'}
          >

            <Box w={'100%'} mb={'10px'}>
               <Heading as={'h3'}>Templates</Heading>
            </Box>

            <Box w={'100%'}>

             {
               selectTemp === 'Ecommerce'
               ?
              ( <Ecommerce /> )
                    
               : selectTemp === 'Blog' 

               ?

               (<Blog /> )

               :

               null
             } 
              

            </Box>

          </Box>


          <Box>
             {
               tempState ? (<TemplatePopup />) : null
             }
             

          </Box>

         
        </Box>
    )
}

export default Categories
