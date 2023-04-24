import React from 'react'
import { Box, Text, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react'
import { AiFillAppstore } from 'react-icons/ai'
import { BsFillBagFill } from 'react-icons/bs'
import { useContext } from 'react'
import { sideBarContent } from '../../../assets/context/SelectSidebarContent'
import { newProject } from '../../../assets/context/NewProjectContext'




function SideBar() {

const {selectContent, setSelectContent} = useContext(sideBarContent)
const {setStart} = useContext(newProject)
  
const handleSelect = (e:React.MouseEvent)=>{
     let target = e.currentTarget.id
     setSelectContent(target)
     setStart(false)
}


  return (
    <Box
      bg={'#00284C'}
      height={{ lg: 'calc(100vh - 90px)'}}
    >

        <Tag
          size={'md'}
          borderRadius={'none'}
          padding={'10px'}
          bg={selectContent ==='dashboard' ? '#59AFFF': ''}
          m={'27px 0'}
        >
          <TagLeftIcon
            boxSize="20px"
            as={AiFillAppstore}
            color={'#FFF'}
            ml={'50px'}
          />
          <TagLabel 
           fontSize={'16px'} 
           ml="10px" 
           color={'#fff'} 
           id={'dashboard'}
           onClick={handleSelect}
           cursor={'pointer'}
           >
            Dashboard
           </TagLabel>
        </Tag>


    
        <Tag
          size={'md'}
          borderRadius={'none'}
          padding={'10px'}
          bg={selectContent ==='project' ? '#59AFFF': ''}
          mb={'27px'}
        >
          <TagLeftIcon
            boxSize="20px"
            as={BsFillBagFill}
            color={'#FFF'}
            ml={'50px'}
          />
          <TagLabel 
           fontSize={'16px'} 
           ml="10px" 
           color={'#fff'} 
           id={'project'}
           cursor={'pointer'}
           onClick={handleSelect}
           >
             Project
           </TagLabel>
        </Tag>

    </Box>
  )
}

export default SideBar
