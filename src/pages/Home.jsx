import React, { useEffect } from "react";
import Banner from "../components/Banner";
import PopularCourses from "../components/PopularCourses";
import WhyChooseUs from "../components/WhyChooseUs";
import TopInstructors from "../components/TopInstructors";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

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
