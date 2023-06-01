import { collection, getFirestore, query, where, getDocs } from "firebase/firestore";
import { db } from '@/firebase/config';
import { Historia } from "@/types/Historias";

export async function getHistoria(email = ""){
    const historias: Array<Historia> = [];
    const q = query(collection(db, "Compra"), where("correo", "==", email));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        const hist = doc.data();
        const idHistoria = doc.id;
    
        const {  correo, discount, subtotal, total } = hist;
        historias.push({
          idHistoria,
          correo,
          discount,
          subtotal,
          total,
        })
        console.log(historias);
      })

    return historias;
}