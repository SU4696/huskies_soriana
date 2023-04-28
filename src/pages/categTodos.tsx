import React from 'react'
import Topbar from '@/components/Topbar';
import Producto from '@/components/Producto';
import ProductoG from '@/components/ProductoG';
import Categoria from '@/components/Categoria';
import ProductoCard from '@/components/ProductoCard';

function main() {
  return (
    <React.Fragment>
        <Topbar titulo={"Todos"} />
        <Categoria />
    </React.Fragment>
  )
}

export default main