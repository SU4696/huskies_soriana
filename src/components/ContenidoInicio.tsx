import Carrusel from "./Carrusel"


const ContenidoInicio = () => {
  return (
    <div className="bg-white">
        <p>Imagen</p>
        <div className="bg-primary ">
            <Carrusel/>
            <p className=" lg:text-lg mt-5 mb-5 text-center font-bold">Recomendados</p>
                <div className="justify-center flex space-x-2 md:space-x-5 px-5">
                    <button
                        type="button"
                        className="py-1 px-1 md:py-2 md:px-5 text-sm bg-secondary text-white md:font-medium uppercase rounded-lg  hover:bg-green-800"
                    >Todos</button>

                    <button
                        type="button"
                        className="py-1 px-1 md:py-2 md:px-5 text-sm bg-gray-400 text-black md:font-medium uppercase rounded-lg  hover:bg-gray-500"
                    >Más nuevos</button>

                    <button
                        type="button"
                        className="py-1 px-1 md:py-2 md:px-5 text-sm bg-gray-400 text-black md:font-medium uppercase rounded-lg  hover:bg-gray-500"
                    >Popular</button>

                    <button
                        type="button"
                        className="py-1 px-1 md:py-2 md:px-5 text-sm bg-gray-400 text-black md:font-medium uppercase rounded-lg  hover:bg-gray-500"
                    >En Tendencia</button>

                </div>
        </div>
    </div>
  )
}

export default ContenidoInicio