import SFollowingUsersModal from "./SFollowingUsersModal";
import {useDispatch, useSelector} from "react-redux";
import {closeFollowingUsersModal} from "../../redux/slices/modalSlice";
import SearchResult from "../searchResult";
import {useEffect, useState} from "react";
import getUserInfo from "../../utils/getUserInfo";
import getUsersList from "../../utils/getUsersList";

const FollowingUsersModal = ()=>{
    const {isOpenFollowingUsersModal} = useSelector(state => state.modals)
    const dispatch = useDispatch()
    const [users,setUsers] = useState([])

    useEffect( ()=>{
        getUsersList(isOpenFollowingUsersModal)
            .then(users=>{
                setUsers(users)
            })
    },[isOpenFollowingUsersModal])

    const handleCloseModal = ()=>{
        dispatch(closeFollowingUsersModal())
        setUsers([])

    }

    return(
        <SFollowingUsersModal
            open={isOpenFollowingUsersModal}
            onCancel={handleCloseModal}
            footer={null}
        >
            <SearchResult users={users} closeModal={handleCloseModal} />
        </SFollowingUsersModal>
    )
}

export default FollowingUsersModal;