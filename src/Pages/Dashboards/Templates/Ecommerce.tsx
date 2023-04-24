import { Box, Card, CardBody, CardFooter, Grid, Image, Text} from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { tempDisplay } from '../../../assets/context/ShowTemplateSelectContext'

interface Props {}

function Ecommerce(props: Props) {
    const {} = props

    const {tempName, setTempName, tempState, setTempState} = useContext(tempDisplay)

  

    return (
        <Grid
         templateColumns={{base:"1fr", md:"repeat(2, 1fr)", lg:"repeat(3, 1fr)", '2xl':"repeat(3, 1fr)"}}
         gap={5}
        >
            <Card
            borderRadius={'none'}
            padding={'none'}
            h={'200px'}
            boxShadow="none"
            onClick={()=>{setTempName('Ecom-Template 1'); setTempState(true);}}
            >
            
            <CardBody
              boxShadow="none"
              padding={'none'}
              _hover={{border:'6px solid #59AFFF'}}
            >

            <Image 
             src={'../../../../public/images/ecom/Banner.svg'}
             objectFit="cover"
             height="100%"
             width="100%"
             cursor={"pointer"}
            />   

            </CardBody>

            <CardFooter 
             textAlign={'center'} 
             bg={'#f6f6f6'}
             boxShadow="none"
             >
                <Text>Ecom-Template 1</Text> 
             </CardFooter>  
                
            </Card>


            <Card
            borderRadius={'none'}
            padding={'none'}
            h={'200px'}
            boxShadow="none"
            onClick={()=>{setTempName('Ecom-Template 2'); setTempState(true);}}
            >
            
            <CardBody
              boxShadow="none"
              padding={'none'}
              _hover={{border:'6px solid #59AFFF'}}
            >

            <Image 
             src={'../../../../public/images/ecom/Banner2.svg'}
             objectFit="cover"
             height="100%"
             width="100%"
             cursor={"pointer"}
            />   

            </CardBody>

            <CardFooter 
             textAlign={'center'} 
             bg={'#f6f6f6'}
             boxShadow="none"
             >
                <Text>Ecom-Template 2</Text> 
             </CardFooter>  
                
            </Card>
        </Grid>
    )
}

export default Ecommerce
