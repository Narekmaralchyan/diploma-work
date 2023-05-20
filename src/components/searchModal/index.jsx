import SSearchModal from "./SSearchModal";
import {useDispatch, useSelector} from "react-redux";
import {closeSearchModal} from "../../redux/slices/modalSlice";
import {useState} from "react";
import {Input} from "antd";

const SearchModal = ()=>{
    const {isOpenSearchModal} = useSelector(state=>state.modals)
    const dispatch = useDispatch()
    const [inputValue,setInputValue] = useState('')
    const handleCloseModal = ()=>{
         dispatch(closeSearchModal())
    }


    return(
        <SSearchModal
            open={isOpenSearchModal}
            onCancel={handleCloseModal}
            footer={null}
        >
        <Input placeholder='Search users' value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
            <div className='searchResult'>

            </div>
        </SSearchModal>
    )
}

export default SearchModal