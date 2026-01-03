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

  const [searchText, setSearchText] = useState("");
  const [sort, setSort] = useState("");

  const limit = 8;
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(0);
  };
  const handleSortPrice = (e) => {
    setSort(e.target.value);
    setCurrentPage(0);
  };

  useEffect(() => {
    axiosPublic
      .get(
        `/courses?limit=${limit}&skip=${
          currentPage * limit
        }&search=${searchText}&sort=${sort}`
      )
      .then((data) => {
        setCourses(data.data.courses);
        setTotalPages(Math.ceil(data.data.count / limit));
        setFilteredCourses(data.data.courses);
        setCourseLoading(false);
      });
  }, [axiosPublic, searchText, currentPage, sort]);

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
        setFilteredCourses(data.data.courses);
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
    <div className="min-h-screen bg-linear-to-br from-indigo-700 via-purple-600 to-blue-500 text-white py-10">
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

        <div className="flex flex-wrap justify-center gap-4 mb-6">
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
        <div className="flex justify-between gap-2 flex-wrap mb-4">
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              value={searchText}
              onChange={(e) => handleSearch(e)}
              required
              placeholder="Search"
            />
          </label>
          <select
            value={sort}
            onChange={(e) => handleSortPrice(e)}
            className="select"
          >
            <option value="">Pick a Option</option>
            <option value="price_asc">Price Ascending</option>
            <option value="price_desc">Price Descending</option>
          </select>
        </div>

        {courseLoading ? (
          <Spinner />
        ) : (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
            {filteredCourses.map((course, index) => (
              <CourseCard key={course._id} course={course} index={index} />
            ))}
          </div>
        )}

        <div className="flex gap-2 justify-center py-10">
          {currentPage > 0 && (
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="btn btn-sm"
            >
              Prev
            </button>
          )}
          {[...Array(totalPages).keys()].map((i) => (
            <button
              onClick={() => setCurrentPage(i)}
              key={i}
              className={`btn btn-sm ${currentPage === i && "btn-primary"}`}
            >
              {i + 1}
            </button>
          ))}
          {currentPage < totalPages - 1 && (
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="btn btn-sm"
            >
              Next
            </button>
          )}
        </div>
      </MyContainer>
    </div>
  );
};

export default Courses;
