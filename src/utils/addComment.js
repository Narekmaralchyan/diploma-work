
import {getDocs, getFirestore, collection, query, setDoc, doc} from "firebase/firestore";
import {app} from "../configs/firebaseConfig";

async function addComment  (comment,post) {
    const postWithNewComment = {
        ...post,
        comments:[comment,...(post.comments || [])]
    }
    const db = getFirestore(app)
    const ref = doc(db,'users',post.authorId,'posts',post.id);
    await setDoc(ref,{...postWithNewComment})
    return postWithNewComment;
}
export default addComment
