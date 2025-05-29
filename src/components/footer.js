import React from 'react';
import logo from '../image/logo.png';

function Footer() {
    const year = new Date().getFullYear();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="pb-7 pt-5 bg-[#000]">
            <div className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
                <div className="border-t border-white/40 py-10 flex flex-col items-center">
                    <img src={logo} className="w-52" alt="logo" loading="lazy" />
                    <div className="mt-8 flex flex-wrap items-center justify-center space-x-4 text-sm font-semibold leading-6 text-white">
                        <a
                            className="px-4 py-2 mt-2 tracking-wider text-sm cursor-pointer text-white rounded-lg md:mt-0 hover:bg-[#FF0000]"
                            href="/#Home"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('Home');
                            }}
                        >
                            Home
                        </a>
                        <a
                            className="px-4 py-2 mt-2 tracking-wider text-sm cursor-pointer text-white rounded-lg md:mt-0 md:ml-4 hover:bg-[#FF0000]"
                            href="/#Whydouma"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('Whydouma');
                            }}
                        >
                            Why Douma ?
                        </a>
                        <a
                            className="px-4 py-2 mt-2 tracking-wider text-sm cursor-pointer text-white rounded-lg md:mt-0 md:ml-4 hover:bg-[#FF0000]"
                            href="/#Experience"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('Experience');
                            }}
                        >
                            Experience
                        </a>
                        <a
                            className="px-4 py-2 mt-2 tracking-wider text-sm cursor-pointer text-white rounded-lg md:mt-0 md:ml-4 hover:bg-[#FF0000]"
                            href="/#Pricing"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('Pricing');
                            }}
                        >
                            Our Plan
                        </a>
                    </div>
                </div>
                <div className="container mx-auto">
                    <p className="text-sm font-medium text-center text-white">
                        Copyright {year} © Douma Fitness, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
