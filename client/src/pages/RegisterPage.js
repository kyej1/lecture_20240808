import React, {useState} from "react"
import { useNavigate } from 'react-router-dom'
import { IoClose } from 'react-icons/io5'
import uploadFile from '../helpers/uploadFile'
import axios from 'axios'
import toast from 'react-hot-toast'

const RegisterPage = () => {
    {/* 자 로직을 넣어보자 */}
    const [data,setData] = useState({
        name: "",
        email: "",
        password: "",
        profile_pic: ""
    })
    const [uploadPhoto,setUploadPhoto] = useState("")
    const navigate = useNavigate()
    const handleOnChange = (e) => {
        const {name,value} = e.target
        setData((preve)=>{
            return{
                ...preve,
                [name]:value
            }
        })
    }
    const handleUploadPhoto = async(e) => {
        const file = e.target.files[0]
        const uploadPhoto = await uploadFile(file)
        console.log(`이미지경로는?:${JSON.stringify(uploadPhoto)}`)
        setUploadPhoto(uploadPhoto)
        setData((preve)=>{
            return{
                ...preve,
                profile_pic: uploadPhoto?.url
            }
        })
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        e.stopPropagation()
        const URL = `${process.env.REACT_APP_BACKEND_URL}/api/register`
        console.log(`URL:${URL}`)
        console.log(`data:${JSON.stringify(data)}`)
        try {
            const response = await axios.post(URL,data)
            console.log(`response:${JSON.stringify(response)}`)
            toast.success(response.data.message)
            navigate('/email')
        } catch(error){
            console.log(`error:${JSON.stringify(error)}`)
            toast.error(error.response.data.message || error.message)
        }
    }

    return(
        <div className='mt-5'>
            <div className='bg-white w-full max-w-sm mx-2 rounded overflow-hidden p-4 mx-auto'>
                <h3>회원 가입 페이지</h3>
                <form className='grid gap-4 mt-5' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-1'>
                        <label>성명 :</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            placeholder='성명을 입력하시오'
                            className='bg-slate-100 px-2 py-1 focus:outline-primary'
                            value={data.name}
                            onChange={handleOnChange}
                            required
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label>카카오계정 :</label>
                        <input
                            type='text'
                            id='email'
                            name='email'
                            placeholder='카카오계정을 입력하시오'
                            className='bg-slate-100 px-2 py-1 focus:outline-primary'
                            value={data.email}
                            onChange={handleOnChange}
                            required
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label>비밀번호 :</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='비밀번호를 입력하시오'
                            className='bg-slate-100 px-2 py-1 focus:outline-primary'
                            value={data.password}
                            onChange={handleOnChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="profile_pic">프로필 사진 :
                            <div className='h-14 bg-slate-200 flex justify-center items-center border rounded hover:border-primary cursor-pointer'>
                                <p className='text-sm max-w-[300px] text-ellipsis line-clamp-1'>
                                    {
                                        uploadPhoto?.display_name ? uploadPhoto?.display_name : "프로필 사진을 올리세요."
                                    }
                                </p>
                                {
                                    uploadPhoto?.display_name && (
                                        <>
                                            <img 
                                                className="ml-2"
                                                src={uploadPhoto.url}
                                                width={40}
                                                height={40}
                                            />
                                            <button className="text-lg ml-2 hover:text-red-600">
                                                <IoClose/>
                                            </button>
                                        </>
                                    )
                                }
                            </div>
                        </label>
                        <input
                            type='file'
                            id='profile_pic'
                            name='profile_pic'
                            className='bg-slate-100 px-2 py-1 focus:outline-primary hidden'
                            onChange={handleUploadPhoto}
                        />
                    </div>
                    <button
                        className='bg-yellow-200 text-lg px-4 py-1 hover:bg-secondary rounded mt-2 font-bold leading-relaxed tracking-wide'
                    >
                        가입하기
                    </button>

                </form>
            </div>
        </div>
    )
}

export default RegisterPage