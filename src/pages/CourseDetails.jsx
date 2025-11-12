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
import Swal from "sweetalert2";

const CourseDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [courseLoading, setCourseLoading] = useState(true);
  const [refetch, setrefetch] = useState(false);
  const [reviews, setReviews] = useState([]);
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

  useEffect(() => {
    axiosSecure.get(`/reviews/${id}`).then((data) => {
      setReviews(data.data);
    });
  }, [axiosSecure, id]);

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

  const handleAddReview = (e) => {
    e.preventDefault();
    const review = {
      courseId: id,
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
      rating: parseInt(e.target.rating.value),
      review: e.target.review.value,
    };
    // console.log(review);
    axiosSecure.post("/reviews", review).then((data) => {
      if (data.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Review submitted! Thanks for sharing your feedback",
          showConfirmButton: false,
          timer: 1500,
        });

        review._id = data.data.insertedId;
        setReviews([...reviews, review]);
        e.target.reset();
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
        <div className="flex md:flex-row flex-col gap-8">
          <div className="flex-1">
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

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl md:w-[40%] p-6 space-y-4 shadow-xl">
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

        <section className="mt-16 sm:bg-white/10 sm:border pt-6 border-t border-white/20 sm:rounded-2xl sm:p-8 sm:shadow-xl">
          <h2 className="sm:text-3xl text-2xl font-bold text-[#FFD166] mb-6 text-center">
            Student Reviews
          </h2>

          <form
            onSubmit={handleAddReview}
            className="max-w-xl mx-auto mb-12 p-6 rounded-2xl bg-white/10 border border-white/20 shadow-lg backdrop-blur-md space-y-5"
          >
            <h2 className="text-2xl font-bold text-center text-white mb-4">
              Share Your Feedback
            </h2>

            <div>
              <label className="block font-semibold mb-2 text-white/90">
                Your Rating
              </label>
              <select
                name="rating"
                className="w-full px-4 py-3 rounded-xl bg-white/90 text-black font-medium border-none outline-none focus:ring-2 focus:ring-[#FFD166] transition"
              >
                <option value="5">⭐⭐⭐⭐⭐ (5-Excellent)</option>
                <option value="4">⭐⭐⭐⭐ (4-Good)</option>
                <option value="3">⭐⭐⭐ (3-Average)</option>
                <option value="2">⭐⭐ (2-Poor)</option>
                <option value="1">⭐ (1-Terrible)</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2 text-white/90">
                Your Review
              </label>
              <textarea
                name="review"
                placeholder="Share your experience..."
                rows="5"
                className="w-full px-4 py-3 rounded-xl bg-white/90 text-black border-none outline-none resize-none focus:ring-2 focus:ring-[#06D6A0] transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#06D6A0] to-[#FFD166] text-black font-semibold text-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
            >
              Submit Review
            </button>
          </form>

          <div className="space-y-6">
            {reviews.length === 0 ? (
              <p className="text-center text-white/70 text-lg italic bg-white/5 py-6 rounded-xl border border-white/20">
                No reviews have been added yet. Be the first to share your
                experience!
              </p>
            ) : (
              reviews.map((r, index) => (
                <div
                  key={index}
                  className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-md hover:shadow-lg hover:border-[#FFD166]/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <img
                      src={r.photo}
                      alt={r.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#FFD166]"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white flex sm:flex-row flex-col sm:items-center sm:gap-2 gap-1">
                        {r.name}
                        <span className="flex">
                          {[...Array(r.rating)].map((_, i) => (
                            <FaStar
                              key={i}
                              className="text-yellow-400 text-sm"
                            />
                          ))}
                        </span>
                      </h3>
                      <p className="text-white/60 text-sm mt-1">{r.email}</p>
                    </div>
                  </div>

                  <p className="text-white/90 leading-relaxed bg-white/5 p-3 rounded-xl italic">
                    “{r.review}”
                  </p>
                </div>
              ))
            )}
          </div>
        </section>
      </MyContainer>
    </div>
  );
};

export default CourseDetails;
