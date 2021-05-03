import Asidemenu from 'parts/Asidemenu';
import Clients from 'parts/Clients';
import Footer from 'parts/Footer';
import Header from 'parts/Header';
import Hero from 'parts/Homepages/Hero';
import BrowseRoom from 'parts/Homepages/BrowseRoom';
import Justarrived from 'parts/Homepages/Justarrived';
import React from 'react';
import useScrollAnchor from 'helpers/Hooks/useScrollAnchor';
import useModalDom from 'helpers/Hooks/useModalDom';

export default function Homepages() {
    useScrollAnchor();
    useModalDom();
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
