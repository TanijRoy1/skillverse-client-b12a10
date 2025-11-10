import React, { useEffect, useState } from "react";
import {
  FaClock,
  FaDollarSign,
  FaBookOpen,
  FaUser,
  FaStar,
} from "react-icons/fa";
import MyContainer from "../components/MyContainer";
import useAxios from "../hooks/useAxios";
import { Link, useParams } from "react-router";
import Spinner from "../components/Spinner";

const CourseDetails = () => {
  
   const axiosPublic = useAxios();
   const {id} = useParams();
   const [course, setCourse] = useState({});
   const [courseLoading, setCourseLoading] = useState(true);
   const {title, image, price, duration, category, description, added_by, isFeatured} = course;
   
   useEffect(()=>{
    axiosPublic.get(`/courses/${id}`).then(data => {
        setCourse(data.data);
        setCourseLoading(false);
    })
   },[axiosPublic, id])
  

  
   if(courseLoading){
    return <Spinner></Spinner>;
   }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-600 to-blue-500 text-white">
      <div className="relative w-full h-[65vh] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        {isFeatured && (
          <div className="absolute top-6 left-7 bg-yellow-400 text-black px-4 py-1 font-bold rounded-full flex items-center gap-2 shadow-md">
            <FaStar /> Featured
          </div>
        )}

        <div className="absolute bottom-10 left-10 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 text-[#FFD166]">
            {title}
          </h1>
          <p className="text-lg text-white/90">
            {description.slice(0, 150)}...
          </p>
        </div>
      </div>

      <MyContainer className={`py-10`}>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">About This Course</h2>
            <p className="text-white/90 leading-relaxed">
              {description}
            </p>
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
              <FaUser /> <span>Added by: {added_by}</span>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <button className="btn bg-[#06D6A0] border-0 hover:bg-[#04B58A] text-black font-semibold">
                Enroll Now
              </button>
              <Link to={`/updateCourse/${id}`} className="btn bg-[#FFD166] border-0 hover:bg-[#FFC300] text-black font-semibold">
                Update Course
              </Link>
              <button className="btn bg-[#EF476F] border-0 hover:bg-[#D83157] font-semibold">
                Delete Course
              </button>
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default CourseDetails;
