import React from "react";

const CheckPasswordPage = () => {
    return(
        <div className='mt-5'>
            <div className='bg-white w-full max-w-md rounded overflow-hidden p-4 mx-auto'>
                <div className='w-fit mx-auto mb-2 flex justify-center items-center flex-col'>
                    로그인한 내 아바타표시
                    <h2 className="font-semibold text-lg mt-1">신달수</h2>
                </div>
                <form className='grid gap-4 mt-3'>
                    <div>
                        <label htmlFor='password'>비밀번호 :</label>
                        <input 
                            type='text'
                            id='password'
                            name='password'
                            placeholder="비밀번호를 입력하시오."
                            className='bg-slate-100 px-2 py-1 focus:outline-primary'
                        />
                    </div>
                    <button className='bg-primary text-lg px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CheckPasswordPage