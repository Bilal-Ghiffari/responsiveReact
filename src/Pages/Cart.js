import React from 'react';
import Footer from 'parts/Footer';
import Header from 'parts/Header';
import Breadcrumb from 'componets/Breadcrumb';
import Shoppingdetails from 'parts/Cart/Shoppingdetails';
import Shippingdetails from 'parts/Cart/Shippingdetails';
import Asidemenu from 'parts/Asidemenu';

export default function Homepages() {
    return (
        <>
            <Header position="details" />
            <Breadcrumb list={[
                {url: "/", name: "Home"},
                {url: "/cart", name: "Shopping Cart"},
            ]} />
            <section class="md:py-16">
                <div class="container mx-auto px-4">
                <div class="flex -mx-4 flex-wrap">
                    <Shoppingdetails />
                    <Shippingdetails />
                </div>
                </div>
            </section>
            <Asidemenu />
            <Footer />
        </>
    )
}