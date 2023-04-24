import React, { useState, createContext, Dispatch, SetStateAction } from 'react';

interface Text {
  temponetext: {
    head: string;
    subhead: string;
    footertext: string;
  };
  setTemponetext: Dispatch<
    SetStateAction<{
      head: string;
      subhead: string;
      footertext: string;
    }>
  >;

  unique:string,
  setUnique: Dispatch<SetStateAction<string>>,

  TextSizeHead:string,
  setTextSizeHead:Dispatch<SetStateAction<string>>,

  TextSizeSubHead:string,
  setTextSizeSubHead:Dispatch<SetStateAction<string>>,

  TextSizeFooter:string,
  setTextSizeFooter:Dispatch<SetStateAction<string>>
  
}



interface PropText{
    head: string;
    subhead: string;
    footertext: string;
}

export const TemponeText = createContext<Text>({
  temponetext: {
    head: '',
    subhead: '',
    footertext: '',
  },
  setTemponetext: () => {},

  unique:'',
  setUnique:()=>{},

  TextSizeHead:'',
  setTextSizeHead:()=>{},

  TextSizeSubHead:'',
  setTextSizeSubHead:()=>{},

  TextSizeFooter:'',
  setTextSizeFooter:()=>{}

});




function TemplateOneEditontext({ children }: any) {
  const [temponetext, setTemponetext] = useState<PropText>({
    head: '',
    subhead: '',
    footertext: '',
  });

  const [TextSizeHead, setTextSizeHead] = useState<string>('')

  const [unique, setUnique] = useState<string>('')

  const [TextSizeSubHead, setTextSizeSubHead] = useState<string>('')

  const [TextSizeFooter, setTextSizeFooter] = useState<string>('')

  return (
    <TemponeText.Provider value={{ temponetext: temponetext, setTemponetext, 
      TextSizeHead, setTextSizeHead, unique, setUnique, 
      TextSizeSubHead, setTextSizeSubHead, TextSizeFooter, setTextSizeFooter}}>
      
         {children}
      
    </TemponeText.Provider>
  );
}

export default TemplateOneEditontext;
