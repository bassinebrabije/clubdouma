import React from 'react';

const Time = () => {
    return (
        <div className="py-12 flex flex-col items-center justify-center mt-5">
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-7xl w-full px-4">
                <PricingCard
                    title="Monday - Wednesday - Friday"
                    price="8:00 – 23"
                />
                <PricingCard
                    title="Tuesday - Thursday "
                    price="6:30  – 23"
                />
                <PricingCard
                    title="Saturday"
                    price="6:30 – 12:00"
                />
            </div>
        </div>
    );
};

const PricingCard = ({ title, subtitle, price }) => {
    return (
        <div className="rounded-2xl overflow-hidden border border-[#FF0000] shadow-xl transition-transform transform hover:scale-105 cursor-pointer bg-[#00000070] ">
            <div className="p-8 text-center">
                <h2 className="text-xl font-bold text-[#FF0000] mb-4">{title}</h2>
                {subtitle && <p className="text-white mb-4">{subtitle}</p>}
                <p className="text-2xl font-bold text-white mb-6">{price}</p>
            </div>
        </div>
    );
};

export default Time;
