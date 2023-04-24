import React from 'react'
import { createContext, Dispatch, SetStateAction, useState } from 'react'

interface Colors {
    FootColors:any
    setFootcolor:Dispatch<SetStateAction<any>>,

    headColor:any,
    setHeadColor:Dispatch<SetStateAction<any>>,

    subHeadColor:any,
    setSubHeadColor:Dispatch<SetStateAction<any>>

}



export const TemponeColorChange = createContext<Colors>({
    FootColors:'',
    setFootcolor:()=>{} ,
     
    headColor:'',
    setHeadColor:()=>{},

    subHeadColor:'',
    setSubHeadColor:()=>{}
})

function TemplateOneColorContext({children}:any) {

    const [headColor, setHeadColor] = useState<any>('')
    const [FootColors, setFootcolor] = useState<any>('')
    const [subHeadColor, setSubHeadColor] = useState<any>('')
  

    return (
        <TemponeColorChange.Provider value={{FootColors, setFootcolor,
            headColor, setHeadColor, subHeadColor, setSubHeadColor}}>
            {children}
        </TemponeColorChange.Provider>
    )
}

export default TemplateOneColorContext
