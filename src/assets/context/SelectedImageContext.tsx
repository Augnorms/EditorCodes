import React from 'react'
import { createContext, useState, useRef, Dispatch, SetStateAction } from 'react'

interface Images {
   fileBanner:null,
   setFileBanner:Dispatch<SetStateAction<null>>,

   fileLogo1:null,
   setFileLogo1:Dispatch<SetStateAction<null>>
}

export const fileSelect = createContext<Images>({
    fileBanner:null,
    setFileBanner:()=>{},

    fileLogo1:null,
    setFileLogo1:()=>{}
})

function SelectedImageContext({children}:any) {
    const [fileBanner, setFileBanner] = useState<null>(null)
    const [fileLogo1, setFileLogo1] = useState<null>(null)


    return (
        <fileSelect.Provider value={{fileBanner, setFileBanner, 
        fileLogo1, setFileLogo1}}>
            {children}
        </fileSelect.Provider>
    )
}

export default SelectedImageContext
