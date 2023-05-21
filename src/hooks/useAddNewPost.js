import {useDispatch, useSelector} from "react-redux";
import {doc, getFirestore, setDoc} from "firebase/firestore";
import {app} from "../configs/firebaseConfig";
import { v4 as uuid } from 'uuid';
import toast from "../components/toast";
import {useState} from "react";
import {addPost} from "../redux/slices/postsSlice";


const useAddNewPost = () => {
    const {userId} = useSelector(state=>state.user)
    const [loading,setLoading] = useState(false)
    const dispatch = useDispatch()
    const addNewPost = async (post) => {
        setLoading(true)
        const newPost = {
            imageUrl:post.photo.thumbUrl,
            description:post.description || '',
            likes:[],
            id:uuid(),
            authorId:userId,
            postTime:Date.now(),
            comments:[]
        }
        const db = getFirestore(app)
        const docRef = doc(db,'users',userId,'posts',newPost.id)
        await setDoc(docRef,newPost).then(()=>{
            dispatch(addPost(newPost))
            toast('New post','Post added successfully')
                setLoading(false)
            })
            .catch(()=>{
                toast('New post','Something went wrong! Try again!')
                setLoading(false)
            })
    }
    return {addNewPost,loading}
}
export default useAddNewPost