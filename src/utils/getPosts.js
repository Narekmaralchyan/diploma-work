import { getDocs, getFirestore,collection,query} from "firebase/firestore";
import {app} from "../configs/firebaseConfig";

async function getPosts  (id) {
    const posts = []
    const db = getFirestore(app)
    const ref = query(collection(db,'users',id,'posts'));
    const querySnapshot = await getDocs(ref);
    querySnapshot.forEach((doc) => {
       posts.push( doc.data());
    });
    return posts
}
export default getPosts
