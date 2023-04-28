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

import { Producto } from "@/types/Producto";

interface ProductoCardProps {
    prod: Producto;
}

const ProductoCard:React.FC<ProductoCardProps> = ({prod}) => {

    const { nombre, image, precio } = prod;

    return(
        <>
            {/* <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            mx={2}
            my={4}
            >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={fotoProduct}
                alt='Promo image'
            />

            <Stack>
                <CardBody>
                <Heading size='md'>{nombre}</Heading>

                <Text py='2'>
                {copy}
                </Text>
                </CardBody>

                <CardFooter>
                <Button leftIcon={<ViewIcon/>}>
                    Ver producto
                </Button>
                </CardFooter>
            </Stack>
            </Card> */}

            <div className="bg-white">
                <button
                    type="button"
                    className="py-1 px-1 md:py-2 md:px-5 text-sm text-white md:font-medium rounded-lg hover:bg-gray-100"
                >
                    <Image src={image} alt={nombre} />
                    <p className="lg:text-lg text-black mb-50 text-center font-bold ">{nombre}</p>
                    <p className="text-black mb-5 text-center">{precio}</p>
                </button>
            </div>
        </>
    )
}

export default ProductoCard;