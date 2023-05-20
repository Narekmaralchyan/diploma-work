import {doc, getDoc, getFirestore, setDoc} from "firebase/firestore";
import {app} from "../configs/firebaseConfig";
import getUserInfo from "./getUserInfo";

async function followUser  (isFollow,currentUserId,data) {
    const db = getFirestore(app)
    const userDocRef=  doc(db,'users',data.id)
    const currentUserDocRef = doc(db,'users',currentUserId)

    const currentUserData = await getUserInfo(currentUserId)
    const newData = {...data}

    if(isFollow){
        currentUserData.follows = currentUserData.follows.filter(id => id !== data.id)
        newData.followers = newData.followers.filter(id => id !== currentUserId)
    }
    else {
        currentUserData.follows.push(data.id)
        newData.followers.push(currentUserData.id)
    }

    await setDoc(userDocRef,{...newData})
    await setDoc(currentUserDocRef,{...currentUserData})

    return newData
}
export default followUser
