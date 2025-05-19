import React from 'react';
import Bg from '../image/ex.png';
import Eximg from '../image/eximg.png';
function Experience() {
    return (
        <div style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className=" py-6 sm:py-8 ">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                        <div className="md:pt-8">
                            <h1 className="text-white font-bold text-4xl md:text-6xl tracking-wider mb-6 uppercase">
                                we have a lot of<br className='pt-20' />
                                <span className="text-[#FF0000]">experience</span>
                            </h1>
                            <p className="text-white sm:text-white text-base font-light mb-3 sm:w-[30rem]">
                                With years of industry experience, we understand what it takes to achieve real results.
                                Our certified trainers have worked with clients of all ages and fitness levels.

                            </p>
                            <p className="text-white sm:text-white text-base font-light mb-12 sm:w-[30rem]">
                                We design personalized programs based on proven methods and client goals.
                                From weight loss to strength training, we’ve guided countless success stories.
                                Trust our expertise to support you every step of your fitness journey.
                            </p>
                            <a href="https://wa.me/+212775902915" target="_blank" rel="noopener noreferrer"
                                className="text-[#FF0000] border border-[#FF0000] hover:bg-[#FF0000] hover:text-[#FFF] py-2 px-8 transition duration-200">
                                Started now
                            </a>
                        </div>
                        <div>
                            <div className=" overflow-hidden sm:pl-10 rounded-lg  shadow-lg md:h-auto">
                                <img src={Eximg} alt="img" className=" object-cover object-center" loading="lazy" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
