import React from 'react'

export default function Service() {
    return (
        // <section className="mt-28">
        //     <div className="container mx-auto">
        //         <div className="flex flex-start mb-9 justify-center">
        //             <h3 className="text-2xl capitalize font-semibold">we have an expert & <br /> dedicate team member</h3>
        //         </div>
        //         <div className=" md:ml-80 grid grid-rows-1 md:grid-cols-6 grid-cols-2 gap-8">
        //         <div className="row-span-1 md:col-span-1">
        //             <img className="object-cover w-full rounded-xl" src="/images/content/image-service-1.png" alt="person-CEO" />
        //             <div className="mt-3">
        //                 <h4 className="text-xl font-semibold capitalize">watson gabrien</h4>
        //                 <span className="text-sm text-gray-500 capitalize">Founder - CEO</span>
        //             </div>
        //         </div>
        //         <div className="md:row-span-2 md:col-span-1">
        //             <img className="object-cover w-full rounded-xl" src="/images/content/image-service-2.png" alt="person-CEO" />
        //             <div className="mt-3">
        //                 <h4 className="text-xl font-semibold capitalize">jerome bell</h4>
        //                 <span className="text-sm text-gray-500 capitalize">co-founder</span>
        //             </div>
        //         </div>
        //         <div className="row-span-1 md:col-span-1 ">
        //             <img className="object-cover w-full rounded-xl" src="/images/content/image-service-3.png" alt="person-CEO" />
        //             <div className="mt-3">
        //                 <h4 className="text-xl font-semibold capitalize">bassie cooper</h4>
        //                 <span className="text-sm text-gray-500 capitalize">co-founder</span>
        //             </div>
        //         </div>
        //         <div className="row-span-1 md:col-span-1 ">
        //             <img className="object-cover w-full rounded-xl" src="/images/content/image-service-4.png" alt="person-CEO" />
        //             <div className="mt-3">
        //                 <h4 className="text-xl font-semibold capitalize">wilson</h4>
        //                 <span className="text-sm text-gray-500 capitalize">manager</span>
        //             </div>
        //         </div>
        //         </div>
        //     </div>
        // </section>

        <section className="container mx-auto">
            <div className="flex mb-9 justify-center">
                <h3 className="text-2xl capitalize font-semibold">we have an expert & <br /> dedicate team member</h3>
            </div>
            <div className="flex flex-wrap md:justify-center py-16">
                <div className="w-full  md:w-auto md:flex-initial py-4 md:py-0 px-4 md:px-0">
                    <img className="rounded-xl mx-auto" style={{width: 137, height: 170}} src="/images/content/image-service-1.png" alt="person-CEO" />
                    <div className="mt-3 ">
                        <h4 className="text-xl font-semibold capitalize">watson gabrien</h4>
                        <span className="text-sm text-gray-500 capitalize">Founder - CEO</span>
                    </div>
                </div>
                <div className="w-full  md:w-auto md:flex-initial py-4 md:py-0 px-4 md:px-6">
                    <img className="rounded-xl mx-auto" style={{width: 137, height: 170}} src="/images/content/image-service-2.png" alt="person-CEO" />
                    <div className="mt-3 ">
                        <h4 className="text-xl font-semibold capitalize">jerome bell</h4>
                        <span className="text-sm text-gray-500 capitalize">co-founder</span>
                    </div>
                </div>
                <div className="w-full  md:w-auto md:flex-initial py-4 md:py-0 px-4 md:px-6">
                    <img className="rounded-xl mx-auto" style={{width: 137, height: 170}} src="/images/content/image-service-3.png" alt="person-CEO" />
                    <div className="mt-3 ">
                        <h4 className="text-xl font-semibold capitalize">bassie cooper</h4>
                        <span className="text-sm text-gray-500 capitalize">co-founder</span>
                    </div>
                </div>
                <div className="w-full  md:w-auto md:flex-initial py-4 md:py-0 px-4 md:px-6">
                    <img className="rounded-xl mx-auto" style={{width: 137, height: 170}} src="/images/content/image-service-4.png" alt="person-CEO" />
                    <div className="mt-3 ">
                        <h4 className="text-xl font-semibold capitalize">wilson</h4>
                        <span className="text-sm text-gray-500 capitalize">manager</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
