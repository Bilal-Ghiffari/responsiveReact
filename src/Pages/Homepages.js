import Asidemenu from 'parts/Asidemenu';
import Clients from 'parts/Clients';
import Footer from 'parts/Footer';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import BrowseRoom from 'parts/Homepages/BrowseRoom';
import Justarrived from 'parts/Homepages/Justarrived';
import React from 'react';

export default function Homepages() {
    return (
        <>
            <Header theme="white" position="absolute" />
            <Hero />
            <BrowseRoom />
            <Justarrived />
            <Clients />
            <Asidemenu />
            <Footer />
        </>
    )
}
