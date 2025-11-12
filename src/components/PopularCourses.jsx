import React, { useEffect, useState } from "react";
import MyContainer from "./MyContainer";
import useAxios from "../hooks/useAxios";
import CourseCard from "./CourseCard";
import Spinner from "./Spinner";

const PopularCourses = () => {
  const axiosPublic = useAxios();
  const [courses, setCourses] = useState([]);
  const [courseLoading, setCourseLoading] = useState(true);

  useEffect(() => {
    axiosPublic.get("/popularCourses").then((data) => {
      setCourses(data.data);
      setCourseLoading(false);
    });
  }, [axiosPublic]);
  return (
    <div
     data-aos="fade-up"
data-aos-duration="800"
data-aos-once="false"
     className="bg-base-200 py-10">
      <MyContainer>
        <h2 className="text-center sm:text-4xl text-3xl font-bold text-primary mb-4">
          Popular Courses
        </h2>

        <p className="text-center text-base-content/70 max-w-2xl mx-auto mb-12">
          Explore our most sought-after courses curated by experts. Learn new
          skills, enhance your knowledge, and take your career to the next level
          with SkillVerse.
        </p>

        {courseLoading ? (
          <Spinner></Spinner>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {courses.map((course, index) => (
              <CourseCard key={course._id} course={course} index={index}></CourseCard>
            ))}
          </div>
        )}
      </MyContainer>
    </div>
  );
};

export default PopularCourses;
