import {
  FaGraduationCap,
  FaLaptopCode,
  FaBriefcase,
  FaRocket,
} from "react-icons/fa";
import MyContainer from "./MyContainer";

const outcomes = [
  {
    id: 1,
    title: "Graduated Students",
    value: "1,200+",
    icon: <FaGraduationCap />,
    color: "bg-primary/10 text-primary",
  },
  {
    id: 2,
    title: "Jobs Secured",
    value: "850+",
    icon: <FaBriefcase />,
    color: "bg-secondary/10 text-secondary",
  },
  {
    id: 3,
    title: "Projects Completed",
    value: "2,300+",
    icon: <FaLaptopCode />,
    color: "bg-accent/10 text-accent",
  },
  {
    id: 4,
    title: "Startups Launched",
    value: "45+",
    icon: <FaRocket />,
    color: "bg-success/10 text-success",
  },
];

const CareerOutcomes = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="false"
      className="bg-base-100 py-20"
    >
      <MyContainer>
        <div className="text-center mb-12">
          <h2 className="sm:text-4xl text-2xl font-bold text-primary mb-3">
            Career Outcomes
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            See how SkillVerse learners achieve their career goals and succeed
            in the tech industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              data-aos-duration="800"
              data-aos-once="false"
              className="bg-base-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center justify-center p-6 text-center"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 ${item.color} text-2xl`}
              >
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-accent mb-1">
                {item.value}
              </h3>
              <p className="text-sm text-accent-content">{item.title}</p>
            </div>
          ))}
        </div>
      </MyContainer>
    </section>
  );
};

export default CareerOutcomes;
