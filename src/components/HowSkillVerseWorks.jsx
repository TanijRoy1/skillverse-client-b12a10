import {
  FaUserPlus,
  FaSearch,
  FaBookOpen,
  FaGraduationCap,
} from "react-icons/fa";
import MyContainer from "./MyContainer";

const steps = [
  {
    id: 1,
    title: "Create an Account",
    desc: "Sign up to access SkillVerse and personalize your learning experience.",
    icon: <FaUserPlus />,
  },
  {
    id: 2,
    title: "Explore Courses",
    desc: "Browse courses by category, skill level, and instructor.",
    icon: <FaSearch />,
  },
  {
    id: 3,
    title: "Enroll & Learn",
    desc: "Enroll instantly and learn at your own pace with lifetime access.",
    icon: <FaBookOpen />,
  },
  {
    id: 4,
    title: "Build Skills",
    desc: "Apply what you learn and grow your professional skills.",
    icon: <FaGraduationCap />,
  },
];

const HowSkillVerseWorks = () => {
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
            How SkillVerse Works
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            A simple and effective learning journey designed to help you grow
            your skills with confidence.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              data-aos-duration="800"
              data-aos-once="false"
              className="relative flex-1 bg-base-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary text-white text-2xl">
                {step.icon}
              </div>

              <h3 className="text-lg font-semibold text-accent mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-accent-content">{step.desc}</p>

              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-8 w-8 h-0.5 bg-primary opacity-40" />
              )}
            </div>
          ))}
        </div>
      </MyContainer>
    </section>
  );
};

export default HowSkillVerseWorks;
