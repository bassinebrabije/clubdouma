import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Heroo from '../image/Heroo.png';
import HeroMobile from '../image/Heromobile.png';

function Hero() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const sectionStyle = {
        backgroundImage: `url(${isMobile ? HeroMobile : Heroo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <section
            id="Home"
            className="xl:min-h-screen flex items-center justify-center"
            style={sectionStyle}
        >
            <div className="container mx-auto mt-40 px-4 md:mt-28 md:px-8 2xl:mt-40">
                <div className="grid grid-cols-1 max-w-8xl sm:max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="text-left p-6 lg:p-12"
                    >
                        <h1 className="text-white font-extrabold tracking-wider uppercase">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-[2.7rem] md:text-8xl"
                            >
                                Welcome to
                            </motion.span>
                            <br />
                            <motion.span
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="text-[3.5rem] md:text-[8rem] text-[#FF0000]"
                                id="hero-title"
                            >
                                Douma Fitness
                            </motion.span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="text-white text-sm sm:text-base font-light mb-12 sm:w-[40rem]"
                        >
                            Douma Fitness offers top-notch equipment, a clean, spacious gym, and a supportive vibe in Hay Douma, Sidi Moumen.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                            className="mb-3"
                        >
                            <a
                                href="https://wa.me/+212659377813"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#FF0000] text-white hover:bg-transparent hover:text-[#FF0000] rounded-lg border border-[#FF0000] py-2 px-8 tracking-wider transition duration-200 inline-block"
                            >
                                Started now
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                        className="p-3 lg:px-8"
                    >
                        <div className="grid grid-cols-2 sm:grid-cols-4">
                            {[
                                { number: '20+', label: 'Years of Experience' },
                                { number: '14k+', label: 'Happy members' },
                                { number: '10k+', label: 'Members Join' },
                                { number: '40+', label: 'Exercise Equipment' },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.6 + index * 0.2 }}
                                    className="text-left p-4"
                                >
                                    <p className="font-black text-[#FF0000] text-2xl sm:text-3xl">{item.number}</p>
                                    <p className="mt-2 text-xs font-bold text-white sm:text-base" id="Ourgym">{item.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
