import { db } from "@/firebase/config";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  Timestamp,
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
