import React from 'react'

function Services() {
    return (
        <div id='Services' >
            <section className="relative bg-[#000] overflow-hidden  py-12 sm:py-16 lg:py-20">

                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">

                        <h1 className="text-4xl font-semibold leading-10 tracking-wider text-white sm:text-4xl xl:text-6xl text-center">
                            Why <span className="text-[#FF0000]"> Choose Us </span>
                        </h1>
                        <p className='text-white text-sm pt-5 sm:pt-10 font-light tracking-widest' >Gym workouts offer a versatile and customizable experience,<br className="hidden sm:block" /> allowing everyone to set specific fitness goals.</p>

                    </div>
                    <div className="mx-auto mt-10 grid max-w-screen-lg grid-cols-1 gap-x-8 gap-y-4 text-center sm:text-left md:grid-cols-2">
                        <div className="backdrop-blur-lg relative mb-3  border   border-[#FF0000]  px-12 py-8 text-left shadow lg:px-12">
                            <p className="relative text-3xl font-black tracking-wider text-white">01</p>
                            <h1 className="relative text-xl font-normal tracking-wider text-[#FF0000] uppercase">Personal Training</h1>
                            <p className="text-white font-light">Personal training helps individuals achieve their fitness goals through customized workouts and expert guidance.</p>
                        </div>
                        <div className="backdrop-blur-lg relative mb-3  border   border-[#FF0000]  px-12 py-8 text-left shadow lg:px-12">
                            <p className="relative text-3xl font-black tracking-wider text-white">02</p>
                            <h1 className="relative text-xl font-normal tracking-wider text-[#FF0000] uppercase">Equipment and facilities</h1>
                            <p className="text-white font-light">Modern equipment and well-maintained facilities provide a safe, effective, and comfortable environment for all fitness levels.

                            </p>
                        </div>
                        <div className="backdrop-blur-lg relative mb-3  border   border-[#FF0000]  px-12 py-8 text-left shadow lg:px-12">
                            <p className="relative text-3xl font-black tracking-wider text-white">03</p>
                            <h1 className="relative text-xl font-normal tracking-wider text-[#FF0000] uppercase">nutrition counseling</h1>
                            <p className="text-white font-light">Nutrition counseling offers personalized dietary guidance to support healthy eating habits and enhance overall wellness.</p>
                        </div>
                        <div className="backdrop-blur-lg relative mb-3  border   border-[#FF0000]  px-12 py-8 text-left shadow lg:px-12">
                            <p className="relative text-3xl font-black tracking-wider text-white">04 </p>
                            <h1 className="relative text-xl font-normal tracking-wider text-[#FF0000] uppercase">speciality programs</h1>
                            <p className="text-white font-light">Specialty programs are tailored fitness plans designed to meet unique goals like rehabilitation, athletic performance, or weight management.</p>
                        </div>
                    </div>
                </div>
            </section>



        </div >
    )
}

export default Services