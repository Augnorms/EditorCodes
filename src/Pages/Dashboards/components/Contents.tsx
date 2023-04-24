import React from 'react'
import {Box, Divider,SlideFade, Collapse} from '@chakra-ui/react'
import NewProject from '../components_contents/NewProject'
import Categories from '../components_contents/Categories'
import { useContext } from 'react'
import { sideBarContent } from '../../../assets/context/SelectSidebarContent'
import {newProject} from '../../../assets/context/NewProjectContext'


interface Props {}

function Contents(props: Props) {
    const {} = props
    
    const {selectContent} = useContext(sideBarContent)
    const {start} = useContext(newProject)

    return (
        <Box
          h={{base:`76.7vh`, md:`76.7vh`, lg:`calc(100vh - 90px)`, '2xl':`calc(100vh - 90px)`}}
          bg={'#f6f6f6'}
          padding="10px"
          overflow={'auto'}
        >

         
            {
              selectContent === 'dashboard'
              ?
              (
                
                <Box h={'100%'}>

                  Dashbord contents

                </Box>

              )
              : selectContent === 'project'
              ?
              (
                <SlideFade in={selectContent === 'project'} initialScale={0.9}>

                  <Box h={'100%'}>

                  {   
                    !start ?

                    (<NewProject />)
                    
                    :

                     (<Categories />)
                     
                  }

                   </Box>

                </SlideFade>
              )
              :
              null
            }
       
            
        </Box>
    )
}

export default Contents
