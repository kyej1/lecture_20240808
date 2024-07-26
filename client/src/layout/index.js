import React from 'react'
import logo from '../assets/kakaologo.png'

const AuthLayouts = ({children}) => {
    return (
        <>
            <header className='flex justify-center items-center py-3 h-20 shadow-md bg-white'>
                <img
                    src={logo}
                    alt='로고입니다.'
                    width={180}
                    height={60}
                />
            </header>
            { children }
        </>
    )
}

export default AuthLayouts