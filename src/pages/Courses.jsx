import React, { useEffect, useState } from "react";
import MyContainer from "../components/MyContainer";
import Spinner from "../components/Spinner";
import CourseCard from "../components/CourseCard";
import useAxios from "../hooks/useAxios";
import AOS from "aos";
import "aos/dist/aos.css";

const Courses = () => {
  const axiosPublic = useAxios();
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [courseLoading, setCourseLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    axiosPublic.get("/courses").then((data) => {
      setCourses(data.data);
      setFilteredCourses(data.data);
      setCourseLoading(false);
    });
  }, [axiosPublic]);

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

  const handleFilter = (category) => {
    if (category === "All") {
      setCourseLoading(true);
      axiosPublic.get("/courses").then((data) => {
        setFilteredCourses(data.data);
        setSelectedCategory(category);
        setCourseLoading(false);
      });
      return;
    }

    setCourseLoading(true);
    axiosPublic.get(`/filteredCourses?category=${category}`).then((data) => {
      setFilteredCourses(data.data);
      setSelectedCategory(category);
      setCourseLoading(false);
    });
  };

  const categories = ["All", ...new Set(courses.map((c) => c.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-600 to-blue-500 text-white py-10">
      <MyContainer>
        <div className="text-center mb-10">
          <h1 className="animate__animated animate__lightSpeedInRight sm:text-4xl text-2xl font-extrabold mb-3 text-[#FFD166]">
            Explore All Courses
          </h1>
          <p className="animate__animated animate__lightSpeedInRight text-white/80 max-w-2xl mx-auto">
            Discover all our available courses across various categories. Filter
            by category to find the perfect one for your learning journey.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              data-aos="fade-left"
              data-aos-delay={index * 200}
              data-aos-duration="800"
              data-aos-once="false"
              key={category}
              onClick={() => handleFilter(category)}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 border cursor-pointer
                 ${
                   selectedCategory === category
                     ? "bg-[#FFD166] text-black border-[#FFD166]"
                     : "bg-white/10 text-white border-white/30 hover:bg-[#FFD166]/20"
                 }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {courseLoading ? (
          <Spinner />
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {filteredCourses.map((course, index) => (
              <CourseCard key={course._id} course={course} index={index} />
            ))}
          </div>
        )}
      </MyContainer>
    </div>
  );
};

export default Courses;
