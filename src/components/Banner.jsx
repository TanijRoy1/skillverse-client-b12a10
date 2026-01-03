import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ThemeToggle from "./ThemeToggle";
import bannerImg1 from "../assets/skillVerseBanner1.jpg";
import bannerImg2 from "../assets/skillVerseBanner2.jpg";
import bannerImg3 from "../assets/skillVerseBanner3.jpg";
import bannerImg4 from "../assets/skillVerseBanner4.jpg";
import bannerImg5 from "../assets/skillVerseBanner5.jpg";

const Banner = () => {
  return (
    <>
      <div className="relative lg:max-h-[70vh] lg:h-[70vh] overflow-hidden">
        <ThemeToggle></ThemeToggle>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper lg:h-full"
        >
          <SwiperSlide>
            <div className="relative">
              <img
                src={bannerImg1}
                className="w-full sm:h-screen object-cover"
                alt="Online learning"
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute top-1/2 sm:left-16 left-4 transform -translate-y-1/2 text-white max-w-lg">
                <h1 className="animate__animated animate__rollIn sm:text-4xl text-xl font-bold mb-3 text-yellow-400">
                  Learn From Anywhere, Anytime
                </h1>
                <p className="animate__animated animate__lightSpeedInRight sm:text-lg text-xs leading-relaxed">
                  Access world-class courses and grow your skills with
                  SkillVerse — your gateway to modern learning.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img
                src={bannerImg2}
                className="w-full sm:h-screen h-[50vh] object-cover"
                alt="Collaborative learning"
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute top-1/2 sm:left-16 left-4 transform -translate-y-1/2 text-white max-w-lg">
                <h1 className="sm:text-4xl text-xl font-bold mb-3 text-yellow-400">
                  Collaborate & Grow Together
                </h1>
                <p className="sm:text-lg text-xs leading-relaxed">
                  Join learners and instructors from around the world to share
                  knowledge and insights in every field.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img
                src={bannerImg3}
                className="w-full sm:h-screen h-[50vh] object-cover"
                alt="Online courses"
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute top-1/2 sm:left-16 left-4 transform -translate-y-1/2 text-white max-w-lg">
                <h1 className="sm:text-4xl text-xl font-bold mb-3 text-yellow-400">
                  Master New Skills
                </h1>
                <p className="sm:text-lg text-xs leading-relaxed">
                  From web development to design — learn the skills that shape
                  the future with practical, hands-on courses.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img
                src={bannerImg4}
                className="w-full sm:h-screen h-[50vh] object-cover"
                alt="Teacher explaining concept"
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute top-1/2 sm:left-16 left-4 transform -translate-y-1/2 text-white max-w-lg">
                <h1 className="sm:text-4xl text-xl font-bold mb-3 text-yellow-400">
                  Learn From Industry Experts
                </h1>
                <p className="sm:text-lg text-xs leading-relaxed">
                  Courses designed and delivered by professionals who know what
                  it takes to succeed in real-world careers.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img
                src={bannerImg5}
                className="w-full sm:h-screen h-[50vh] object-cover"
                alt="Student studying online"
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute top-1/2 sm:left-16 left-4 transform -translate-y-1/2 text-white max-w-lg">
                <h1 className="sm:text-4xl text-xl font-bold mb-3 text-yellow-400">
                  Your Personalized Learning Journey
                </h1>
                <p className="sm:text-lg text-xs leading-relaxed">
                  Track your progress, earn certificates, and take control of
                  your education with SkillVerse’s smart dashboard.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
