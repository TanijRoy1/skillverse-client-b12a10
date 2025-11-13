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
      data-aos-delay={index * 200}
      data-aos-duration="800"
      data-aos-once="false"
      className="bg-base-100 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 flex flex-col"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
      />

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>

        <p className="text-base-content/70 text-sm mb-3 flex-1">
          {description.slice(0, 100)}...
        </p>

        <div className="flex justify-between items-center mb-3">
          <span className="text-lg font-bold text-primary">${price}</span>
          <span className="text-sm text-base-content/70">{duration}</span>
        </div>

        <div className="flex justify-between items-center text-base-content/70 text-sm mb-4">
          <span className="capitalize">{category}</span>
          <span>By {instructorEmail}</span>
        </div>

        <Link
          to={`/courseDetails/${_id}`}
          className="btn btn-primary text-white border-0 w-full"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
