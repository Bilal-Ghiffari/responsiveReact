import React from 'react';
import { Link } from 'react-router-dom';

export default function NOtFound({
    title="404 NOT FOUND",
    body="Looks like this page not found"
})
{
    return (
    <section className=" mt-20">
        <div className="container mx-auto min-h-screen">
            <div className="flex flex-col items-center justify-center">
            <div className="w-full md:w-4/12 text-center">
                <h2 className="text-3xl font-semibold mb-6">{title}</h2>
                <p className="text-lg mb-12">
                    {body}
                </p>
                <Link
                to="/"
                className="text-white bg-yellow-800 w-full py-3 rounded-full text-lg transition-all duration-200 px-8 cursor-pointer"
                >
                Back to Shop
                </Link>
            </div>
            </div>
        </div>
    </section>
    )
}