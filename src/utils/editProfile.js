
import { getFirestore, setDoc, doc} from "firebase/firestore";
import {app} from "../configs/firebaseConfig";
import getUserInfo from "./getUserInfo";

async function editUser  (id,data) {
    let newUserData = await getUserInfo(id)
    newUserData = {
        ...newUserData,
        name:data.name,
        lastName:data.lastName,
        avatarUrl:data.avatarUrl.thumbUrl
    }
    const db = getFirestore(app)
    const ref = doc(db,'users',id);
    await setDoc(ref,{...newUserData})
    return newUserData;
}
export default editUser
