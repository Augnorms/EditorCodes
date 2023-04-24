import {Text, Box, Divider, Tag, TagLabel, 
  TagLeftIcon, TagRightIcon, } from '@chakra-ui/react'
import React from 'react'
import {BsFillFileEarmarkFill, BsPlusLg} from 'react-icons/bs'
import {FaPlus} from 'react-icons/fa'
import {AiOutlineFile} from 'react-icons/ai'
import { useContext } from 'react'
import { newProject } from '../../../assets/context/NewProjectContext'



interface Props {}

function ProjContent(props: Props) {
    const {} = props

    const {start, setStart} = useContext(newProject)

    const handleStart = ()=>{
      setStart(true)
    }



    return (
        <Box width={'100%'} h={'100%'}>

           
            <Box>
                <Tag bg="#fff" 
                 borderRadius={'none'}
                 w={'352px'}
                 h={'100px'}
                 padding={'14px'}
                 border={'2px'}
                 borderColor={'#00284C'}
                 cursor={'pointer'}
                 onClick={handleStart}
                 >
                    <TagLeftIcon as={AiOutlineFile}
                      fontSize={'28px'}

                    />

                      <TagLabel m={'32px 0'} 
                       fontSize={'24px'}
                       fontWeight={'600'}
                      >
                        New Project
                    </TagLabel>

                    <TagRightIcon as={FaPlus} 
                     mr={'14px'} 
                     fontSize={'40px'} 
                     fontWeight={'600'}
                     color={'#00284C'}
                     id={'createProject'}
                     />  
                </Tag>
            </Box>

             <Box padding={'20px 20px'}><hr  color='##AAAAAA'/></Box>

            <Box>

              <Box><Text color={'#222222'} fontSize={'32px'} fontWeight={'600'}>Recent</Text></Box> 

            </Box>
             
        

        </Box>
    )
}

export default ProjContent
