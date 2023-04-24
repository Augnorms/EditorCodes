import { Box } from '@chakra-ui/react'
import React from 'react'
import Head from '../Component/Head'
import WorkinArea from '../Component/WorkinArea'
import ImageUpload from '../imageUpload/ImageUpload'
import { useContext } from 'react'
import { uplaodSelect } from '../../../assets/context/UploadContext'

interface Props {}

function Editor(props: Props) {
    const {showUp} = useContext(uplaodSelect)
 



    return (
        <Box
         w={'100%'}
        >

          <Head />

          <WorkinArea />

          {showUp ? <ImageUpload /> : null }
  
        </Box>
    )
}

export default Editor
