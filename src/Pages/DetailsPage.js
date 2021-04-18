import Asidemenu from 'parts/Asidemenu';
import Footer from 'parts/Footer';
import Header from 'parts/Header';
import Breadcrumb from 'componets/Breadcrumb';
import Detailspage from 'parts/Details/Productdetails';
import Suggestion from 'parts/Details/Suggestion';
import React from 'react';

export default function Homepages() {
    return (
        <>
            <Header position="details" />

            <Breadcrumb list={[
                {url: "/", name: "Home"},
                {url: "/categories/91231", name: "office Room"},
                {url: "/categories/91231/products/7888", name: "Details"}
            ]} />
            <Detailspage />
            <Suggestion />
            <Asidemenu />
            <Footer />
        </>
    )
}