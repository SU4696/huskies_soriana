import { collection, getFirestore, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { Producto } from '@/types/Producto';

export async function getProductos(){
  const productos: Array<Producto> = [];
  const snapshot = await getDocs(collection(db, "Productos"))
  snapshot.forEach((doc) => {
    const prod = doc.data();
    const idProduct = doc.id;
    const {image, idProductos, nombre, categoria, precio, pasillo, descuento } = prod;
    productos.push({
      idProductos,
      nombre,
      categoria,
      idProduct,
      image,
      precio,
      pasillo,
      descuento
    })
    console.log(productos);
  })

  return productos;
}