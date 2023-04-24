import React,{useState} from 'react'
import { createContext, Dispatch, SetStateAction } from 'react'

interface Props {}

interface PopUpTemp{
    tempName:string,
    setTempName:Dispatch<SetStateAction<string>>,
    tempState:boolean,
    setTempState:Dispatch<SetStateAction<boolean>>
}

export const tempDisplay = createContext<PopUpTemp>({
    tempName:'',
    setTempName:()=>{},
    tempState:false,
    setTempState:()=>{}
})

function ShowTemplateSelectContext({children}:any) {
    const [tempName, setTempName] = useState<string>('')
    const [tempState, setTempState] = useState<boolean>(false)

    return (
        <tempDisplay.Provider value={{tempName, setTempName, tempState, setTempState}}>
            {children}
        </tempDisplay.Provider>
    )
}

export default ShowTemplateSelectContext
