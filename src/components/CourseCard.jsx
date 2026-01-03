import React from "react";
import { Link } from "react-router";

const CourseCard = ({ course, index }) => {
  const {
    _id,
    title,
    image,
    price,
    duration,
    category,
    description,
    instructorEmail,
  } = course;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-duration="700"
      className="bg-base-100 border border-base-300 rounded overflow-hidden hover:shadow-lg transform hover:-translate-y-1 transition-all ease-in duration-300 flex flex-col"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-40 transform hover:scale-105 transition-all duration-300 object-cover"
        />
        <span className="absolute top-3 left-3 badge badge-secondary badge-sm">
          {category}
        </span>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-base font-semibold text-accent line-clamp-2">
          {title}
        </h3>

        <p className="text-sm text-accent-content mt-2 line-clamp-2 flex-1">
          {description}
        </p>

        <div className="flex items-center justify-between text-sm mt-3">
          <span className="font-semibold text-primary">${price}</span>
          <span className="text-accent-content">{duration}</span>
        </div>

        <p className="text-xs text-accent-content mt-2 truncate">
          Instructor: {instructorEmail}
        </p>

        <Link
          to={`/courseDetails/${_id}`}
          className="btn btn-primary btn-sm w-full mt-4"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
