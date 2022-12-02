import React from 'react';
import About from '../About/About';
import Carousel from '../Carousel/Carousel';
import Categories from '../Categories/Categories';
import ChooseUs from '../ChooseUs/ChooseUs';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div className='mx-5'>
            <Carousel></Carousel>
            <Categories></Categories>
            <ChooseUs></ChooseUs>
            <About></About>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;