'use client'
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import Link from 'next/link';

type Props = {}

const SwiberContainer = ({ images }) => {
    // { console.log(images) }
    return (
        <div className="">


            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        width: 640,
                        slidesPerView: 1,

                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 1.5,
                        spaceBetween: 100
                    },
                    1024: {
                        width: 1024,
                        slidesPerView: 3,
                        spaceBetween: 500
                    },
                }}
                // loop={true}
                autoplay
                navigation
                pagination
            >
                {
                    images?.map((item) => (
                        <SwiperSlide className="" key={item._id} >

                            <Link href={`/myWork/${item.slug}`} >
                                <div className=" w-[400px] h-[550px] shadow-sm shadow-white rounded  relative  parallax-bg ">

                                    <Image
                                        alt=''
                                        fill
                                        src={item.image[0]}
                                        className=' object-cover rounded'
                                    />

                                </div>
                            </Link>
                            <p className=' bg-orange-500 text-white font-bold text-xl  w-[400px] p-2 text-center rounded-b shadow-sm  shadow-orange-500 '>
                                {item.name}
                            </p>


                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default SwiberContainer