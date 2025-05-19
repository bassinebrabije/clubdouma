import React from 'react'
import logo from '../image/logo.png'

function footer() {
    const year = new Date().getFullYear();


    return (
        <footer className="pb-7 pt-5 bg-[#000]">
            <div className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
                <div className="border-t border-white/40 py-10 flex flex-col items-center">
                    <img src={logo} className="w-20" alt="logo" loading="lazy" />
                    <div className="mt-8 flex flex-wrap items-center justify-center space-x-4 text-sm font-semibold leading-6 text-white">
                        <a className="px-4 py-2 mt-2 tracking-wider  text-base  cursor-pointer	 text-white rounded-lg md:mt-0 hover:text-[#FF0000]" href='/'>Home</a>
                        <a className="px-4 py-2 mt-2 tracking-wider text-base  cursor-pointer	 text-white rounded-lg md:mt-0 md:ml-4 hover:text-[#FF0000]" >About</a>
                        <a className="px-4 py-2 mt-2 tracking-wider text-base  cursor-pointer	 text-white rounded-lg md:mt-0 md:ml-4 hover:text-[#FF0000]" >Time</a>
                        <a className="px-4 py-2 mt-2 tracking-wider text-base  cursor-pointer	 text-white rounded-lg md:mt-0 md:ml-4 hover:text-[#FF0000]" >Our Plan</a>
                        <a className="px-4 py-2 mt-2 tracking-wider text-base cursor-pointer	  text-white rounded-lg md:mt-0 md:ml-4 hover:text-[#FF0000]" >Price</a>
                    </div>
                </div>
                <div class="container mx-auto"><p class="text-sm font-medium text-center text-white ">Copyright{year} © Douma Fitness, Inc. All rights reserved.</p></div>
            </div>
        </footer>



    )
}

export default footer