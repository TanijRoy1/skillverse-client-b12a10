import React from "react";
import { Link } from "react-router";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyCourseCard = ({ course, courses, setCourses, index }) => {
  const { _id, title, image, category, price, duration, description } = course;
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/myCourses/${id}`).then((data) => {
          if (data.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your course has been deleted.",
              icon: "success",
            });
            setCourses(courses.filter((course) => course._id !== id));
          }
        });
      }
    });
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 200}
      data-aos-duration="800"
      data-aos-once="false"
      className="relative bg-base-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-base-300"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <button
          onClick={() => handleDelete(_id)}
          className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full cursor-pointer opacity-100 lg:opacity-0 lg:group-hover:opacity-100 hover:bg-red-600 transition-all duration-300 shadow-md"
          title="Delete Course"
        >
          <FaTrash size={16} />
        </button>
      </div>

      <div className="p-5 space-y-2">
        <h3 className="text-xl font-semibold text-primary line-clamp-1">
          {title}
        </h3>
        <p className="text-base-content/70 text-sm line-clamp-2">
          {description}
        </p>

        <div className="flex justify-between text-sm text-base-content/70">
          <p>
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p>
            <span className="font-semibold">Price:</span> ${price}
          </p>
        </div>

        <p className="text-base-content/70 text-sm">
          <span className="font-semibold">Duration:</span> {duration}
        </p>

        <div className="flex items-center justify-between pt-3">
          <Link
            to={`/courseDetails/${_id}`}
            className="flex items-center gap-2 text-primary hover:text-info font-medium transition-all"
          >
            <FaEye /> View
          </Link>

          <Link
            to={`/updateCourse/${_id}`}
            className="flex items-center gap-2 text-primary hover:text-info font-medium transition-all"
          >
            <FaEdit /> Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyCourseCard;
