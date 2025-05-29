import React from 'react';
import { motion } from 'framer-motion';

function Chooseus() {
    const items = [
        {
            number: "01",
            title: "Personal Training",
            description: "Personal training helps individuals achieve their fitness goals through customized workouts and expert guidance.",
        },
        {
            number: "02",
            title: "Equipment and facilities",
            description: "Modern equipment and well-maintained facilities provide a safe, effective, and comfortable environment for all fitness levels.",
        },
        {
            number: "03",
            title: "Nutrition Counseling",
            description: "Nutrition counseling offers personalized dietary guidance to support healthy eating habits and enhance overall wellness.",
        },
        {
            number: "04",
            title: "Speciality Programs",
            description: "Specialty programs are tailored fitness plans designed to meet unique goals like rehabilitation, athletic performance, or weight management.",
        },
    ];

    return (
        <section className="relative bg-[#000] overflow-hidden py-12 sm:py-16 lg:py-20" id="Whydouma">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-4xl font-extrabold leading-10 tracking-wider text-white xl:text-6xl uppercase">
                        Why <span className="text-[#FF0000]">Choose Us</span>
                    </h1>
                    <p className="text-white text-sm pt-3 font-light tracking-widest">
                        Gym workouts offer a versatile and customizable experience,
                        <br className="hidden sm:block" />
                        allowing everyone to set specific fitness goals.
                    </p>
                </motion.div>

                <div className="mx-auto mt-10 grid max-w-screen-lg grid-cols-1 gap-6 text-center sm:text-left md:grid-cols-2">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group backdrop-blur-lg relative mb-3 border border-[#FF0000] cursor-pointer hover:border-[#FF0000] rounded-lg px-12 py-8 text-left shadow lg:px-12 transition duration-300 ease-in-out hover:bg-[#FF0000]"
                        >
                            <p className="relative text-3xl font-black tracking-wider text-white group-hover:text-white">
                                {item.number}
                            </p>
                            <h1 className="relative text-xl font-black tracking-wider uppercase text-[#FF0000] group-hover:text-white">
                                {item.title}
                            </h1>
                            <p className="text-white text-sm font-light group-hover:text-white">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Chooseus;
