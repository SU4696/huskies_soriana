import {db} from "@/firebase/config";
import {  doc, setDoc } from "firebase/firestore";

export default async function addData(colllection: any, id: any, data: any) {
    let result = null;
    let error = null;

    try {
        result = await setDoc(doc(db, colllection, id), data, {
            merge: true,
        });
    } catch (e) {
        error = e;
    }

    return { result, error };
}