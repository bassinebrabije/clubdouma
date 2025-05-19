import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import Img1 from '../image/all/1.jpg';
import Img2 from '../image/all/2.jpg';
import Img3 from '../image/all/3.jpg';
import Img4 from '../image/all/4.jpg';
import Img5 from '../image/all/5.jpg';
import Img6 from '../image/all/6.jpg';
import Img7 from '../image/all/7.jpg';
import Img8 from '../image/all/8.png';

SwiperCore.use([Pagination]);

function Previewimage() {
    const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);

    const openModal = (index) => {
        setModalIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);

    return (
        <section className="relative bg-black overflow-hidden py-12 sm:py-16 lg:py-20" >
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-10 sm:px-40 sm:mt-20 relative">
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
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
                                <img
                                    className="h-auto max-w-full rounded-lg cursor-pointer"
                                    src={src}
                                    alt={`Gallery image ${index + 1}`}
                                    onClick={() => openModal(index)}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Modal with Swiper */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
                    onMouseDown={(e) => {
                        if (e.target.classList.contains('modal-overlay')) {
                            closeModal();
                        }
                    }}
                >
                    <div className="modal-overlay absolute inset-0" />
                    <div className="relative z-10 w-full max-w-5xl px-4">
                        <Swiper
                            modules={[Pagination]}
                            pagination={{
                                clickable: true,
                                bulletClass: 'popup-bullet',
                                bulletActiveClass: 'popup-bullet-active',
                            }}
                            initialSlide={modalIndex}
                            spaceBetween={10}
                            slidesPerView={1}
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
                    </div>
                </div>
            )}

            <style jsx>{`
                .custom-bullet {
                    background-color: #555;
                    width: 10px;
                    height: 10px;
                    border-radius: 9999px;
                    display: inline-block;
                    margin: 0 5px;
                    opacity: 0.5;
                }
                .custom-bullet-active {
                    background-color: #FF0000;
                    opacity: 1;
                }

                .popup-bullet {
                    background-color: #555;
                    width: 10px;
                    height: 10px;
                    border-radius: 9999px;
                    display: inline-block;
                    margin: 0 5px;
                    opacity: 0.5;
                }
                .popup-bullet-active {
                    background-color: #FF0000;
                    opacity: 1;
                }
            `}</style>
        </section>
    );
}

export default Previewimage;