import { ViewIcon } from "@chakra-ui/icons";
import {
    Card, 
    Stack, 
    CardBody,
    Image,
    Heading,
    Text,
    CardFooter,
    Button
} from "@chakra-ui/react"

const PromosCard = () => {
    return(
        <>
            <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            mx={2}
            my={4}
            >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                alt='Promo image'
            />

            <Stack>
                <CardBody>
                <Heading size='md'>Promo heading</Heading>

                <Text py='2'>
                    This is supposed to come from firebase
                </Text>
                </CardBody>

                <CardFooter>
                <Button leftIcon={<ViewIcon/>}>
                    Ver producto
                </Button>
                </CardFooter>
            </Stack>
            </Card>
        </>
    )
}

export default PromosCard;