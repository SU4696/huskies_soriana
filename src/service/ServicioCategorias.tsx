import { collection, getFirestore, query, where, getDocs } from "firebase/firestore";
import { db } from '@/firebase/config';
import { Producto } from '@/types/Producto';

export async function getCategoria(categoria = ""){
  const productos: Array<Producto> = [];
  const q = query(collection(db, "Productos"), where("categoria", "==", categoria));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const prod = doc.data();
    const idProduct = doc.id;
    const {image, idProductos, nombre, categoria, precio } = prod;
    productos.push({
      idProductos,
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
