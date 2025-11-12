import React, { useEffect, useState } from "react";
import {
  FaClock,
  FaDollarSign,
  FaBookOpen,
  FaUser,
  FaStar,
  FaUsers,
  FaArrowLeft,
} from "react-icons/fa";
import MyContainer from "../components/MyContainer";
import { Link, useParams } from "react-router";
import Spinner from "../components/Spinner";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const CourseDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [courseLoading, setCourseLoading] = useState(true);
  const [refetch, setrefetch] = useState(false);
  const {
    title,
    image,
    price,
    duration,
    category,
    description,
    isFeatured,
    enrollment,
    instructorName,
    instructorEmail,
    instructorPhotoURL,
  } = course;

  useEffect(() => {
    axiosSecure.get(`/courses/${id}`).then((data) => {
      setCourse(data.data);
      setCourseLoading(false);
    });
  }, [axiosSecure, id, refetch]);

  const handleEnroll = () => {
    const newCourse = {
      courseId: id,
      title: title,
      image: image,
      price: price,
      duration: duration,
      category: category,
      description: description,
      isFeatured: isFeatured,
      instructorEmail: instructorEmail,
      instructorName: instructorName,
      instructorPhotoURL: instructorPhotoURL,
      enrollment: enrollment + 1,
      enrolled_by: user?.email,
    };

    axiosSecure.post(`/myEnrolledCourses/${id}`, newCourse).then((data) => {
      if (data.data.insertedId) {
        toast.success("You’ve successfully enrolled — happy learning!");
        setrefetch(!refetch);
      } else {
        toast.error(data.data.message);
      }
    });
  };

  if (courseLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-600 to-blue-500 text-white">
      <div className="relative w-full h-[65vh] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>

        {isFeatured && (
          <div className="absolute top-6 sm:left-7 left-4  bg-yellow-400 text-black px-4 py-1 font-bold rounded-full flex items-center gap-2 shadow-md">
            <FaStar /> Featured
          </div>
        )}

        <div className="absolute bottom-10 sm:left-10 left-4 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 text-[#FFD166]">
            {title}
          </h1>
          <p className="text-lg text-white/90">
            {description.slice(0, 150)}...
          </p>
        </div>
      </div>

      <MyContainer className="py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">About This Course</h2>
            <p className="text-white/90 leading-relaxed">{description}</p>

            <div className="mt-8 gap-4 bg-white/10 border border-white/20 p-4 rounded-2xl shadow-md">
              <h1 className="text-2xl font-bold mb-4 text-[#FFD166]">
                Course Instructor
              </h1>
              <div className="flex items-center gap-4">
                <img
                  src={instructorPhotoURL}
                  alt={instructorName}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white"
                />
                <div>
                  <h3 className="text-lg font-semibold">{instructorName}</h3>
                  <p className="text-white/70 text-sm"></p>
                  <p className="text-white/60 text-sm">{instructorEmail}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 space-y-4 shadow-xl">
            <h3 className="text-xl font-semibold text-[#FFD166]">
              Course Details
            </h3>
            <div className="flex items-center gap-2 text-white/90">
              <FaBookOpen /> <span>Category: {category}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <FaClock /> <span>Duration: {duration}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <FaDollarSign /> <span>Price: ${price}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <FaUser /> <span>Instructor: {instructorName}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <FaUsers /> <span>Enrolled: {enrollment} learners</span>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <button
                onClick={handleEnroll}
                className="btn bg-[#06D6A0] border-0 hover:bg-[#04B58A] text-black font-semibold"
              >
                Enroll Now
              </button>
              <Link
                to="/courses"
                className="btn flex items-center justify-center gap-2 bg-[#FFD166] border-0 hover:bg-[#FFC300] text-black font-semibold"
              >
                <FaArrowLeft /> Back to Courses
              </Link>
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default CourseDetails;
