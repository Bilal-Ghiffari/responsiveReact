import Clients from 'parts/Clients';
import Footer from 'parts/Footer';
import Header from 'parts/Header';
import Hero from 'parts/Homepages/Hero';
import BrowseRoom from 'parts/Homepages/BrowseRoom';
import Service from 'parts/Homepages/Service';
import Justarrived from 'parts/Homepages/Justarrived';
import React from 'react';
import useScrollAnchor from 'helpers/Hooks/useScrollAnchor';
import useModalDom from 'helpers/Hooks/useModalDom';
import Asidemenu from 'parts/Asidemenu';
import ItemDetaisHome from 'Mockup_Api/Items-home.json';

export default function Homepages() {
    useScrollAnchor();
    useModalDom();
    return (
        <>
            <Header theme="white" position="absolute" />
            <Hero />
            <Clients />
            <BrowseRoom {...ItemDetaisHome.categories }/>
            <Justarrived {...ItemDetaisHome.product} />
            <Service />
            <Asidemenu />
            <Footer />
        </>
    )
}
