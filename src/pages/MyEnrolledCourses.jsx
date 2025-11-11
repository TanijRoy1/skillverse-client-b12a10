import React, { useEffect, useState } from "react";
import MyContainer from "../components/MyContainer";
import Spinner from "../components/Spinner";
import MyEnrolledCard from "../components/MyEnrolledCard";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";

const MyEnrolledCourses = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const [courses, setCourses] = useState([]);
  const [courseLoading, setCourseLoading] = useState(true);

  useEffect(() => {
    if (loading) return;
    axiosSecure.get(`/myEnrolledCourses?email=${user.email}`).then((data) => {
      setCourses(data.data);
      setCourseLoading(false);
    });
  }, [loading, user, axiosSecure]);

  return (
    <div className="py-10 min-h-screen bg-gray-50 shadow-md border border-gray-200 rounded-2xl">
      <MyContainer>
        <h2 className="text-center text-4xl font-bold text-primary mb-4">
          My Enrolled Courses
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Here are the courses you’ve enrolled in. Continue your learning
          journey, track your progress, or remove courses you no longer wish to
          follow.
        </p>

        {courseLoading ? (
          <Spinner />
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {courses.map((course) => (
              <MyEnrolledCard key={course._id} course={course} />
            ))}
          </div>
        )}
      </MyContainer>
    </div>
  );
};

export default MyEnrolledCourses;
