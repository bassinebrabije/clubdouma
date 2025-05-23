import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Chooseus() {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 2000, once: true });

        const timer = setTimeout(() => {
            setShowContent(true);
            AOS.refresh(); // refresh to re-scan the DOM for AOS attributes after content shows
        }, 3500); // 3.5 seconds delay

        return () => clearTimeout(timer);
    }, []);

    const features = [
        {
            number: '01',
            title: 'Personal Training',
            description: 'Personal training helps individuals achieve their fitness goals through customized workouts and expert guidance.',
        },
        {
            number: '02',
            title: 'Equipment and Facilities',
            description: 'Modern equipment and well-maintained facilities provide a safe, effective, and comfortable environment for all fitness levels.',
        },
        {
            number: '03',
            title: 'Nutrition Counseling',
            description: 'Nutrition counseling offers personalized dietary guidance to support healthy eating habits and enhance overall wellness.',
        },
        {
            number: '04',
            title: 'Specialty Programs',
            description: 'Specialty programs are tailored fitness plans designed to meet unique goals like rehabilitation, athletic performance, or weight management.',
        },
    ];

    if (!showContent) {
        // You can replace this with a loader/spinner if you want
        return (
            <div className="flex justify-center items-center h-screen bg-black text-white text-2xl">
                Loading...
            </div>
        );
    }

    return (
        <div id="Services">
            <section className="relative bg-black overflow-hidden py-12 sm:py-16 lg:py-20">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Title */}
                    <div className="text-center" data-aos="fade-up">
                        <h1 className="text-4xl sm:text-4xl xl:text-6xl font-semibold leading-10 tracking-wider text-white">
                            Why <span className="text-[#FF0000]">Choose Us</span>
                        </h1>
                        <p className="text-white text-sm sm:text-base pt-5 sm:pt-10 font-light tracking-widest">
                            Gym workouts offer a versatile and customizable experience,
                            <br className="hidden sm:block" />
                            allowing everyone to set specific fitness goals.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="mx-auto mt-12 grid max-w-screen-lg grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="backdrop-blur-lg border border-[#FF0000] px-8 py-8 shadow text-left transition-transform duration-300 hover:scale-[1.02]"
                                data-aos="fade-up"
                                data-aos-delay={index * 200}
                            >
                                <p className="text-3xl font-black tracking-wider text-white mb-2">{item.number}</p>
                                <h2 className="text-xl font-semibold tracking-wider text-[#FF0000] uppercase mb-3">
                                    {item.title}
                                </h2>
                                <p className="text-white font-light leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Chooseus;
