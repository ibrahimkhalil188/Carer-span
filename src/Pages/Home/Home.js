import React from 'react';
import Reviews from '../Reviews/Reviews';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='bg-[#F2F2F2]'>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
            <Footer />
        </div>
    );
};

export default Home;