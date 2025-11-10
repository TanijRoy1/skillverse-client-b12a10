import React, { useEffect, useState } from "react";
import MyContainer from "./MyContainer";
import useAxios from "../hooks/useAxios";
import CourseCard from "./CourseCard";

const PopularCourses = () => {
    const axiosPublic = useAxios();
    const [courses, setCourses] = useState([]);

    useEffect(()=> {
        axiosPublic.get("/courses").then(data => {
            setCourses(data.data);
        })
    },[axiosPublic])
  return (
    <div className="bg-gray-100 py-10">
      <MyContainer>
        <h2 className="text-center text-4xl font-bold text-primary mb-4">
          Popular Courses
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Explore our most sought-after courses curated by experts. Learn new
          skills, enhance your knowledge, and take your career to the next level
          with SkillVerse.
        </p>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            {
                courses.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
            }
        </div>


      </MyContainer>
    </div>
  );
};

export default PopularCourses;
