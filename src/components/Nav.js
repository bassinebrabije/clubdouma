import React, { useState, useEffect } from 'react';
import Hero from './hero';
import Chooseus from './chooseus';
import Experience from './Experience';
import Members from './Members';
import Previewimage from './previewimage';
import Footer from './footer';
import Contact from './Contact';
import logo from '../image/logo.png';

import logoloading from '../image/loading.gif';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        const handleResize = () => {
            setIsMobileOrTablet(window.innerWidth <= 768);
        };

        // Initial check
        handleResize();

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        // Simulate loading for 3 seconds
        const timer = setTimeout(() => {
            setLoading(false);
            document.body.classList.remove('hide-scroll'); // Remove hide-scroll class
        }, 3500);

        // Add hide-scroll class to body
        document.body.classList.add('hide-scroll');

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            clearTimeout(timer);
            document.body.classList.remove('hide-scroll'); // Ensure removal of hide-scroll class on unmount
        };
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            {loading && (
                <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-[#000]">
                    <div className="animate-pulse">
                        <img src={logoloading} alt="Logo" className="w-[30rem]  text-white" />
                    </div>
                </div>
            )}
            <div
                className={`w-full fixed z-40 transition-colors duration-300 border-b border-[#fff] border-opacity-30 ${isMobileOrTablet ? 'bg-[#000] bg-opacity-30 backdrop-blur-lg' : scroll ? 'bg-[#000] bg-opacity-60 backdrop-blur-lg' : 'bg-transparent'
                    }`}
                id="home"
            >
                <div className="flex flex-col  max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                    <div className="p-4 flex flex-row items-center justify-between">
                        <a href="/"><img src={logo} className='h-16' alt="logo" loading="lazy" /></a>
                        <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline" onClick={() => setOpen(!open)}>
                            <svg fill="#FFF" viewBox="0 0 20 20" className="w-6 h-6">
                                <path className={`${!open ? 'block' : 'hidden'}`} fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                <path className={`${open ? 'block' : 'hidden'}`} fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <nav className={`flex-col flex-grow pb-4  md:pb-0 md:flex md:justify-end md:flex-row ${open ? 'flex' : 'hidden'}`}>
                        <a className="px-4 py-2 mt-2 tracking-wider  text-base  cursor-pointer	 text-white rounded-lg md:mt-0 hover:text-[#FF0000]" href='/'>Home</a>
                        <a className="px-4 py-2 mt-2 tracking-wider text-base  cursor-pointer	 text-white rounded-lg md:mt-0 md:ml-4 hover:text-[#FF0000]" href='/#about' onClick={() => scrollToSection('About')}>About</a>
                        <a className="px-4 py-2 mt-2 tracking-wider text-base  cursor-pointer	 text-white rounded-lg md:mt-0 md:ml-4 hover:text-[#FF0000]" href='/#time' onClick={() => scrollToSection('Time')}>Time</a>
                        <a className="px-4 py-2 mt-2 tracking-wider text-base  cursor-pointer	 text-white rounded-lg md:mt-0 md:ml-4 hover:text-[#FF0000]" href='/#plan' onClick={() => scrollToSection('Plan')}>Our Plan</a>
                        <a className="px-4 py-2 mt-2 tracking-wider text-base cursor-pointer	  text-white rounded-lg md:mt-0 md:ml-4 hover:text-[#FF0000]" href='/#price' onClick={() => scrollToSection('Price')}>Price</a>
                        <a href="https://wa.me/+212775902915" target="_blank" rel="noopener noreferrer" className="px-4 py-2  tracking-wider text-base  cursor-pointer bg-[#FF0000]	 text-white rounded-lg md:mt-0 md:ml-4 "  >Contact</a>
                    </nav>
                </div>
            </div>
            <Hero />
            <Chooseus />
            <Members />
            <Experience />
            <Previewimage />
            <Contact />
            <Footer />
            <div className="fixed bottom-4 right-4 z-40  sm:right-4">
                <a href="https://wa.me/+212775902915" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center   bg-green-500  rounded-full p-4 shadow-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16" id="IconChangeColor">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" id="mainIconPathAttribute" fill="#ffffff"></path>
                    </svg>
                </a>
            </div>
        </>
    );
};

export default Navbar;

