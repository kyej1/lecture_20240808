import React from "react";

const RegisterPage = () => {
    return(
        <div className='mt-5'>
            <div className='bg-white w-full max-w-sm mx-2 rounded overflow-hidden p-4 mx-auto'>
                <h3>회원 가입 페이지</h3>
                <form>
                    <div className='flex flex-col gap-1'>
                        <label>성명 :</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            placeholder='성명을 입력하시오'
                            className='bg-slate-100 px-2 py-1 focus:outline-primary'
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
                            required
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