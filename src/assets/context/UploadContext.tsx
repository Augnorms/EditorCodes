import React from 'react'
import { useState, createContext, Dispatch, SetStateAction} from 'react'

interface UploadProps {
    showUp:boolean,
    setShowUp:Dispatch<SetStateAction<boolean>>,

    select:string,
    setSelect:Dispatch<SetStateAction<string>>
}

export const uplaodSelect = createContext<UploadProps>({
    showUp:false,
    setShowUp:()=>{},

    select:'',
    setSelect:()=>{}

}) 

function UploadContext({children}:any) {

    const[showUp, setShowUp] = useState<boolean>(false)
    const[select, setSelect] = useState<string>('')

    return (
        <uplaodSelect.Provider value={{showUp, setShowUp, select, setSelect}}>
            {children}
        </uplaodSelect.Provider>
    )
}

export default UploadContext
