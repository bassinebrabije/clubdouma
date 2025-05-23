import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Heroo from '../image/Heroo.png';

function Hero() {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 2000, once: true });

        const timer = setTimeout(() => {
            setShowContent(true);
            AOS.refresh(); // refresh to re-scan the DOM for AOS attributes
        }, 3500); // 3.5s loader time

        return () => clearTimeout(timer);
    }, []);

    const sectionStyle = {
        backgroundImage: `url(${Heroo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <section className="xl:min-h-screen flex items-center justify-center" style={sectionStyle}>
            {showContent && (
                <div className="container mx-auto px-4 mt-40 md:px-8 text-left">
                    <div className="px-4 sm:px-6 lg:px-8 2xl:px-32" data-aos="fade-up">
                        <h1 className="text-white font-bold text-5xl md:text-8xl tracking-wider mb-6 uppercase leading-tight">
                            Ready to Train<br />
                            <span className="text-[#FF0000]">Your Body</span>
                        </h1>
                        <p
                            className="text-white text-base font-light mb-12 sm:w-[30rem]"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Gym training is a structured and disciplined approach to physical exercise that focuses on strength, endurance, and overall fitness improvement.
                        </p>
                        <a
                            href="https://wa.me/+212775902915"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#FF0000] border border-[#FF0000] hover:bg-[#FF0000] hover:text-white py-2 px-8 tracking-wider transition duration-200 inline-block"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        >
                            Get Started
                        </a>
                    </div>

                    <div
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        {[
                            { value: '20+', label: 'Years of Experience' },
                            { value: '14k+', label: 'Happy Members' },
                            { value: '15k+', label: 'Members Joined' },
                            { value: '20+', label: 'Exercise Equipment' },
                        ].map((item, index) => (
                            <div key={index} className="text-left">
                                <p className="font-black text-[#FF0000] text-2xl sm:text-3xl">{item.value}</p>
                                <p className="mt-2 text-xs sm:text-base font-bold text-white">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}

export default Hero;
