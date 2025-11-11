import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import Spinner from "../components/Spinner";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const UpdateCourse = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [courseLoading, setCourseLoading] = useState(true);
  const navigate = useNavigate();
  const {
    title,
    image,
    price,
    duration,
    category,
    description,
    isFeatured,
  } = course;

  const handleUpdateCourse = (e) => {
      e.preventDefault();
      const updatedCourse = {
        title: e.target.title.value,
        image: e.target.image.value,
        price: parseInt(e.target.price.value),
        duration: e.target.duration.value,
        category: e.target.category.value,
        description: e.target.description.value,
        isFeatured: e.target.isFeatured.checked,
      };
      // console.log(updatedCourse);
  
      axiosSecure.patch(`/courses/${id}`, updatedCourse).then(data => {
          // console.log(data.data)
          if(data.data.modifiedCount){
              toast.success(`${updatedCourse.title} is updated successfully`);
              navigate("/");
          }
      })
  
    };
  

  useEffect(() => {
    axiosSecure.get(`/courses/${id}`).then((data) => {
      setCourse(data.data);
      setCourseLoading(false);
    });
  }, [axiosSecure, id]);

  if(courseLoading){
    return <Spinner></Spinner>;
   }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-purple-600 to-blue-500 py-10 px-4">
      <div className="card bg-white/20 backdrop-blur-md w-full max-w-lg shadow-2xl border border-white/30 text-white">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-[#FFD166] text-center mb-5">
            Update Course
          </h1>
          <form onSubmit={handleUpdateCourse}>
            <div className="flex flex-col gap-1 mb-3">
              <label className="label">Title</label>
              <input
                type="text"
                name="title"
                defaultValue={title}
                className="input input-bordered w-full text-black"
                required
              />
            </div>

            <div className="flex flex-col gap-1 mb-3">
              <label className="label">Image URL</label>
              <input
                type="text"
                name="image"
                defaultValue={image}
                className="input input-bordered w-full text-black"
                required
              />
            </div>

            <div className="flex gap-3 w-full mb-3">
                <div className="flex flex-col gap-1 w-full">
              <label className="label">Price</label>
              <input
                type="number"
                name="price"
                step="0.01"
                defaultValue={price}
                className="input input-bordered w-full text-black"
                required
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="label">Duration</label>
              <input
                type="text"
                name="duration"
                defaultValue={duration}
                className="input input-bordered w-full text-black"
                required
              />
            </div>
            </div>
            <div className="flex items-end gap-3 w-full mb-3">
                <div className="flex flex-col w-full gap-1">
              <label className="label">Category</label>
              <select
                name="category"
                defaultValue={category}
                required
                className="select w-full text-black"
              >
                <option value="">Select category</option>
                <option value="Programming">Programming</option>
                <option value="Frontend Development">
                  Frontend Development
                </option>
                <option value="Artificial Intelligence">
                  Artificial Intelligence
                </option>
                <option value="Security">Security</option>
                <option value="Web Development">Web Development</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Business">Business</option>
                <option value="Data Science">Data Science</option>
                <option value="Photography">Photography</option>
              </select>
            </div>
            <div className="flex items-center mb-1 gap-2 w-full">
              <input
                type="checkbox"
                name="isFeatured"
                defaultChecked={isFeatured}
                className="checkbox checkbox-primary"
              />
              <span>Featured Course</span>
            </div>
            </div>

            

            <div className="flex flex-col gap-1">
              <label className="label">Description</label>
              <textarea
                name="description"
                defaultValue={description}
                className="textarea textarea-bordered w-full text-black"
                rows={5}
                required
              />
            </div>

            

            <button
              type="submit"
              className="btn bg-[#FFD166] hover:bg-[#FFC300] border-0 w-full  mt-8 text-black font-semibold"
            >
              Update Course
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCourse;
