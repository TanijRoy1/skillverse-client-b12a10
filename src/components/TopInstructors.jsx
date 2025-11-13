import React from "react";
import MyContainer from "./MyContainer";
import InstructorCard from "./InstructorCard";

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
    <section
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="false"
      className="bg-base-100 py-16"
    >
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
          {instructors.map((instructor, index) => (
            
            <InstructorCard instructor={instructor} index={index}></InstructorCard>
          ))}
        </div>
      </MyContainer>
    </section>
  );
};

export default TopInstructors;
