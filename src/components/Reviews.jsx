// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import reviewData from "../data/ReviewsData"



const Reviews = () => {
    console.log(reviewData);

    return (

        <>
            <section id="review" className="scroll-mt-36 mt-5 mb-5 pl-5 pr-5">
                <div>
                    <h4 className="text-4xl text-center text-indigo-800 font-semibold mt-15">Loved By Customers</h4>
                    <div className=" mt-5 gap-6">
                        {/* grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 */}
                        <Swiper
                            navigation={true}
                            className="mySwiper h-[300px]"
                            modules={[Navigation]}
                            spaceBetween={20}
                             loop={true}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 1, },
                                768: { slidesPerView: 2, spaceBetween: 30 },
                                1024: { slidesPerView: 3, spaceBetween: 30 }
                            }}
                        >
                            {/* <div className="bg-neutral-300 rounded-2xl p-8 shadow-2xl"> */}
                            {reviewData.map((obj, index) => {
                                return (
                                    <SwiperSlide key={index} className="flex flex-col items-center bg-neutral-300 shadow-2xl rounded-2xl text-center p-6">
                                        <p className="text-center">{obj.review}</p>
                                        <img className="h-15 w-15 object-center mx-auto rounded-full mt-10 " src={obj.image} alt="person" />
                                        <p className="mt-2 text-2xl text-center text-indigo-800 font-bold">{obj.name}</p>
                                    </SwiperSlide>
                                )
                            })}
                            {/* </div> */}
                        </Swiper>

                    </div>
                </div>
            </section></>
    )
}

export default Reviews;