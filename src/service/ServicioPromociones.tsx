import { collection, getFirestore, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { Promociones } from '@/types/Promociones';

export async function getPromociones(){
  const promociones: Array<Promociones> = [];
  const snapshot = await getDocs(collection(db, "Promociones"))
  snapshot.forEach((doc) => {
    const promo = doc.data();
    const { precio, idProductos, image, nombre, descuento } = promo;
    promociones.push({
      nombre: nombre,
      descuento,
      precio,
      idProductos,
      image
    })
    console.log(promociones);
  })

  return promociones;
}