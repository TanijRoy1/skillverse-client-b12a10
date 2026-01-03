import { Link } from "react-router";

const CTASection = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="false"
      className="bg-blue-800 text-white py-20"
    >
      <div className="max-w-6xl mx-auto px-4 text-center flex flex-col items-center justify-center">
        <h2 className="sm:text-4xl text-2xl font-bold mb-4">
          Start Your Learning Journey Today
        </h2>

        <p className="text-base sm:text-lg mb-8 max-w-2xl">
          Join thousands of learners who are advancing their skills and building
          their careers with SkillVerse. Explore courses, follow learning paths,
          and achieve your goals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/auth/login"
            className="btn btn-lg btn-base-100 text-accent px-6 py-3 rounded-full hover:scale-105 transition transform"
          >
            Get Started
          </Link>

          <Link
            to="/courses"
            className="btn btn-lg btn-outline px-6 py-3 rounded-full hover:scale-105 transition transform"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
