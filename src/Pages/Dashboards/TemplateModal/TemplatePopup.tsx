import { Box, Tooltip } from '@chakra-ui/react'
import React from 'react'
import EcomTemp1 from '../TemplateModalImage/EcomTemp1'
import EcomTemp2 from '../TemplateModalImage/EcomTemp2'
import { useContext } from 'react'
import { tempDisplay } from '../../../assets/context/ShowTemplateSelectContext'

interface Props {}

function TemplatePopup(props: Props) {
    const {} = props

    const {tempName, tempState, setTempState} = useContext(tempDisplay)

    

    return (

          <Box
            position={'fixed'}
            top={'0px'}
            left={'0px'}
            width={'100%'}
            height={'100%'}
            zIndex={'9999'}
            bg={'rgba(0,0,0,0.2)'}
            cursor={'pointer'}
            onClick={()=>{setTempState(false)}}
          >

     

              <Box
                width={'80%'}
                margin={'0 auto'}
                height={'auto'}
                bg={'#fff'}
                mt={'180px'}
              >
              { tempName === 'Ecom-Template 1' && tempState
              ?
                (<EcomTemp1 /> )

              : tempName === 'Ecom-Template 2' && tempState
              ?
                (<EcomTemp2 />  )
              :
              null
              }

              </Box>

 

          </Box>

    )
}

export default TemplatePopup
