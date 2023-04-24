import { Box, Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { uplaodSelect } from '../../../assets/context/UploadContext'
import { useState, useRef } from 'react';
import { fileSelect } from '../../../assets/context/SelectedImageContext';

interface Props {}

function ImageUpload(props: Props) {
    const {select, setShowUp} = useContext(uplaodSelect)

    const {fileBanner, setFileBanner, fileLogo1, setFileLogo1} = useContext(fileSelect)

  
    const fileInputRef = useRef<HTMLInputElement>(null);
  
    const handleFileInput = (event:any) => {
      setFileBanner(event.target.files[0]);
    };

    const handleLogo1 = (e:any)=>{
      setFileLogo1(e.target.files[0])
    }



    return (
        <Box
         w={'100%'}
         h={'90vh'}
         bg={'rgba(246, 246, 246, 0.2)'}
         position={'absolute'}
         left={'0'}
         top={'87px'}
         display={'flex'}
         alignItems={'center'}
         justifyContent={'center'}
         boxShadow={'xl'}
         
        >

          { select === 'logos'  ?
             (<Box
             w={'40%'}
             h={'300px'}
             bg={'#fff'}
             p={'50px'}
           >
             
             <Box
              w={'100%'}
              h={'100%'}
             >

                <Box>

                   <Text
                    color={'#222222'}
                    fontSize={'24px'}
                    fontWeight={'600'}
                    mb={'10px'}
                   >Upload File</Text> 

                </Box>

                <Box
                  w={'100%'}
                  display={'flex'}
                  
                >

                  <Box
                   w={'70%'}
                   h={'57px'}
                   boxShadow={'xl'}
                   
                  >
                   <Input
                    w={'100%'} 
                    h={'100%'}
                    borderRadius={'0px'}
                    type='file'
                    onChange={handleLogo1}
                    ref={fileInputRef} 
                    />
                  </Box>

                  <Box
                   w={'30%'}
                   h={'57px'} 
                  >

                    <Button
                     w={'100%'}
                     h={'100%'}
                     bg={'#00284C'}
                      _hover={{bg:"#00284C"}}
                      color={'#fff'}
                      borderRadius={'0px'}
                      onClick={() => fileInputRef.current && fileInputRef.current.click()}
                    >

                      Browse   

                    </Button>

                  </Box>
                    
                </Box>

                <Box
                 display={'flex'}
                 justifyContent={'flex-end'}
                 mt={'40px'}
                 
                >

                    <Button
                      borderRadius={'0px'}
                      w={'200px'}
                      h={'40px'}
                      color={'#fff'}
                      bg={'#00284C'}
                      _hover={{bg:"#00284C"}}
                      onClick={()=>{setShowUp(false)}}
                    >{fileLogo1 ? 'Save' : 'Cancel'}</Button>
                    
                </Box>

             </Box>
             
           </Box>)
            
            : select === 'bannerimage'
            ?

           (<Box
             w={'40%'}
             h={'300px'}
             bg={'#fff'}
             p={'50px'}
           >
             
             <Box
              w={'100%'}
              h={'100%'}
             >

                <Box>

                   <Text
                    color={'#222222'}
                    fontSize={'24px'}
                    fontWeight={'600'}
                    mb={'10px'}
                   >Upload File</Text> 

                </Box>

                <Box
                  w={'100%'}
                  display={'flex'}
                
                >

                  <Box
                   w={'70%'}
                   h={'57px'}
                   boxShadow={'xl'}
                   
                  >

                    <Input
                      w={'100%'} 
                      h={'100%'}
                      borderRadius={'0px'}
                      type='file'
                      onChange={handleFileInput}
                      ref={fileInputRef}
                      />

                  </Box>

                  <Box
                   w={'30%'}
                   h={'57px'} 
                  >

                    <Button
                     w={'100%'}
                     h={'100%'}
                     bg={'#00284C'}
                      _hover={{bg:"#00284C"}}
                      color={'#fff'}
                      borderRadius={'0px'}
                      onClick={() => fileInputRef.current && fileInputRef.current.click()}
                    >

                      Browse   

                    </Button>

                  </Box>
                    
                </Box>

                <Box
                 display={'flex'}
                 justifyContent={'flex-end'}
                 mt={'40px'}
                 
                >

                    <Button
                      borderRadius={'0px'}
                      w={'200px'}
                      h={'40px'}
                      color={'#fff'}
                      bg={'#00284C'}
                      _hover={{bg:"#00284C"}}
                      onClick={()=>{setShowUp(false)}}
                    >{fileBanner ? 'Save' : 'Cancel'}</Button>
                    
                </Box>

             </Box>
             
           </Box>)
           :
           null
          }
            
        </Box>
    )
}

export default ImageUpload
