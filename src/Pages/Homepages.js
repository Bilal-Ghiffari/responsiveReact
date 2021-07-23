// My React.Component
import React from 'react';
import Documents from 'parts/Document';

// My Componets HomePages
import Header from 'parts/Header';
import Hero from 'parts/Homepages/Hero';
import BenefitService from 'parts/Homepages/BenefitService';
// import Clients from 'parts/Clients';
import BrowseRoom from 'parts/Homepages/BrowseRoom';
import Justarrived from 'parts/Homepages/Justarrived';
import Asidemenu from 'parts/Asidemenu';
import Footer from 'parts/Footer';



export default function Homepages() {

    return (
        <Documents>
            <Header theme="white" position="absolute" />
            <Hero />
            {/* <Clients /> */}
            <BenefitService />
            <BrowseRoom />
            <Justarrived />
            <Asidemenu />
            <Footer /> 
        </Documents> 
    )
}
