import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import PopularCourses from "../components/PopularCourses";
import WhyChooseUs from "../components/WhyChooseUs";
import TopInstructors from "../components/TopInstructors";
import AOS from "aos";
import "aos/dist/aos.css";
import LearningPaths from "../components/LearningPaths";
import StudentTestimonials from "../components/StudentTestimonials";
import HowSkillVerseWorks from "../components/HowSkillVerseWorks";
import LatestBlogs from "../components/LatestBlogs";
import CareerOutcomes from "../components/CareerOutcomes";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";

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

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  
    useEffect(() => {
      setTheme(localStorage.getItem("theme") || "dark");
      document.querySelector("html").setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }, [theme]);

  return (
    <div>
      <Banner></Banner>
      <PopularCourses></PopularCourses>
      <LearningPaths></LearningPaths>
      <WhyChooseUs></WhyChooseUs>
      <HowSkillVerseWorks></HowSkillVerseWorks>
      <TopInstructors></TopInstructors>
      <StudentTestimonials></StudentTestimonials>
      <CareerOutcomes></CareerOutcomes>
      <LatestBlogs></LatestBlogs>
      <FAQSection></FAQSection>
    </div>
  );
};

export default Home;
