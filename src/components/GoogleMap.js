import React from 'react';

const GoogleMap = () => {
    return (
        <>
            <div className="text-center mt-20 " id="Location">

                <h1 className="text-4xl font-extrabold leading-10 tracking-wider text-white xl:text-6xl">
                    Our<span className="text-[#FF0000]"> Location</span>

                </h1>
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 mt-10 mb-20">
                <div className="w-full h-[450px]">
                    <iframe
                        className="rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d335.126555496161!2d-7.535846834325624!3d33.57678418482031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd3500d0e7bf%3A0x4570d8ca1d13a54b!2sSalle%20de%20musculation%20Hay%20douma!5e0!3m2!1sfr!2sma!4v1748483407854!5m2!1sfr!2sma"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Douma Fitness Location"
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default GoogleMap;
