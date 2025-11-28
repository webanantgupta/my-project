import working from "../assets/baradari2.png"
import { Fa1 } from "react-icons/fa6";
import { Fa2 } from "react-icons/fa6";
import { Fa3 } from "react-icons/fa6";
import { Fa4 } from "react-icons/fa6";
import { Fa5 } from "react-icons/fa6";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles;
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
// import required modules;
import {Autoplay, Mousewheel, Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import headline from "../assets/headline2.png"



const Book = () => {
    
    return <section id="book" className="scroll-mt-36 mb-10 pl-5 pr-5">
        <div data-aos="fade-up">

        <div className="flex flex-col-reverse md:flex-row mt-20">
            <div className="basis-2/4">
                <img className="w-full h-[400px] object-cover rounded-md mt-5 md:h-full" src={working} alt="baradari" />
            </div>
            <div className="basis-2/4">
                <div>
                    <h2 className="text-4xl font-semibold text-indigo-800 text-center">How To Book For Any Occasion </h2>
                     <div className="flex justify-center">
                  <img src={headline} alt="headline" className="w-full md:h-20 md:w-80  lg:w-140" />
              </div>
                    <p className="text-center font-semibold text-neutral-500 mt-2">Follow these simple steps to make your royal celebration at Safed Baradari unforgettable.</p>
                </div>
                <div className="flex flex-col items-center justify-center mt-10 pl-5 pr-5 basis-2/4 h-[400px]">
                    <Swiper
                        direction={'vertical'} loop
                        slidesPerView={4}
                        autoplay={{delay:1500,
                            disableOnInteraction:false
                        }}
                        spaceBetween={0}
                        mousewheel={true}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        modules={[Autoplay,Mousewheel, Pagination, Navigation]}
                        className="mySwiper book_section w-full"
                    >
                        <SwiperSlide className="swiper_container">
                            <div className="flex flex-col justify-center items-center border h-38 w-full p-5  rounded-2xl">
                                <div className="flex flex-col justify-center items-center basis-1/3 ">
                                    <div>
                                        <Fa1 className="bg-violet-500 text-6xl text-white p-2 rounded-full" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl text-indigo-800 font-semibold">Explore Venue</h4>
                                    </div>
                                </div>
                                <div className="basis-2/3">
                                    <p className="text-neutral-500 text-center font-medium">View images, details, and facilities of Safed Baradari before booking.</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper_container">
                            <div className="flex  flex-col justify-between items-center border h-38 w-full p-1 rounded-2xl">
                                <div className="flex flex-col justify-center items-center basis-1/3 ">
                                    <div>
                                        <Fa2 className="bg-blue-500 text-6xl text-white p-2 rounded-full" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl text-indigo-800 font-semibold">Check Availability</h4>
                                    </div>
                                </div>
                                <div className="basis-2/3">
                                    <p className="text-neutral-500 font-medium text-center">Select your event date and see real-time slot availability.</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex flex-col justify-between items-center border h-38 w-full p-1 rounded-2xl">
                                <div className="flex flex-col justify-center items-center basis-1/3 ">
                                    <div>
                                        <Fa3 className="bg-green-500 text-6xl text-white p-2 rounded-full" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl text-indigo-800 font-semibold">Fill Booking Form</h4>
                                    </div>
                                </div>
                                <div className="basis-2/3">
                                    <p className="text-neutral-500 font-medium text-center">Provide event details, contact info, and any custom requirements.</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex flex-col justify-between items-center border h-38 w-full p-1 rounded-2xl">
                                <div className="flex flex-col justify-center items-center basis-1/3 ">
                                    <div>
                                        <Fa4 className="bg-yellow-500 text-6xl text-white p-2 rounded-full" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl text-indigo-800 font-semibold">Make Payment</h4>
                                    </div>
                                </div>
                                <div className="basis-2/3">
                                    <p className="text-neutral-500 font-medium text-center">Pay easily through Razorpay, Paytm, or UPI for instant confirmation</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex flex-col justify-between items-center border h-38 w-full p-1 rounded-2xl">
                                <div className="flex flex-col justify-center items-center basis-1/3 ">
                                    <div>
                                        <Fa5 className="bg-orange-500 text-6xl text-white p-2 rounded-full" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl text-indigo-800 font-semibold">Get Confirmation</h4>
                                    </div>
                                </div>
                                <div className="basis-2/3">
                                    <p className="text-neutral-500 font-medium text-center">Receive email & SMS confirmation with all event details.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    {/* <Swiper
                        // rewind={true}
                        direction={'vertical'}
                        slidesPerView={2}
                        spaceBetween={0}
                        mousewheel={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Mousewheel, Pagination, Navigation]}
                        breakpoints={{
                            640: { slidesPerView: 1, },
                            768: { slidesPerView: 2, },
                            1024: { slidesPerView: 3, },
                        }}
                        className="mySwiper book_section w-full h-full flex justify-center items-center"
                    >
                        <SwiperSlide className="swiper_container">
                            <div className="flex flex-col justify-center items-center border h-38 w-full p-5  rounded-2xl">
                                <div className="flex flex-col justify-center items-center basis-1/3 ">
                                    <div>
                                        <Fa1 className="bg-violet-500 text-6xl text-white p-2 rounded-full" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl text-indigo-800 font-semibold">Explore Venue</h4>
                                    </div>
                                </div>
                                <div className="basis-2/3">
                                    <p className="text-neutral-500 text-center font-medium">View images, details, and facilities of Safed Baradari before booking.</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper_container">
                            <div className="flex  flex-col justify-between items-center border h-38 w-full p-1 rounded-2xl">
                                <div className="flex flex-col justify-center items-center basis-1/3 ">
                                    <div>
                                        <Fa2 className="bg-blue-500 text-6xl text-white p-2 rounded-full" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl text-indigo-800 font-semibold">Check Availability</h4>
                                    </div>
                                </div>
                                <div className="basis-2/3">
                                    <p className="text-neutral-500 font-medium text-center">Select your event date and see real-time slot availability.</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex flex-col justify-between items-center border h-38 w-full p-1 rounded-2xl">
                                <div className="flex flex-col justify-center items-center basis-1/3 ">
                                    <div>
                                        <Fa3 className="bg-green-500 text-6xl text-white p-2 rounded-full" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl text-indigo-800 font-semibold">Fill Booking Form</h4>
                                    </div>
                                </div>
                                <div className="basis-2/3">
                                    <p className="text-neutral-500 font-medium text-center">Provide event details, contact info, and any custom requirements.</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex flex-col justify-between items-center border h-38 w-full p-1 rounded-2xl">
                                <div className="flex flex-col justify-center items-center basis-1/3 ">
                                    <div>
                                        <Fa4 className="bg-yellow-500 text-6xl text-white p-2 rounded-full" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl text-indigo-800 font-semibold">Make Payment</h4>
                                    </div>
                                </div>
                                <div className="basis-2/3">
                                    <p className="text-neutral-500 font-medium text-center">Pay easily through Razorpay, Paytm, or UPI for instant confirmation</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex flex-col justify-between items-center border h-38 w-full p-1 rounded-2xl">
                                <div className="flex flex-col justify-center items-center basis-1/3 ">
                                    <div>
                                        <Fa5 className="bg-orange-500 text-6xl text-white p-2 rounded-full" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl text-indigo-800 font-semibold">Get Confirmation</h4>
                                    </div>
                                </div>
                                <div className="basis-2/3">
                                    <p className="text-neutral-500 font-medium text-center">Receive email & SMS confirmation with all event details.</p>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper> */}

                </div>
            </div>
        </div>
        </div>

    </section>
}

export default Book; 