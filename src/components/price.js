import React from 'react';
import { motion } from 'framer-motion';
import Bg from '../image/ex.png';
import Time from './time';

const PricingSection = () => {
    return (
        <div
            className="py-12 flex flex-col items-center justify-center mt-5"
            style={{
                backgroundImage: `url(${Bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            id="Pricing"
        >
            {/* Title Section */}
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h1 className="text-4xl font-extrabold leading-10 tracking-wider text-white xl:text-6xl">
                    Our <span className="text-[#FF0000]">Plan</span>
                </h1>
            </motion.div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    {
                        title: 'Month',
                        subtitle: 'Douma Fitness',
                        price: '120 MAD',
                        features: ['All Exercise Equipment', 'Any Time'],
                    },
                    {
                        title: 'Month',
                        subtitle: 'Douma Fitness Plus',
                        price: '150 MAD',
                        features: ['All Exercise Equipment', 'Any Time', 'Tapis roulant'],
                    },
                    {
                        title: '6 Months',
                        subtitle: 'Douma Fitness Pro',
                        price: '850 MAD',
                        features: ['All Exercise Equipment', 'Any Time', 'Tapis roulant'],
                    },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <PricingCard
                            title={item.title}
                            subtitle={item.subtitle}
                            price={item.price}
                            features={item.features}
                            highlightColor="#FF0000"
                        />
                    </motion.div>
                ))}
            </div>

            <Time />
        </div>
    );
};

const PricingCard = ({ title, subtitle, price, features, highlightColor }) => {
    return (
        <div className="rounded-2xl overflow-hidden border border-[#FF0000] shadow-xl transition-transform transform hover:scale-105 cursor-pointer bg-[#00000070] w-[20rem]">
            <div style={{ height: '8px', backgroundColor: highlightColor }}></div>
            <div className="p-8 text-center">
                <h2 className="text-3xl font-bold text-[#FF0000] mb-4">{title}</h2>
                <p className="text-white mb-4">{subtitle}</p>
                <p className="text-4xl font-bold text-white mb-6">{price}</p>
                <ul className="text-sm text-white mb-6">
                    {features.map((feature, index) => (
                        <li key={index} className="mb-2 flex items-center justify-center">
                            <svg
                                className="w-4 h-4 mr-2 text-red-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PricingSection;
