import React from 'react'
import Topbar from '@/components/Topbar';
import ContenidoInicio from '@/components/ContenidoInicio';
import Producto from '@/components/Producto';
import ProductoG from '@/components/ProductoG';

function main() {
  return (
    <React.Fragment>
        <Topbar  />
        <ProductoG />
        <Producto />

    </React.Fragment>
  )
}

export default main