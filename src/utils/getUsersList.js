import {getDocs, getFirestore, collection, query, }  from "firebase/firestore";
import {app} from "../configs/firebaseConfig";

async function getUsersList  (list) {
    const users = []
    const db = getFirestore(app)
    const ref = query(collection(db,'users'));
    const querySnapshot = await getDocs(ref);
    querySnapshot.forEach((doc) => {
        const userData = doc.data()
        if(list && list.includes(userData.id)){
            users.push( userData);
        }
    });
    return users
}
export default getUsersList
