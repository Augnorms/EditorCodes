import React,{useState} from 'react'
import { createContext, Dispatch, SetStateAction } from 'react'

interface Props {}

interface Templates{
    selectTemp:string,
    setSelectTemp:Dispatch<SetStateAction<string>>
}

export const selectTemplate = createContext<Templates>({
    selectTemp:'',
    setSelectTemp:()=>{}
})

function SelectTemplateContext({children}:any) {


    const [selectTemp, setSelectTemp] = useState<string>('')

    return (
        <selectTemplate.Provider value={{selectTemp, setSelectTemp}}>
            {children}
        </selectTemplate.Provider>
    )
}

export default SelectTemplateContext
