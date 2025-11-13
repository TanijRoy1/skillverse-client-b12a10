import { useState } from "react";
import { FaStar } from "react-icons/fa";

const InstructorCard = ({ instructor, index }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleToggle = () => {
    if (window.innerWidth < 640) {
      setShowInfo((prev) => !prev);
    }
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 200}
      data-aos-duration="800"
      data-aos-once="false"
      key={instructor.id}
      onClick={handleToggle}
      className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-500"
    >
      <img
        src={instructor.image}
        alt={instructor.name}
        className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
      />

      <div
        className={`
                      absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center text-white transition duration-500
                      ${showInfo ? "opacity-100" : "opacity-0"} 
                      sm:opacity-0 sm:group-hover:opacity-100
                   `}
      >
        <h3 className="text-xl font-semibold mb-1">{instructor.name}</h3>
        <p className="text-sm mb-2">{instructor.role}</p>
        <div className="flex items-center justify-center gap-2 mb-1">
          <FaStar className="text-yellow-400" />
          <span>{instructor.rating}</span>
        </div>
        <p className="text-xs">{instructor.students} Students</p>
      </div>
    </div>
  );
};

export default InstructorCard;
