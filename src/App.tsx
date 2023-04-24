import { useState } from 'react'
import Mainroutes from './Mainroutes'
import {Box} from "@chakra-ui/react"
import SelectSidebarContent from './assets/context/SelectSidebarContent'
import NewProjectContext from './assets/context/NewProjectContext'
import SelectTemplateContext from './assets/context/SelectTemplateContext'
import ShowTemplateSelectContext from './assets/context/ShowTemplateSelectContext'
import TemplateOneEditontext from './assets/context/TemplateOneEditontext'
import TemplateOneColorContext from './assets/context/TemplateOneColorContext'
import UploadContext from './assets/context/UploadContext'
import SelectedImageContext from './assets/context/SelectedImageContext'

import './App.css'

function App() {
  

  return (
    <Box>
      
        <SelectSidebarContent>
           <NewProjectContext>
             <SelectTemplateContext>
               <ShowTemplateSelectContext>
                 <TemplateOneEditontext>
                   <TemplateOneColorContext>
                     <UploadContext>
                        <SelectedImageContext>
                            <Mainroutes />
                        </SelectedImageContext>
                      </UploadContext>  
                    </TemplateOneColorContext>
                  </TemplateOneEditontext>
               </ShowTemplateSelectContext>
             </SelectTemplateContext>
           </NewProjectContext>
         </SelectSidebarContent>
       
    </Box>
  )
}

export default App
