import React from 'react';
import Banner from '../components/Banner';
import PopularCourses from '../components/PopularCourses';
import WhyChooseUs from '../components/WhyChooseUs';
import TopInstructors from '../components/TopInstructors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCourses></PopularCourses>
            <WhyChooseUs></WhyChooseUs>
            <TopInstructors></TopInstructors>
        </div>
    );
};

export default Home;