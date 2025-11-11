import React, { useEffect, useState } from "react";
import MyContainer from "../components/MyContainer";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner";
import MyCourseCard from "../components/MyCourseCard";

const MyAddedCourses = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const [courses, setCourses] = useState([]);
  const [courseLoading, setCourseLoading] = useState(true);

  useEffect(() => {
    if (loading) return;
    axiosSecure.get(`/myCourses?email=${user?.email}`).then((data) => {
      setCourses(data.data);
      setCourseLoading(false);
    });
  }, [axiosSecure, user, loading]);

  return (
    <div className=" py-10 min-h-screen bg-gray-50 shadow-md border border-gray-200 rounded-2xl">
      <MyContainer>
        <h2 className="text-center text-4xl font-bold text-primary mb-4">
          My Added Courses
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Manage all the courses you’ve created on SkillVerse. You can update
          course details, track enrollments, or remove outdated content anytime.
        </p>

        {courseLoading ? (
          <Spinner></Spinner>
        ) : (
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {courses.map((course) => (
              <MyCourseCard key={course._id} course={course}></MyCourseCard>
            ))}
          </div>
        )}
      </MyContainer>
    </div>
  );
};

export default MyAddedCourses;
