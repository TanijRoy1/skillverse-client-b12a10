import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import MyContainer from "./MyContainer";

const faqs = [
  {
    id: 1,
    question: "What is SkillVerse?",
    answer:
      "SkillVerse is a platform where you can explore, learn, and enroll in online courses across multiple categories, from programming to design.",
  },
  {
    id: 2,
    question: "How do I enroll in a course?",
    answer:
      "Simply create an account, browse the course you like, and click the 'Enroll' button. You can pay online or access free courses directly.",
  },
  {
    id: 3,
    question: "Can I get a certificate?",
    answer:
      "Yes! After completing a course, you will receive a digital certificate that can be shared on LinkedIn or added to your resume.",
  },
  {
    id: 4,
    question: "Are the courses self-paced?",
    answer:
      "Absolutely. You can learn at your own pace and revisit lessons anytime, anywhere.",
  },
  {
    id: 5,
    question: "What payment methods are accepted?",
    answer:
      "We accept major payment methods including credit/debit cards, mobile banking, and online wallets.",
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

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
            Frequently Asked Questions
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Answers to the most common questions about SkillVerse and our
            courses.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="800"
                data-aos-once="false"
                className="bg-base-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 cursor-pointer"
                onClick={() => toggleFAQ(faq.id)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-accent">
                    {faq.question}
                  </h3>
                  {isOpen ? (
                    <FaChevronUp className="text-primary text-lg" />
                  ) : (
                    <FaChevronDown className="text-primary text-lg" />
                  )}
                </div>
                {isOpen && (
                  <p className="text-sm text-accent-content mt-3">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </MyContainer>
    </section>
  );
};

export default FAQSection;
