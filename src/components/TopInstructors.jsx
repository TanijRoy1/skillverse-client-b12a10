import React from "react";
import { FaStar } from "react-icons/fa";
import MyContainer from "./MyContainer";

const instructors = [
  {
    id: 1,
    name: "Sophia Carter",
    role: "UI/UX Designer",
    image:
      "https://i.ibb.co.com/QFsnhNnj/premium-photo-1669704098876-2a38eb10e56a.jpg",
    students: "1.2k+",
    rating: 4.9,
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Full Stack Developer",
    image: "https://i.ibb.co.com/snCty4d/istockphoto-2242095775-612x612.webp",
    students: "2.4k+",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Emma Brown",
    role: "Digital Marketing Expert",
    image:
      "https://i.ibb.co.com/hR1bd1gw/tran-nhu-tuan-s0e-N-D-Hrqc-unsplash.jpg",
    students: "1.8k+",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Daniel Lee",
    role: "Data Scientist",
    image: "https://i.ibb.co.com/F43j8tRr/istockphoto-2172166279-612x612.webp",
    students: "3.1k+",
    rating: 4.9,
  },
];

const TopInstructors = () => {
  return (
    <section className="bg-base-100 py-16">
      <MyContainer>
        <div className="text-center mb-12">
          <h2 className="sm:text-4xl text-2xl font-bold text-primary mb-3">
            Meet Our Top Instructors
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Learn from industry-leading professionals who bring years of
            experience, creativity, and passion to every lesson they teach.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-500"
            >
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-center text-white transition duration-500">
                <h3 className="text-xl font-semibold mb-1">
                  {instructor.name}
                </h3>
                <p className="text-sm mb-2">{instructor.role}</p>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <FaStar className="text-yellow-400" />
                  <span>{instructor.rating}</span>
                </div>
                <p className="text-xs">{instructor.students} Students</p>
              </div>
            </div>
          ))}
        </div>
      </MyContainer>
    </section>
  );
};

export default TopInstructors;
