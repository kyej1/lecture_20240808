import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoChatbubbleEllipses } from 'react-icons/io5'
import { FaUserPlus } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'

const Sidebar = () => {
  return (
    <div className='w-full h-full grid grid-cols-[48px,1fr] bg-white'>
        <div className='bg-slate-100 w-12 h-full rounded-tr-lg rounded-br-lg py-5 text-slate-600 flex flex-col justify-between'>
            <div>
                <NavLink className={({isActive})=>`w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200 rounded ${isActive && "bg-slate-200"}`} title='chat'>
                    <IoChatbubbleEllipses size={20}/>
                </NavLink>
                <div className='w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200 rounded'>
                    <FaUserPlus size={20}/>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <button className='mx-auto'>
                    신
                </button>
                <button>
                    <span>
                        <BiLogOut size={20}/>
                    </span>
                </button>
            </div>
        </div>
        <div>
            친구목록뿌려주기
        </div>
    </div>
  )
}

export default Sidebar