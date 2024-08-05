import React from "react";
import { IoMdSend } from 'react-icons/io'
import { FaPlus } from 'react-icons/fa6'

const MessagePage = () => {
    return(
        <div style={{}}>
            <header>
            </header>

            {/* 모든 메세지 표시 */}
            <section>
                <div className='flex flex-col gap-2 py-2 mx-2'>
                    <div className={`p-1 py-1 rounded w-fit max-w-[280px] md:max-w-sm lg:max-w-md bg-white`}>
                        <p className='px-2'>방학때 강의 열심히 듣기 바랍니다.</p>
                        <p className='text-xs ml-auto w-fit'>12:55</p>
                    </div>
                    <div className={`p-1 py-1 rounded w-fit max-w-[280px] md:max-w-sm lg:max-w-md ml-auto bg-teal-100`}>
                        <p className='px-2'>넵, 열심히 하겠습니다.</p>
                        <p className='text-xs ml-auto w-fit'>12:55</p>
                    </div>
                </div>
            </section>

            {/* 메세지 보내기 */}
            <section className='h-16 bg-white flex items-center px-4'>
                <div className="relative">
                    <button className='flex justify-center items-center w-11 h-11 rounded-full hover:bg-primary hover:text-white'>
                        <FaPlus size={20}/>
                    </button>
                </div>
                <form>
                    <input type='text' placeholder="메세지를 입력하세요..." className='py-1 px-4 outline-none w-full h-full'/>
                    <button className='text-primary hover:text-secondary'>
                        <IoMdSend size={28}/>
                    </button>
                </form>
            </section>
        </div>
    )
}

export default MessagePage