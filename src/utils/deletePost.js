import {doc, getFirestore,deleteDoc } from "firebase/firestore";
import {app} from "../configs/firebaseConfig";
async function deletePost (postInfo) {
    const db = getFirestore(app)
    const docRef=  doc(db,'users',postInfo.authorId,'posts',postInfo.id)
    await deleteDoc(docRef)

}

export default deletePost