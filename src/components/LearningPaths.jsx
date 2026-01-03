import { FaRoad, FaCode, FaDatabase, FaReact } from "react-icons/fa";
import MyContainer from "./MyContainer";
import { Link } from "react-router";

const learningPaths = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Learn HTML, CSS, JavaScript, and React to build modern, responsive user interfaces.",
    icon: <FaReact />,
    duration: "3–4 Months",
  },
  {
    id: 2,
    title: "MERN Stack Developer",
    description:
      "Become a full-stack developer using MongoDB, Express, React, and Node.js.",
    icon: <FaCode />,
    duration: "5–6 Months",
  },
  {
    id: 3,
    title: "Backend Development",
    description:
      "Master server-side development, APIs, authentication, and databases.",
    icon: <FaDatabase />,
    duration: "3–4 Months",
  },
  {
    id: 4,
    title: "Programming Foundations",
    description:
      "Build strong programming fundamentals with problem-solving and logic.",
    icon: <FaRoad />,
    duration: "2–3 Months",
  },
];

const LearningPaths = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="false"
      className="bg-base-100 py-16"
    >
      <MyContainer className="">
        <div className="text-center mb-12">
          <h2 className="sm:text-4xl text-2xl font-bold text-primary mb-3">
            Learning Paths
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Follow structured learning paths designed to help you grow from
            beginner to job-ready professional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningPaths.map((path, index) => (
            <div
              key={path.id}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              data-aos-duration="800"
              data-aos-once="false"
              className="bg-base-200 border border-base-300 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary text-2xl mb-4">
                {path.icon}
              </div>

              <h3 className="text-lg font-semibold text-accent mb-2">
                {path.title}
              </h3>

              <p className="text-sm text-accent-content flex-1">
                {path.description}
              </p>

              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-accent-content">⏱ {path.duration}</span>
                <Link to={`/courses`} className="btn btn-primary btn-sm">
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </MyContainer>
    </section>
  );
};

export default LearningPaths;
