import {doc, getFirestore, setDoc} from "firebase/firestore";
import {app} from "../configs/firebaseConfig";

async function likePost  (isLiked,currentUserId,post) {
    const db = getFirestore(app)
    const docRef=  doc(db,'users',post.authorId,'posts',post.id)
    const newPost = {...post}
    if(isLiked){
        newPost.likes = newPost.likes.filter(id => id !== currentUserId)
    }
    else {
        newPost.likes.push(currentUserId)
    }
    await setDoc(docRef,{...newPost})
    return newPost
}
export default likePost
