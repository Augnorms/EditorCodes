import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { TemponeText } from '../../../../assets/context/TemplateOneEditontext'
import { TemponeColorChange } from '../../../../assets/context/TemplateOneColorContext'
import { fileSelect } from '../../../../assets/context/SelectedImageContext'

interface Props {}

function EcomTemp1Banner(props: Props) {
    const {} = props

    const {temponetext, TextSizeHead, unique, TextSizeSubHead} = useContext(TemponeText)
    const {headColor, subHeadColor} = useContext(TemponeColorChange)
    const {fileBanner, fileLogo1} = useContext(fileSelect)


    return (
        <Box
         w={'100%'}
         h={'400px'}
    
        >

          <Box
           w={'100%'}
           h={'100%'}
           border={'1px'}
           position="relative"
          >

          <Image 
            src={fileBanner ? URL.createObjectURL(fileBanner) : '../../../../../public/images/ecom/newBanner.svg'} 
            alt={'banner1'}
            style={{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }}
            objectFit={'cover'}
          />

          </Box>  

          <Box
           w={'100%'}
           textAlign={'center'}
           position={'relative'}
           top={'-300px'}
           left={'0px'}
          >

             <Heading 
               color={headColor === '' ? '#fff' : headColor} 
               ml={'70px'}
               fontSize={TextSizeHead != '' && unique === 'heading' ? TextSizeHead : '64px'}
               >{temponetext.head == "" ? 'Loriem Emporium' : temponetext.head }</Heading>

             <Text
              color={subHeadColor === '' ? '#fff' : subHeadColor} 
              fontSize={TextSizeSubHead != '' && unique === 'subhead' ? TextSizeSubHead : '24px'}
              fontWeight={'500'}
             >
                {temponetext.subhead == "" ?
                
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit.'
                :
                temponetext.subhead
              }
             </Text>
          </Box>

        </Box>
    )
}

export default EcomTemp1Banner
