import React from "react";
import { FaChalkboardTeacher, FaClock, FaUsers, FaCertificate } from "react-icons/fa";
import MyContainer from "./MyContainer";

const WhyChooseUs = () => {
  return (
    <section className="bg-base-100 py-16">
      <MyContainer>
        <div className="text-center mb-12">
          <h2 className="sm:text-4xl text-3xl font-bold text-primary mb-3">
            Why Choose <span className=" text-blue-800"><span className="text-cyan-500">Skill</span>Verse</span>?
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            At SkillVerse, we make learning easy, engaging, and accessible for everyone.
            Whether you're upskilling, reskilling, or just exploring — we’ve got your back
            with world-class instructors and flexible learning paths.
          </p>
        </div>

       
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
         
          <div className="bg-base-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center">
            <div className="text-primary text-4xl mb-4 flex justify-center">
              <FaChalkboardTeacher />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p className="text-base-content/70">
              Learn directly from professionals and industry experts who bring real-world experience to your lessons.
            </p>
          </div>

          
          <div className="bg-base-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center">
            <div className="text-primary text-4xl mb-4 flex justify-center">
              <FaClock />
            </div>
            <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
            <p className="text-base-content/70">
              Study anytime, anywhere. Take control of your pace with bite-sized lessons and lifetime access.
            </p>
          </div>

          
          <div className="bg-base-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center">
            <div className="text-primary text-4xl mb-4 flex justify-center">
              <FaUsers />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p className="text-base-content/70">
              Join a vibrant learner community — connect, collaborate, and grow together with peers worldwide.
            </p>
          </div>

        
          <div className="bg-base-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center">
            <div className="text-primary text-4xl mb-4 flex justify-center">
              <FaCertificate />
            </div>
            <h3 className="text-xl font-semibold mb-2">Recognized Certificates</h3>
            <p className="text-base-content/70">
              Earn shareable certificates that validate your skills and help you stand out in your professional journey.
            </p>
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default WhyChooseUs;
