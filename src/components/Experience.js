import React from 'react';
import { motion } from 'framer-motion';
import Eximg from '../image/eximg.png';

function Experience() {
    return (
        <section className="bg-black" id="Experience">
            <div className="py-6 sm:py-8">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:gap-12">

                        {/* Text Content with Animation */}
                        <motion.div
                            className="md:pt-8"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <h1 className="text-white font-bold text-4xl md:text-6xl tracking-wider mb-6 uppercase">
                                we have a lot of<br />
                                <span className="text-[#FF0000]">experience</span>
                            </h1>
                            <p className="text-white text-base font-light mb-3 sm:w-[30rem]">
                                With years of industry experience, we understand what it takes to achieve real results.
                                Our certified trainers have worked with clients of all ages and fitness levels.
                            </p>
                            <p className="text-white text-base font-light mb-12 sm:w-[30rem]">
                                We design personalized programs based on proven methods and client goals.
                                From weight loss to strength training, we’ve guided countless success stories.
                                Trust our expertise to support you every step of your fitness journey.
                            </p>
                            <a
                                href="https://wa.me/+212775902915"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-[#FF0000] bg-[#FF0000] text-white hover:bg-transparent hover:text-[#FF0000] rounded-lg py-2 px-8 transition duration-200"
                            >
                                Started now
                            </a>
                        </motion.div>

                        {/* Image with Animation */}
                        <motion.div
                            className="overflow-hidden sm:pl-10 rounded-lg shadow-lg md:h-auto"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <img
                                src={Eximg}
                                alt="img"
                                className="object-cover object-center"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
