import React from "react";
import { Link } from "react-router";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const MyCourseCard = ({ course }) => {
  const { _id, title, image, category, price, duration, description } = course;

  return (
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <button
          
          className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 hover:bg-red-600 transition-all duration-300 shadow-md"
          title="Delete Course"
        >
          <FaTrash size={16} />
        </button>
      </div>

      <div className="p-5 space-y-2">
        <h3 className="text-xl font-semibold text-gray-800 line-clamp-1">
          {title}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2">{description}</p>

        <div className="flex justify-between text-sm text-gray-600">
          <p>
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p>
            <span className="font-semibold">Price:</span> ${price}
          </p>
        </div>

        <p className="text-gray-600 text-sm">
          <span className="font-semibold">Duration:</span> {duration}
        </p>

        <div className="flex items-center justify-between pt-3">
          <Link
            to={`/courseDetails/${_id}`}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-all"
          >
            <FaEye /> View
          </Link>

          <Link
            to={`/updateCourse/${_id}`}
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-all"
          >
            <FaEdit /> Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyCourseCard;
