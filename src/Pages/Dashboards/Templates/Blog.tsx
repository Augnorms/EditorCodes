import React from 'react'
import { Box, Card, CardBody, CardFooter, Grid, Image, Text} from '@chakra-ui/react'

interface Props {}

function Blog(props: Props) {
    const {} = props

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
           >
           
            <CardBody
                boxShadow="none"
                padding={'none'}
                _hover={{border:'6px solid #59AFFF'}}
            >

            <Image 
                src={'../../../../public/images/Blog/Rectangle 1756.svg'}
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
                <Text>Blog-Template 1</Text> 
                </CardFooter>  
               
           </Card>


           <Card
           borderRadius={'none'}
           padding={'none'}
           h={'200px'}
           boxShadow="none"
           >
           
            <CardBody
                boxShadow="none"
                padding={'none'}
                _hover={{border:'6px solid #59AFFF'}}
            >

            <Image 
                src={'../../../../public/images/Blog/Rectangle 1757.svg'}
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
                <Text>Blog-Template 2</Text> 
            </CardFooter>  
               
           </Card>


           <Card
           borderRadius={'none'}
           padding={'none'}
           h={'200px'}
           boxShadow="none"
           >
           
            <CardBody
                boxShadow="none"
                padding={'none'}
                _hover={{border:'6px solid #59AFFF'}}
            >

            <Image 
                src={'../../../../public/images/Blog/Rectangle 1758.svg'}
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
                <Text>Blog-Template 3</Text> 
            </CardFooter>  
               
           </Card>
       </Grid>
    )
}

export default Blog
