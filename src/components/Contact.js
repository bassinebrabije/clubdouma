import React, { useState, useEffect } from 'react';

import Contactbg from '../image/contact.png';


function Contact() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');



    const handlePhoneChange = (e) => {
        const value = e.target.value;
        const numericValue = value.replace(/\D/g, '').slice(0, 10);
        setPhoneNumber(numericValue);
    };




    return (
        <div>
            <div className="sm:pt-6 my-auto bg-[#000]" id='Contact'>
                <section className="mx-auto max-w-screen-xl md:rounded-md md:shadow-lg">
                    <div className="grid grid-cols-4 lg:grid-cols-3">
                        <div className="col-span-4 px-8 py-10 md:col-span-2 md:px-10 md:py-12 lg:col-span-1">
                            <img src={Contactbg} className="w-full h-auto mb-6" alt="img" loading="lazy" />
                        </div>
                        <div className="order-first col-span-4 max-w-screen-md px-8 py-10 md:order-last md:col-span-2 md:px-10 md:py-12">
                            <h1 className="text-4xl font-semibold leading-10 text-white tracking-wider sm:text-4xl xl:text-6xl text-left">
                                Let’s start gym <br /> <span className="text-[#FF0000]">training now</span>
                            </h1>
                            <p className="mt-2 mb-4 text-[#9A9A9A] text-base font-light">
                                Get 50% off the first three classes you sign up for this month with any GYM membership
                            </p>
                            <form >
                                <div className="md:col-gap-4 mb-5 grid md:grid-cols-2 gap-x-5">
                                    <input
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        className="bg-[#000] border border-gray-300 text-white text-sm rounded-lg block w-full p-4 focus:border-red-500"
                                        placeholder="Enter Your Name..."
                                        required
                                    />

                                    <div className="flex-1">
                                        <div className="flex items-center bg-[#000] border border-gray-300 text-gray-900 text-sm rounded-lg p-4">
                                            <span className="mr-2 text-white">+212</span>
                                            <input
                                                type="tel"
                                                value={phoneNumber}
                                                onChange={handlePhoneChange}
                                                className="bg-[#000] border-0 flex-1 text-white text-sm rounded-lg p-0 focus:outline-none focus:ring-0"
                                                placeholder="1234567890"
                                                pattern="\d*"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-[#000] border mb-5 border-gray-300 text-white text-sm rounded-lg block w-full p-4"
                                    placeholder="Your Email Address..."
                                    required
                                />


                                <button type="submit" className="text-[#FF0000] border border-[#FF0000] hover:bg-[#FF0000] hover:text-[#FFF] py-2 px-8 tracking-wider transition duration-200">
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Contact;
