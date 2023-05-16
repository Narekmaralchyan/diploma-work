import {useDispatch, useSelector} from "react-redux";
import {doc, getFirestore, setDoc} from "firebase/firestore";
import {app} from "../configs/firebaseConfig";
import {addPost} from "../redux/slices/userSlice";
import { v4 as uuid } from 'uuid';
import toast from "../components/toast";
import {useState} from "react";


const useAddNewPost = () => {
    const {userId,userData} = useSelector(state=>state.user)
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(false)
    const addNewPost = async (post) => {
        setLoading(true)
        const newPost = {
            imageUrl:post.photo.thumbUrl,
            description:post.description || '',
            comments:[],
            likes:[],
            id:uuid(),
            authorId:userId,
            postTime:Date.now()
        }
        const db = getFirestore(app)
        const docRef = doc(db,'users',userId)
        const posts = [newPost,...(userData?.posts || [])]
        await setDoc(docRef,{...userData,posts}).then(()=>{
                toast('New post','Post added successfully')
                setLoading(false)
                dispatch(addPost(newPost))
            })
            .catch(()=>{
                toast('New post','Something went wrong! Try again!')
                setLoading(false)

            })
    }
    return {addNewPost,loading}
}
export default useAddNewPost