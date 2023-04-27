import { db } from "@/firebase/config";
import {
  updateDoc,
  doc,
} from "firebase/firestore";

const togglePostStatus = async ({ docId, status }: any) => {
  try {
    const postRef = doc(db, "Limpieza", docId);
    await updateDoc(postRef, {
      status,
    });
  } catch (err) {
    console.log(err);
  }
};

export {  togglePostStatus };
