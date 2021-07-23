import React from 'react'

export default function BenefitService() {
    return (
        <section className="mt-10 mb-56">
            <div className="container mx-auto">
                <div className="mb-14">
                    <h2 className="text-3xl font-semibold capitalize text-yellow-900">benefits you get when <br />using our services</h2>
                </div>
                <div className="grid grid-rows-1 md:grid-cols-3 grid-cols-1 gap-5">
                    <div className="col-span-1">
                        <div className="mt-10">
                            <div className="mb-7 flex justify-center">
                                <img src="/images/Icon/icon-quality.svg" alt="icon-quality" />
                            </div>
                            <h3 className="text-xl font-semibold text-yellow-800 flex justify-center md:justify-start">Best Quality</h3>
                            <p className="text-yellow-700 mt-3 flex justify-center md:justify-start">All of furniture uses the best materials <br />and choices for our customer</p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="mt-10">
                            <div className="mb-7 flex justify-center">
                                <img src="/images/Icon/icon-delivery.svg" alt="icon-quality" />
                            </div>
                            <h3 className="text-xl font-semibold text-yellow-800 flex justify-center md:justify-start">Free Shipping</h3>
                            <p className="text-yellow-700 mt-3 flex justify-center md:justify-start">Free shipping everytime you buy furniture <br />from us without exception</p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="mt-10">
                            <div className="mb-7 flex justify-center">
                                <img src="/images/Icon/icon-warranty.svg" alt="icon-quality" />
                            </div>
                            <h3 className="text-xl font-semibold text-yellow-800 flex justify-center md:justify-start">Warranty</h3>
                            <p className="text-yellow-700 mt-3 flex justify-center md:justify-start">Every time you buy our furniture products, <br />you will get a rranty without exception</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
