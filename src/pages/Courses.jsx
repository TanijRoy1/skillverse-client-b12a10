import React, { useEffect, useState } from "react";
import MyContainer from "../components/MyContainer";
import Spinner from "../components/Spinner";
import CourseCard from "../components/CourseCard";
import useAxios from "../hooks/useAxios";


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


  const handleFilter = (category) => {
    if(category === "All"){
        setCourseLoading(true);
        axiosPublic.get("/courses").then((data) => {
        setFilteredCourses(data.data);
        setSelectedCategory(category);
        setCourseLoading(false);
      });
        return;
    }
    
    setCourseLoading(true);
    axiosPublic.get(`/filteredCourses?category=${category}`).then(data => {
        setFilteredCourses(data.data);
        setSelectedCategory(category)
        setCourseLoading(false);
    })
  }

  
  const categories = ["All", ...courses.map((c) => c.category)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-600 to-blue-500 text-white py-10">
      <MyContainer>
       
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold mb-3 text-[#FFD166]">
            Explore All Courses
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Discover all our available courses across various categories.
            Filter by category to find the perfect one for your learning journey.
          </p>
        </div>

        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
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
        ): (
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        ) 
        
        }
      </MyContainer>
    </div>
  );
};

export default Courses;
