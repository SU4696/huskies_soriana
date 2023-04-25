import styled from "@emotion/styled"
import Swiper from "swiper"
import Carrusel from "./Carrusel"
import SorianaMain from "src/img/sorianamain.png"


const Image = styled.img`
  max-width: 400px;
  max-height: 200px;
  width: 80%;
  margin: 0px auto;
  display:block;
`;

const ContenidoInicio = () => {
  return (
    <div className="bg-white">
        {/* <picture className="justify-center flex md:max-w-md h-36 ">
            <img
                src={SorianaMain.src}
                alt="Soriana Logo"
            />
         </picture> */}
         <Image src={SorianaMain.src} alt="Soriana Logo" />
        <div className="bg-primary rounded-t-3xl p-1">
            <div className="mt-5 md:px-100 content-center">
                <Carrusel/>
            </div>

            <p className=" lg:text-lg mt-5 mb-5 text-center font-bold">Recomendados</p>

            <div className="justify-center flex space-x-2 md:space-x-5 px-5">
                <button
                    type="button"
                    className="py-1 px-1 md:py-2 md:px-5 text-sm bg-secondary text-white md:font-medium uppercase rounded-lg  hover:bg-green-800"
                >Todos</button>

                <button
                    type="button"
                    className="py-1 px-1 md:py-2 md:px-5 text-sm bg-grayB text-black md:font-medium uppercase rounded-lg  hover:bg-gray-400"
                >Más nuevos</button>

                <button
                    type="button"
                    className="py-1 px-1 md:py-2 md:px-5 text-sm bg-grayB text-black md:font-medium uppercase rounded-lg  hover:bg-gray-400"
                >Popular</button>

                <button
                    type="button"
                    className="py-1 px-1 md:py-2 md:px-5 text-sm bg-grayB text-black md:font-medium uppercase rounded-lg  hover:bg-gray-400"
                >En Tendencia</button>

            </div>
        </div>
    </div>
  )
}

export default ContenidoInicio