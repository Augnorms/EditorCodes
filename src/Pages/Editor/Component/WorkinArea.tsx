import { Box,  } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import LeftEditButtons from './LeftEditButtons'
import RightEditButtons from './RightEditButtons'
import EcomTemp1Page from '../../Dashboards/TemplatePages/1_EcomTemp1/EcomTemp1Page'
import EcomTemp2Page from '../../Dashboards/TemplatePages/2_EcomTemp2/EcomTemp2Page'


interface Props {}

function WorkinArea(props: Props) {
    const {} = props
    const param = useParams()



    return (
        <Box w={'100%'}>

            <Box display={'flex'}>

               <Box
                w={'6%'}
                h={'936px'}
                bg={'#fff'}
 
               >
              
                 <LeftEditButtons />

               </Box> 

               <Box
                w={'88%'}
                bg={'#f6f6f6'}
               >

               {
                 param.tempname === 'ecomTemp1' 
                 ?

                 (<EcomTemp1Page />)

                 : param.tempname === 'ecomTemp2'

                 ?

                 (<EcomTemp2Page />)

                 :

                 null
                  
               }

               </Box>


               <Box
                w={'6%'}
                h={'936px'}
                bg={'#fff'}
    
               >

                <RightEditButtons />

               </Box>

            </Box>

        </Box>
    )
}

export default WorkinArea
