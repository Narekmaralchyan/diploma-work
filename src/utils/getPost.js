import {doc, getDoc, getFirestore, } from "firebase/firestore";
import {app} from "../configs/firebaseConfig";

async function getPost  (authorId,postId) {
    const db = getFirestore(app)
    const docRef=  doc(db,'users',authorId,'posts',postId)
    const docSnap = await getDoc(docRef)
    return docSnap.data()
}
export default getPost
