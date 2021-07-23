import React, {useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
// import {IoIosFlash} from 'react-icons/all'

import fetch from 'helpers/Fetch';
import useAsnyc from 'helpers/Hooks/useAsnyc';
import Loading from 'helpers/Loading/skeleton';


export default function BrowseRoom() {
    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");
    const [timerSecond, setTimerSecond] = useState("00");


    let interval = useRef();

    // flash sale
    const startTimer = () => {
        const countDownDate = new Date('Jul 25, 2021 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                // stop our Time
                clearInterval(interval.current)
            }else {
                // update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSecond(seconds);
            }
        }, 1000)
    } 

    // componentDidMount
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
    })

    const {data, run, isLoading} = useAsnyc();
    useEffect(() => {
        run(fetch({url:"/api/categories/?page=1&limit=4"}))
    },[run]);

    const ratioClassName = {
        wrapper: {
            default: {
                "1/9": "col-span-9 row-span-1",
            },
            md: {
                "1/4": "md:col-span-4 md:row-span-1",
                "2/2": "md:col-span-2 md:row-span-2",
                "2/3": "md:col-span-3 md:row-span-2", 
            }
        },
        meta: {
            "1/9": "left-0 top-0 bottom-0 flex justify-center flex-col pl-48 md:pl-72",
            "1/4": "left-0 top-0 bottom-0 flex justify-center flex-col pl-48 md:pl-72 right-0",
            "2/2": "inset-0 md:bottom-auto flex justify-center md:items-center flex-col pl-48 md:pl-0 pt-0 md:pt-12",
            "2/3": "inset-0 md:bottom-auto flex justify-center md:items-center flex-col pl-48 md:pl-0 pt-0 md:pt-12",
        }
    };

    return (
    <section className="flex bg-yellow-600 py-16 px-4" id="browse-the-room">
        <div className="container mx-auto">
            <div className="flex justify-center mb-4">
                <h3 className="text-2xl capitalize font-semibold animate-ping text-red-700 pl-5">
                    F<i class="ri-flashlight-fill"></i>ash Sale
                </h3>
            </div>
                <div className="py-7 timer">
                    <h2 className="text-lg mb-5 font-medium">3 Day Flash Sale All Course</h2>
                    <span>{timerDays}</span> 
                    : <span>{timerHours}</span>
                    : <span>{timerMinutes}</span>
                    : <span>{timerSecond}</span>
                </div>

            <div className="grid grid-rows-2 grid-cols-9 gap-4">
            {
            isLoading ? <Loading ratio={ratioClassName} /> : data.data.map((item, index) => {
                return <div key={item.id}
                    className={`relative card ${ratioClassName?.wrapper.default?.[item.ratio.default]} 
                        ${ratioClassName?.wrapper.md?.[item.ratio.md]}
                    `}
                    style={{height: index === 0 ? 180 : "auto"}}>
                    <div className="card-shadow rounded-xl">
                    <img
                        src={`/images/content/${item.imageUrl}`}
                        alt={item.title}
                        className="w-full h-full object-cover object-center overlay overflow-hidden rounded-xl"
                    />
                    </div>
                    <div className={`overlay ${ratioClassName?.meta?.[item.ratio.md]}`}>
                    <div className="tag text-white top-0 right-0">
                        {item.promo} %
                    </div>
                    <Link>
                        <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                    </Link>
                    <span className="text-gray-300">
                        {item.products} Item{item.products > 1 ? "s" : ""}
                    </span>
                    </div>
                </div>
            })
            }
            </div>
        </div>
    </section>
    )
}
