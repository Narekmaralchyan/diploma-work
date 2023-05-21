import { getDocs, getFirestore,collection,query,where} from "firebase/firestore";
import {app} from "../configs/firebaseConfig";

async function searchUsers  (name) {
    const users = []
    const db = getFirestore(app)
    const ref = query(collection(db,'users'));
    const querySnapshot = await getDocs(ref);
    querySnapshot.forEach((doc) => {
        const userData = doc.data()
        if(userData.name.toLowerCase().includes(name.toLowerCase()) || userData.lastName.toLowerCase().includes(name.toLowerCase())){
            users.push( userData);
        }
    });
    return users
}
export default searchUsers
