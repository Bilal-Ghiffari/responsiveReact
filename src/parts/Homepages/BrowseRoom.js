import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import fetch from 'helpers/Fetch';
import useAsnyc from 'helpers/Hooks/useAsnyc';
import Loading from 'helpers/Loading/skeleton';


export default function BrowseRoom() {
    const {data, run, isLoading} = useAsnyc();

    useEffect(() => {
        run(fetch({url: "/api/categories/?page=1&limit=4"}))
    },[run]);

    console.log(data);

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
    <section className="flex bg-gray-100 py-16 px-4" id="browse-the-room">
        <div className="container mx-auto">
            <div className="flex flex-start mb-4">
            <h3 className="text-2xl capitalize font-semibold">
                browse accessories <br className="" />that we designed for you
            </h3>
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

                {
                    item.id === 1 || item.id === 4 ? (
                    <div className="tag text-white top-0 right-0">
                    {item.promo}
                    </div>
                    ) : ""
                }
            
                {/* <span className="">
                    {item.products} item{item.products > 1 ? "s" : ""}
                </span> */}
                <Link>
                    <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                </Link>
                </div>
            </div>
            })
            }
            </div>
        </div>
    </section>
    )
}
