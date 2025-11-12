import React from 'react';
import Banner from '../components/Banner';
import PopularCourses from '../components/PopularCourses';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCourses></PopularCourses>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;