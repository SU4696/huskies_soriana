import { collection, getFirestore, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { Promociones } from '@/types/Promociones';

export async function getPromociones(){
  const promociones: Array<Promociones> = [];
  const snapshot = await getDocs(collection(db, "Promociones"))
  snapshot.forEach((doc) => {
    const promo = doc.data();
    const { copy, idPromo, fotoPromo, title, descuento } = promo;
    promociones.push({
      titulo: title,
      descuento,
      idPromo,
      copy,
      fotoPromo
    })
    console.log(promociones);
  })

  return promociones;
}