import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import logo from '../assets/kakaologo.png'
import Sidebar from "../components/Sidebar";

const Home = () => {
    const location = useLocation()
    const basePath = location.pathname === '/'

    return(
        <div className='grid lg:grid-cols-[300px,1fr] h-screen max-h-screen'>
            <section className={`bg-white ${!basePath && 'hidden'} lg:block`}>
                <Sidebar/>
            </section>

            {/* message component */}
            <section className={`${basePath && 'hidden'}`}>
                <Outlet/>
            </section>

            <div className={`justify-center items-center flex-col gap-2 hidden ${!basePath ? "hidden" : "lg:flex"}`}>
                <div>
                    <img width={250} alt='logo' src={logo}/>
                </div>
                <p className="text-lg mt-2 text-slate-500">메세지를 보낼 사용자를 선택하세요.</p>
            </div>
        </div>
    )
}

export default Home