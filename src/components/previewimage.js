import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

import Img1 from '../image/all/1.jpg';
import Img2 from '../image/all/2.jpg';
import Img3 from '../image/all/3.jpg';
import Img4 from '../image/all/4.jpg';
import Img5 from '../image/all/5.jpg';
import Img6 from '../image/all/6.jpg';
import Img7 from '../image/all/7.jpg';
import Img8 from '../image/all/8.png';

function Previewimage() {
    const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);

    const openModal = (index) => {
        setModalIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);

    return (
        <section className="relative py-1 overflow-hidden mt-10">
            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <h1 className="text-4xl font-extrabold leading-10 tracking-wider text-white xl:text-6xl uppercase">
                    Discover
                    <span className="text-[#FF0000]"> our<br className="block lg:hidden" /> Gym</span>
                </h1>
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    pagination={{
                        clickable: true,
                        bulletClass: 'custom-bullet',
                        bulletActiveClass: 'custom-bullet-active',
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index}>
                            <motion.img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="h-auto max-w-full rounded-lg cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                onClick={() => openModal(index)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
                        onMouseDown={(e) => {
                            if (e.target.classList.contains('modal-overlay')) {
                                closeModal();
                            }
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="modal-overlay absolute inset-0" />
                        <motion.div
                            className="relative z-10 w-full max-w-5xl px-4"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Swiper
                                modules={[Pagination, Autoplay]}
                                initialSlide={modalIndex}
                                slidesPerView={1}
                                spaceBetween={10}
                                loop={true}
                                autoplay={{ delay: 2000, disableOnInteraction: false }}
                                pagination={{
                                    clickable: true,
                                    bulletClass: 'popup-bullet',
                                    bulletActiveClass: 'popup-bullet-active',
                                }}
                            >
                                {images.map((src, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={src}
                                            alt={`Preview ${index}`}
                                            className="max-h-[90vh] max-w-full mx-auto rounded-lg"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
                .custom-bullet,
                .popup-bullet {
                    background-color: #555;
                    width: 10px;
                    height: 10px;
                    border-radius: 9999px;
                    display: inline-block;
                    margin: 0 5px;
                    opacity: 0.5;
                }
                .custom-bullet-active,
                .popup-bullet-active {
                    background-color: #FF0000;
                    opacity: 1;
                }
            `}</style>
        </section>
    );
}

export default Previewimage;
