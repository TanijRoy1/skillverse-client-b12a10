import React, { useEffect, useState } from "react";
import MyContainer from "../components/MyContainer";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const AddCourse = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleAddCourse = (e) => {
    e.preventDefault();
    const newCourse = {
      title: e.target.title.value,
      image: e.target.image.value,
      price: parseInt(e.target.price.value),
      duration: e.target.duration.value,
      category: e.target.category.value,
      description: e.target.description.value,
      isFeatured: e.target.isFeatured.checked,
      instructorName: user?.displayName,
      instructorEmail: user?.email,
      instructorPhotoURL: user?.photoURL,
      enrollment: 0,
    };
    // console.log(newCourse);

    axiosSecure.post("/courses", newCourse).then((data) => {
      console.log(data.data);
      if (data.data.insertedId) {
        toast.success(`${newCourse.title} is added successfully`);
        e.target.reset();
        navigate("/");
      }
    });
  };


  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  
    useEffect(() => {
      setTheme(localStorage.getItem("theme") || "dark")
      document.querySelector("html").setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }, [theme]);

  return (
    <div className="min-h-screen bg-base-200 container mx-auto md:px-4  shadow-md border border-base-300 rounded-2xl md:py-12">
      
        <div className="animate__animated animate__zoomIn max-w-2xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
          <h2 className="sm:text-3xl text-2xl font-bold mb-6 text-center text-primary">
            Add a New Course
          </h2>

          <form onSubmit={handleAddCourse} className="space-y-5">
            <div>
              <label className="block mb-2 font-semibold">Course Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter course title"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/80 text-black border-none outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Image URL</label>
              <input
                type="text"
                name="image"
                placeholder="Enter image URL"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/80 text-black border-none outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 font-semibold">Price ($)</label>
                <input
                  type="text"
                  name="price"
                  placeholder="Enter price"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/80 text-black border-none outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Duration</label>
                <input
                  type="text"
                  name="duration"
                  placeholder="e.g. 5 hours, 2 weeks"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/80 text-black border-none outline-none"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 font-semibold">Instructor Name</label>
                <input
                  type="text"
                  name="instructorName"
                  value={user?.displayName}
                  placeholder="Instructor Name"
                  required
                  readOnly
                  className="w-full px-4 py-2 rounded-lg bg-white/80 text-black border-none outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Instructor Email</label>
                <input
                  type="text"
                  name="instructorEmail"
                  value={user?.email}
                  placeholder="Instructor Email"
                  required
                  readOnly
                  className="w-full px-4 py-2 rounded-lg bg-white/80 text-black border-none outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-semibold">Instructor Photo URL</label>
              <input
                type="text"
                name="instructorPhotoURL"
                value={user?.photoURL}
                placeholder="Instructor Photo URL"
                required
                readOnly
                className="w-full px-4 py-2 rounded-lg bg-white/80 text-black border-none outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Category</label>
              <select
                name="category"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/80 text-black border-none outline-none"
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

            <div>
              <label className="block mb-2 font-semibold">Description</label>
              <textarea
                name="description"
                placeholder="Write a detailed description..."
                required
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-white/80 text-black border-none outline-none resize-none"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="isFeatured"
                className="w-5 h-5 accent-[#FFD166]"
              />
              <label className="font-semibold">
                Mark as <span className="text-primary">Featured</span> Course
              </label>
            </div>

            <button
              type="submit"
              className="w-full btn bg-[#06D6A0] hover:bg-[#04B58A] text-black font-semibold border-0 mt-4"
            >
              Add Course
            </button>
          </form>
        </div>
      
    </div>
  );
};

export default AddCourse;
