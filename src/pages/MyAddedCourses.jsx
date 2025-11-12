import React, { useEffect, useState } from "react";
import MyContainer from "../components/MyContainer";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner";
import MyCourseCard from "../components/MyCourseCard";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

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
    <div className=" py-10 min-h-screen bg-base-200 shadow-md border border-base-300 rounded-2xl">
      <MyContainer>
        <h2 className="animate__animated animate__lightSpeedInRight text-center sm:text-4xl text-2xl font-bold text-primary mb-4">
          My Added Courses
        </h2>

        <p className="animate__animated animate__lightSpeedInRight text-center text-base-content max-w-2xl mx-auto mb-12">
          Manage all the courses you’ve created on SkillVerse. You can update
          course details, track enrollments, or remove outdated content anytime.
        </p>

        {courseLoading ? (
          <Spinner></Spinner>
        ) : (
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
            {courses.length === 0 ? (
              <div className="text-center col-span-full py-16 bg-base-300 rounded-2xl shadow-inner border border-base-200">
                <h2 className="text-2xl font-semibold text-accent mb-2">
                  No Added Courses Found 📚
                </h2>
                <p className="text-base-content mb-6">
                  You haven’t added any courses yet. Start sharing your
                  knowledge by{" "}
                  <span className="text-primary font-medium">
                    creating a new course
                  </span>{" "}
                  today!
                </p>
                <Link
                  to="/dashboard/addCourse"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-lg shadow hover:bg-primary/90 transition-all duration-200"
                >
                  + Add New Course
                </Link>
              </div>
            ) : (
              courses.map((course, index) => (
                <MyCourseCard
                  key={course._id}
                  course={course}
                  courses={courses}
                  setCourses={setCourses}
                  index={index}
                ></MyCourseCard>
              ))
            )}
          </div>
        )}
      </MyContainer>
    </div>
  );
};

export default MyAddedCourses;
