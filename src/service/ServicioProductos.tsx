import { collection, getFirestore, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { Producto } from '@/types/Producto';

export async function getProductos(){
  const productos: Array<Producto> = [];
  const snapshot = await getDocs(collection(db, "Productos"))
  snapshot.forEach((doc) => {
    const prod = doc.data();
    const idProduct = doc.id;
    const {image, nombre, categoria, precio } = prod;
    productos.push({
      nombre,
      categoria,
      idProduct,
      image,
      precio
    })
    console.log(productos);
  })

  return productos;
}