import {doc, getDoc, getFirestore} from "firebase/firestore";
import {app} from "../configs/firebaseConfig";

  async function getUserInfo  (id) {
    const db = getFirestore(app)
    const docRef  = doc(db,'users',id)
    const docSnap = await getDoc(docRef)
    return  docSnap.data()
}
export default getUserInfo
