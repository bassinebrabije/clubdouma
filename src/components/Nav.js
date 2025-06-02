import React, { useState, useEffect } from 'react';
import Hero from './hero';
import Chooseus from './chooseus';
import Experience from './Experience';
import Price from './price';
import Previewimage from './previewimage';
import Footer from './footer';
import logo from '../image/logo.png';
import logoloading from '../image/loading.gif';
import Mamambers from './mamabers';
import GoogleMap from './GoogleMap';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
    const [loading, setLoading] = useState(true);
    const [activeNav, setActiveNav] = useState('Home');

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50);
        };

        const handleResize = () => {
            setIsMobileOrTablet(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        const timer = setTimeout(() => {
            setLoading(false);
            document.body.classList.remove('hide-scroll');
        }, 3500);

        document.body.classList.add('hide-scroll');

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            clearTimeout(timer);
            document.body.classList.remove('hide-scroll');
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
                        <img src={logoloading} alt="Logo" className="w-[30rem] text-white" />
                    </div>
                </div>
            )}

            <div className={`w-full fixed z-40 transition-colors duration-300 border-b border-[#fff] border-opacity-30 ${isMobileOrTablet ? 'bg-[#000] bg-opacity-30 backdrop-blur-lg' : scroll ? 'bg-[#000] bg-opacity-60 backdrop-blur-lg' : 'bg-transparent'}`} id="home">
                <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                    <div className="p-4 flex flex-row items-center justify-between">
                        <a href="/"><img src={logo} className='h-16' alt="logo" loading="lazy" /></a>
                        <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline" onClick={() => setOpen(!open)}>
                            <svg fill="#FFF" viewBox="0 0 20 20" className="w-6 h-6">
                                <path className={`${!open ? 'block' : 'hidden'}`} fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                <path className={`${open ? 'block' : 'hidden'}`} fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <nav className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${open ? 'flex' : 'hidden'}`}>
                        <a
                            className={`px-4 py-2 mt-2 tracking-wider text-sm cursor-pointer text-white rounded-lg md:mt-0 hover:bg-[#FF0000] ${activeNav === 'Home' ? 'bg-[#FF0000]' : ''}`}
                            href='/#Home'
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('Home');
                                setActiveNav('Home');
                                setOpen(false);
                            }}
                        >
                            Home
                        </a>

                        <a
                            className={`px-4 py-2 mt-2 tracking-wider text-sm cursor-pointer text-white rounded-lg md:mt-0 md:ml-4 hover:bg-[#FF0000] ${activeNav === 'Whydouma' ? 'bg-[#FF0000]' : ''}`}
                            href='/#Whydouma'
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('Whydouma');
                                setActiveNav('Whydouma');
                                setOpen(false);
                            }}
                        >
                            Why Douma ?
                        </a>
                        <a
                            className={`px-4 py-2 mt-2 tracking-wider text-sm cursor-pointer text-white rounded-lg md:mt-0 md:ml-4 hover:bg-[#FF0000] ${activeNav === 'Experience' ? 'bg-[#FF0000]' : ''}`}
                            href='/#Experience'
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('Experience');
                                setActiveNav('Experience');
                                setOpen(false);
                            }}
                        >
                            Experience
                        </a>
                        <a
                            className={`px-4 py-2 mt-2 tracking-wider text-sm cursor-pointer text-white rounded-lg md:mt-0 md:ml-4 hover:bg-[#FF0000] ${activeNav === 'Pricing' ? 'bg-[#FF0000]' : ''}`}
                            href='/#Pricing'
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('Pricing');
                                setActiveNav('Pricing');
                                setOpen(false);
                            }}
                        >
                            Pricing
                        </a>
                        <a
                            className={`px-4 py-2 mt-2 tracking-wider text-sm cursor-pointer text-white rounded-lg md:mt-0 md:ml-4 hover:bg-[#FF0000] ${activeNav === 'Members' ? 'bg-[#FF0000]' : ''}`}
                            href='/#Members'
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('Members');
                                setActiveNav('Members');
                                setOpen(false);
                            }}
                        >
                            Members
                        </a>
                        {/* <a
                            className={`px-4 py-2 mt-2 tracking-wider text-sm cursor-pointer text-white rounded-lg md:mt-0 md:ml-4 hover:bg-[#FF0000] ${activeNav === 'Location' ? 'bg-[#FF0000]' : ''}`}
                            href='/#Location'
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('Location');
                                setActiveNav('Location');
                                setOpen(false);
                            }}
                        >
                            Location
                        </a> */}
                        <a
                            href="https://wa.me/+212659377813"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 tracking-wider text-sm cursor-pointer hover:bg-[#FF0000] text-white rounded-lg md:mt-0 md:ml-4"
                            onClick={() => setOpen(false)}
                        >
                            Contact
                        </a>
                    </nav>
                </div>
            </div>

            {/* Render content only after loading ends */}
            {!loading && (
                <>
                    <Hero />
                    <Previewimage />
                    <Chooseus />
                    <div id="Experience"></div>
                    <Experience />

                    <div id="Plan"></div>
                    <Price />
                    <Mamambers />
                    <GoogleMap />
                    <Footer />

                    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-4 sm:right-4">
                        {/* WhatsApp Button */}
                        <a
                            href="https://wa.me/+212659377813"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center bg-green-500 rounded-full p-4 shadow-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-800"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                className="bi bi-whatsapp"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                                    fill="#ffffff"
                                />
                            </svg>
                        </a>

                        {/* Instagram Button */}
                        <a
                            href="https://www.instagram.com/club_douma/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 rounded-full p-4 shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="white"
                                viewBox="0 0 16 16"
                                className="bi bi-instagram"
                            >
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                            </svg>
                        </a>
                    </div>

                </>
            )}
        </>
    );
};

export default Navbar;
