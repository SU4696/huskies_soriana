import { Image } from '@chakra-ui/react';
// Importar mapas
import Mapa_abarrotes from "src/img/mapas/mapa_abarrotes.png";
import Mapa_blanca from "src/img/mapas/mapa_blanca.png";
import Mapa_carniceria from "src/img/mapas/mapa_carniceria.png";
import Mapa_deportes from "src/img/mapas/mapa_deportes.png";
import Mapa_farmacia from "src/img/mapas/mapa_farmacia.png";
import Mapa_frutasverduras from "src/img/mapas/mapa_frutasverduras.png";
import Mapa_hogar from "src/img/mapas/mapa_hogar.png";
import Mapa_jugueteria from "src/img/mapas/mapa_jugueteria.png";
import Mapa_lacteos from "src/img/mapas/mapa_lacteos.png";
import Mapa_licoreria from "src/img/mapas/mapa_licoreria.png";
import Mapa_muebles from "src/img/mapas/mapa_muebles.png";
import Mapa_panaderia from "src/img/mapas/mapa_panaderia.png";
import Mapa_pescaderia from "src/img/mapas/mapa_pescaderia.png";
import Mapa_plano from "src/img/mapas/mapa_plano.png";
import Mapa_ropa from "src/img/mapas/mapa_ropa.png";
import Mapa_salchichoneria from "src/img/mapas/mapa_salchichoneria.png";
import Mapa_temporada from "src/img/mapas/mapa_temporada.png";

const Mapita = ({categoria}: {categoria: string}) => {
    var Mapa = Mapa_plano;
    switch (categoria) {
        case "Abarrotes":
            Mapa = Mapa_abarrotes;
            break;
        case "Bebés":
            Mapa = Mapa_ropa;
            break;
        case "Congelados":
            Mapa = Mapa_lacteos;
            break;
        case "Electrodomésticos":
            Mapa = Mapa_blanca;
            break;
        case "VinosLicores":
            Mapa = Mapa_licoreria;
            break;
        case "Muebles":
            Mapa = Mapa_muebles;
            break;
        case "Limpieza":
            Mapa = Mapa_hogar;
            break;
        case "Farmacia":
            Mapa = Mapa_farmacia;
            break;
        case "Frutas y verduras":
            Mapa = Mapa_abarrotes;
            break;
        case "Juguetería":
            Mapa = Mapa_jugueteria;
            break;
    }

    return(
        <Image src={Mapa.src} alt='Mapa de producto'></Image>
    )
}

export default Mapita