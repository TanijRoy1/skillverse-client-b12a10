import React, { useEffect, useState } from "react";
import MyContainer from "../components/MyContainer";
import Spinner from "../components/Spinner";
import MyEnrolledCard from "../components/MyEnrolledCard";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import AOS from "aos";
import "aos/dist/aos.css";

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
    <div className="py-10 min-h-screen bg-base-200 shadow-md border border-base-300 rounded-2xl">
      <MyContainer>
        <h2 className="animate__animated animate__lightSpeedInRight text-center sm:text-4xl text-2xl font-bold text-primary mb-4">
          My Enrolled Courses
        </h2>

        <p className="animate__animated animate__lightSpeedInRight text-center text-base-content max-w-2xl mx-auto mb-12">
          Here are the courses you’ve enrolled in. Continue your learning
          journey, track your progress, or remove courses you no longer wish to
          follow.
        </p>

        {courseLoading ? (
          <Spinner />
        ) : (
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
            {courses.length === 0 ? (
              <div className="text-center col-span-full py-16 bg-base-300 rounded-2xl shadow-inner border border-base-200">
                <h2 className="text-2xl font-semibold text-accent mb-2">
                  No Enrolled Courses Yet 🎓
                </h2>
                <p className="text-base-content">
                  You haven’t enrolled in any courses. Explore our{" "}
                  <span className="text-primary font-medium">
                    popular courses
                  </span>{" "}
                  to start learning today!
                </p>
              </div>
            ) : (
              courses.map((course, index) => (
                <MyEnrolledCard
                  key={course._id}
                  course={course}
                  courses={courses}
                  setCourses={setCourses}
                  index={index}
                />
              ))
            )}
          </div>
        )}
      </MyContainer>
    </div>
  );
};

export default MyEnrolledCourses;
