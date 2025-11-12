import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyEnrolledCard = ({ course, courses, setCourses, index }) => {
  const {
    title,
    image,
    category,
    duration,
    price,
    _id,
    description,
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
      <div className="">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
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
        <p className="text-base-content/70 text-sm">
          <span className="font-semibold">Enrolled By:</span> {enrolled_by}
        </p>

        <div className="flex items-center justify-between pt-3">
          <button
            onClick={() => handleDeleteEnrolled(_id)}
            className="btn bg-primary hover:bg-info text-white border-0 w-full"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyEnrolledCard;
