import React, { useState, createContext } from 'react';



const defaultState = {
  categoria: "",
  nombre: "",
  idProductos: 0
};

export const MapaContext = createContext(defaultState);

// export default MapaContext;

interface Props {
    children?: React.ReactNode;
  }

export const MapaContextProvider: React.FC<Props> = ({children}) => {
    const [categoria, setCategoria] = useState(defaultState.categoria)
    const [nombre, setNombre] = useState(defaultState.nombre)
    const [idProductos, setIdProductos] = useState(defaultState.idProductos)

    return(
        <MapaContext.Provider value={{
            categoria,
            nombre,
            idProductos
        }}>
            {children}
        </MapaContext.Provider>
    )
}