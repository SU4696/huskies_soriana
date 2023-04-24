

const ContenidoInicio = () => {
  return (
    <div className="bg-white">
        <p>Imagen</p>
        <div className="bg-primary ">
            <p className="text-center">Carrusel</p>
            <p className="sm:text-xs lg:text-lg mt-5 mb-5 text-center font-bold">Recomendados</p>
                <div className="sm:flex-1 md:justify-center md:flex space-x-5">
                    <button
                        type="button"
                        className="py-2 px-5 text-sm bg-secondary text-white font-medium uppercase rounded-lg  hover:bg-green-800"
                    >Todos</button>

                    <button
                        type="button"
                        className="py-2 px-5 text-sm bg-gray-400 text-black font-medium uppercase rounded-lg  hover:bg-gray-500"
                    >Más nuevos</button>

                    <button
                        type="button"
                        className="py-2 px-5 text-sm bg-gray-400 text-black font-medium uppercase rounded-lg  hover:bg-gray-500"
                    >Popular</button>

                    <button
                        type="button"
                        className="py-2 px-5 text-sm bg-gray-400 text-black font-medium uppercase rounded-lg  hover:bg-gray-500"
                    >En Tendencia</button>

                </div>
        </div>
    </div>
  )
}

export default ContenidoInicio