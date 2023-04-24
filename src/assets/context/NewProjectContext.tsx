import React,{useState} from 'react'
import { createContext, Dispatch, SetStateAction } from 'react'

interface Props {}

interface Create{
    start:boolean,
    setStart:Dispatch<SetStateAction<boolean>>
}


export const newProject = createContext<Create>({
    start:false,
    setStart:()=>{}
})


function NewProjectContext({children}:any) {
  
    const[start, setStart] = useState<boolean>(false)

    return (
        <newProject.Provider value={{start, setStart}}>
          {children}
        </newProject.Provider>
    )
}

export default NewProjectContext
