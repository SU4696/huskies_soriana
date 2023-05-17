import { ViewIcon } from "@chakra-ui/icons";
import {
    Card, 
    Stack, 
    Flex,
    CardBody,
    Image,
    Heading,
    Text,
    CardFooter,
    Button
} from "@chakra-ui/react"

import { Promociones } from "@/types/Promociones";

interface PromosCardProps {
    promo: Promociones;
}

const PromosCard:React.FC<PromosCardProps> = ({promo}) => {

    const { titulo, fotoPromo, copy } = promo;

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
                src={fotoPromo}
                alt='Promo image'
            />

            <Flex>
                <CardBody>
                <Heading size='md'>{titulo}</Heading>

                <Text py='2'>
                {copy}
                </Text>
                </CardBody>

                <CardFooter>
                <Button leftIcon={<ViewIcon/>}>
                    Ver producto
                </Button>
                </CardFooter>
            </Flex>
            </Card>
        </>
    )
}

export default PromosCard;