import React, { createContext, Dispatch, SetStateAction, useState } from 'react'

interface Props {
    selectContent: string,
    setSelectContent: Dispatch<SetStateAction<string>>
}

export const sideBarContent = createContext<Props>({
    selectContent: "",
    setSelectContent: () => {}
})

function SelectSidebarContent({ children }: { children: React.ReactNode }) {
    const [selectContent, setSelectContent] = useState<string>('')

    return (
        <sideBarContent.Provider value={{ selectContent, setSelectContent }}>
            {children}
        </sideBarContent.Provider>
    )
}

export default SelectSidebarContent
