import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import { Link } from 'react-router-dom';
import 'helpers/Format/currency';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, {Navigation} from 'swiper/core'

// "https://luxspace-html.netlify.app/images/content/chair-1.png"

SwiperCore.use([Navigation]);

export default function Suggestion({data}) {
    console.log(data)
    return (
        <section className="bg-gray-100 px-4 py-16">
        <div className="container mx-auto">
            <div className="flex flex-start mb-4">
                <h3 className="text-2xl capitalize font-semibold">
                    Complete your room <br className="" />with what we designed
                </h3>
            </div>
        <Swiper 
                slidesPerView={1}
                slidesPerGroup={4}
                navigation={true}
                className="mySwiper"
                breakpoints={{
                    "@0.00": {
                        "slidesPerView": 1
                    },
                    "@0.75": {
                        "slidesPerView": 2
                    },
                    "@1.00": {
                        "slidesPerView": 3
                    },
                    "@1.50": {
                        "slidesPerView": 4
                    },
                }}
        > 
            <div className="flex mb-4 -mx-2">
            {
                data?.map((item) => {
                
                    return (
                        <SwiperSlide>
                        <div className="px-3 flex-none" style={{width: 320}} key={item.id}>
                            <div className="rounded-xl p-4 pb-8 relative bg-white">
                            <div className="rounded-xl overflow-hidden card-shadow w-full h-36">
                                <img
                                src={item.imageUrl} 
                                alt={item.title}
                                className="w-full h-full object-cover object-center"
                                />
                            </div>
                            <h5 className="text-lg font-semibold mt-4">{item.title}</h5>
                            <span className="">{item.price.currency()}</span> <br />
                            <Link to={`/categories/${item.idc}/products/${item.id}`} className="stretched-link">
                                {/* <!-- fake children --> */}
                            </Link>
                            </div>
                        </div>
                        </SwiperSlide>
                    )
                })
            }
            </div>
        </Swiper>
        </div>
    </section>
    )
}
