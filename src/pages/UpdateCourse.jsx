import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useAxios from "../hooks/useAxios";

const UpdateCourse = () => {
  const axiosPublic = useAxios();
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const {
    title,
    image,
    price,
    duration,
    category,
    description,
    isFeatured,
  } = course;

  useEffect(() => {
    axiosPublic.get(`/courses/${id}`).then((data) => {
      setCourse(data.data);
    });
  }, [axiosPublic, id]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-purple-600 to-blue-500 py-10 px-4">
      <div className="card bg-white/20 backdrop-blur-md w-full max-w-lg shadow-2xl border border-white/30 text-white">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-[#FFD166] text-center mb-5">
            Update Course
          </h1>
          <form>
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
              <input
                type="text"
                name="category"
                defaultValue={category}
                className="input input-bordered w-full text-black"
                required
              />
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
