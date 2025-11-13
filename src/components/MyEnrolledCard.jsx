import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link } from "react-router";

const MyEnrolledCard = ({ course, courses, setCourses, index }) => {
  const {
    title,
    image,
    category,
    _id,
    enrolled_by,
  } = course;
  const axiosSecure = useAxiosSecure();

  const handleDeleteEnrolled = (id) => {
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
        axiosSecure.delete(`/myEnrolledCourses/${id}`).then((data) => {
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
      className=" bg-base-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-base-300"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-3 right-3 bg-primary text-white text-xs px-3 py-1 rounded-full shadow-md">
      {category}
    </span>
      </div>

      <div className="p-5 space-y-2">
        <h3 className="text-xl font-semibold text-primary">
          {title}
        </h3>
        <p className="text-base-content/70 text-sm">
          <span className="font-semibold">Enrolled By:</span> {enrolled_by}
        </p>

        <div className="flex flex-col gap-2 pt-3">
          <div className="flex items-center justify-between gap-2">
            <button
            onClick={() => handleDeleteEnrolled(_id)}
            className="w-[47%] btn btn-sm bg-primary hover:bg-info text-white border-0 "
          >
            Delete
          </button>
          <Link to={`/progress`} className="flex-1 btn btn-sm bg-primary hover:bg-info text-white border-0">View Progress</Link>
          </div>
          <a href="/certificate.pdf" download="Certificate_Entrepreneurship_Business_Strategy.pdf" className="w-full btn btn-sm bg-[#FFD166] border-0 hover:bg-[#FFC300] text-black font-semibold">Complete Course</a>
        </div>
      </div>
    </div>
  );
};

export default MyEnrolledCard;
