import React from 'react';

export default function Courier({data, isLoading, fnUpdateState}) {
console.log(data)
    return (
        <>
            {
                isLoading ? Array(2).fill().map((_, index ) => (
                    <div key={index} className="px-2 h-24 mb-4 w-6/12">
                        <div className="bg-gray-300 w-full h-full animate-pulse rounded-lg mx-2"></div>
                    </div>
                )) : data?.couriers.map((item) => (
                        <div key={item.id} className="px-2 w-6/12 h-24 mb-4">
                            <button
                                type="button"
                                onClick={() => fnUpdateState({
                                target: {
                                    name: "Courier",
                                    value: item.id
                                }
                                })}
                                className="border border-gray-200 focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none"
                            >
                            <img src={item.imgUrl} alt={item.name} className="object-contain max-h-full" />
                            </button>
                        </div>
                ))
            }
        </>
    )
}
