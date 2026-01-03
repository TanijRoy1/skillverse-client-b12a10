import { FaStar } from "react-icons/fa";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MyContainer from "./MyContainer";

const testimonials = [
  {
    id: 1,
    name: "Tanvir Ahmed",
    role: "Computer Science Student",
    course: "MERN Stack Development",
    review:
      "SkillVerse helped me understand full-stack development step by step. The structured courses and real projects made learning effective.",
    rating: 5,
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Frontend Developer",
    course: "React Fundamentals",
    review:
      "The React course focused on practical implementation. Building components and layouts improved my confidence.",
    rating: 4,
  },
  {
    id: 3,
    name: "Rakib Hasan",
    role: "EEE Undergraduate",
    course: "Programming Foundations",
    review:
      "The learning path was well structured. It helped me build strong programming basics without feeling overwhelmed.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sabbir Hossain",
    role: "Junior Web Developer",
    course: "Frontend Development",
    review:
      "SkillVerse courses are easy to follow and well organized. I was able to apply what I learned in real projects.",
    rating: 4,
  },
  {
    id: 5,
    name: "Farzana Akter",
    role: "Software Engineering Student",
    course: "JavaScript Essentials",
    review:
      "JavaScript concepts were explained clearly with real examples. This course helped me understand core fundamentals.",
    rating: 5,
  },
  {
    id: 6,
    name: "Mahmudul Islam",
    role: "Self-Taught Developer",
    course: "Backend Development",
    review:
      "The backend course gave me a clear understanding of APIs, authentication, and database integration.",
    rating: 4,
  },
  {
    id: 7,
    name: "Ayesha Rahman",
    role: "UI Designer",
    course: "Frontend Development",
    review:
      "Learning frontend development helped me collaborate better with developers and improve my design workflow.",
    rating: 4,
  },
  {
    id: 8,
    name: "Imran Hossain",
    role: "Computer Engineering Student",
    course: "Data Structures Basics",
    review:
      "This course helped me improve problem-solving skills and understand core data structures clearly.",
    rating: 5,
  },
  {
    id: 9,
    name: "Sharmin Sultana",
    role: "Career Switcher",
    course: "Learning Path: MERN Stack",
    review:
      "The structured learning path helped me switch careers into web development with confidence.",
    rating: 5,
  },
  {
    id: 10,
    name: "Arif Mahmud",
    role: "Intern Web Developer",
    course: "React & Tailwind CSS",
    review:
      "The combination of React and Tailwind made UI development faster and more efficient.",
    rating: 4,
  },
  {
    id: 11,
    name: "Jannatul Ferdous",
    role: "Information Technology Student",
    course: "Web Development Basics",
    review:
      "SkillVerse made learning web development simple and organized. The lessons were easy to understand.",
    rating: 5,
  },
  {
    id: 12,
    name: "Shakil Ahmed",
    role: "Freelance Developer",
    course: "Full-Stack Development",
    review:
      "The full-stack content helped me build complete applications and improve my freelancing skills.",
    rating: 5,
  },
];

const StudentTestimonials = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="false"
      className="py-16 bg-base-100"
    >
      <MyContainer>
        <div className="text-center mb-12">
          <h2 className="sm:text-4xl text-2xl font-bold text-primary mb-3">
            What Our Students Say
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Real feedback from learners who improved their skills with
            SkillVerse.
          </p>
        </div>

        <div className="md:block hidden">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 30,
              stretch: "50%",
              depth: 200,
              modifier: 1,
              scale: 0.75,
              slideShadows: true,
            }}
            autoplay={{
              delay: 1100,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  key={item.id}
                  className="bg-base-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col"
                >
                  <div className="flex gap-1 mb-3 text-warning">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-sm text-accent-content flex-1">
                    “{item.review}”
                  </p>

                  <div className="mt-5 border-t border-base-300 pt-4">
                    <h4 className="font-semibold text-accent">{item.name}</h4>
                    <p className="text-xs text-accent-content">
                      {item.role} · {item.course}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="md:hidden">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            coverflowEffect={{
              rotate: 30,
              stretch: "50%",
              depth: 200,
              modifier: 1,
              scale: 0.75,
              slideShadows: true,
            }}
            autoplay={{
              delay: 1100,
              disableOnInteraction: false,
            }}
            // pagination={true}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  key={item.id}
                  className="bg-base-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col"
                >
                  <div className="flex gap-1 mb-3 text-warning">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <p className="text-sm text-accent-content flex-1">
                    “{item.review}”
                  </p>

                  <div className="mt-5 border-t border-base-300 pt-4">
                    <h4 className="font-semibold text-accent">{item.name}</h4>
                    <p className="text-xs text-accent-content">
                      {item.role} · {item.course}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </MyContainer>
    </section>
  );
};

export default StudentTestimonials;
