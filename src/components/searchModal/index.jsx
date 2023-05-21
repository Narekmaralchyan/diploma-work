import SSearchModal from "./SSearchModal";
import {useDispatch, useSelector} from "react-redux";
import {closeSearchModal} from "../../redux/slices/modalSlice";
import {useEffect, useState} from "react";
import {Input} from "antd";
import searchUsers from "../../utils/searchUsers";
import SearchResult from "../searchResult";

const debounce = (callback, delay) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
};

const SearchModal = ()=>{
    const {isOpenSearchModal} = useSelector(state=>state.modals)
    const dispatch = useDispatch()
    const [inputValue,setInputValue] = useState('')
    const [users,setUsers] = useState([])
    const handleCloseModal = ()=>{
        setInputValue('')
         dispatch(closeSearchModal())
    }
    let timerId = null
    useEffect(() => {
        if (inputValue) {
            clearTimeout(timerId)
            timerId = setTimeout(()=>{
                searchUsers(inputValue).then((users) => {
                    setUsers(users);
                });
            },500)
        } else {
            setUsers([]);
        }
        return () => clearTimeout(timerId);
    }, [inputValue]);

    return(
        <SSearchModal
            open={isOpenSearchModal}
            onCancel={handleCloseModal}
            footer={null}
        >
        <Input placeholder='Search users' value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
            <div className='searchResult'>
                <SearchResult users={users} closeModal={handleCloseModal} />
            </div>
        </SSearchModal>
    )
}

export default SearchModal