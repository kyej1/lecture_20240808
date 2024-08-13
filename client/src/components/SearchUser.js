import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import UserSearchCard from './UserSearchCard'
import toast from 'react-hot-toast'
import axios from 'axios'
import { IoClose } from 'react-icons/io5'
import Loading from './Loading'

const SearchUser = ({onClose})=>{
    const [search, setSearch] = useState("")            //검색어 기억
    const [loading, setLoading] = useState(false)       //로딩
    const [searchUser, setSearchUser] = useState([])    //검색결과
    
    const handleSearchUser = async() => {
        const URL = `${process.env.REACT_APP_BACKEND_URL}/api/search-user`
        try{
            setLoading(true)                            //로딩화면을 화면에 뿌리
            const response = await axios.post(URL,{
                search: search
            })
            setLoading(false)
            setSearchUser(response.data.data)
        }catch(error){
            toast.error(error?.response?.data?.message)
        }
    }
    useEffect(()=>{
        handleSearchUser()
    },[search])

    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 bg-slate-700 bg-opacity-40 p-2 z-10'>
            <div className='w-full max-w-lg mx-auto mt-10'>
                {/* 검색어 입력 */}
                <div className='bg-white rounded h-14 overflow-hidden flex'>
                    <input
                        type='text'
                        placeholder='검색할 성명 및 이메일을 입력하세요'
                        className='w-full outline-none py-1 h-full px-4'
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                    <div className='h-14 w-14 flex justify-center items-center'>
                        <IoSearchOutline size={25}/>
                    </div>
                </div>
                {/* 검색 결과 표시 */}
                <div className='bg-white mt-2 w-full p-4 rounded h-[calc(100vh-160px)] overflow-x-hidden overflow-y-auto scrollbar'>
                    {
                        searchUser.length == 0 && !loading && (
                            <p className='text-center text-slate-500'>검색어에 해당하는 사람이 없습니다.</p>
                        )
                    }
                    {
                        loading && (
                            <p><Loading/></p>
                        )
                    }
                    {
                        searchUser.length !== 0 && !loading && (
                            searchUser.map((user, index) => {
                                return(
                                    <UserSearchCard key={user._id} user={user} onClose={onClose}/>
                                )
                            })
                        )
                    }
                </div>
            </div>
            {/* 닫기버튼 */}
            <div className='absolute top-0 right-0 text-2xl p-2 lg:text-4xl hover:text-white' onClick={onClose}>
                <button>
                    <IoClose/>
                </button>

            </div>
        </div>
    )
}


export default SearchUser