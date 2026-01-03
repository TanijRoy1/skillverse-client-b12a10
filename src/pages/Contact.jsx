import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import MyContainer from "../components/MyContainer";

const Contact = () => {
  const handleContact = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-base-200">
      <section className="py-16 bg-linear-to-br from-indigo-700 via-purple-600 to-blue-500 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact SkillVerse
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Have questions, feedback, or partnership ideas?  
            We’d love to hear from you.
          </p>
        </div>
      </section>

      <MyContainer className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-accent">
            Get in Touch
          </h2>
          <p className="text-accent-content">
            Reach out to us anytime. Our team usually responds within 24 hours.
          </p>

          <div className="flex items-center gap-4 bg-base-100 p-5 rounded-2xl border border-base-300 shadow-sm">
            <FaEnvelope className="text-primary text-xl" />
            <span className="text-accent-content">
              skillverse.learning@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-4 bg-base-100 p-5 rounded-2xl border border-base-300 shadow-sm">
            <FaPhoneAlt className="text-primary text-xl" />
            <span className="text-accent-content">
              +880 1521799480
            </span>
          </div>

          <div className="flex items-center gap-4 bg-base-100 p-5 rounded-2xl border border-base-300 shadow-sm">
            <FaMapMarkerAlt className="text-primary text-xl" />
            <span className="text-accent-content">
              Dhaka, Bangladesh
            </span>
          </div>
        </div>

        <div className="bg-base-100 p-8 rounded-2xl shadow-md border border-base-300">
          <h2 className="text-2xl font-bold text-accent mb-6">
            Send a Message
          </h2>

          <form onSubmit={handleContact} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full min-h-[120px]"
                required
              ></textarea>
            </div>

            <button className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </MyContainer>
    </div>
  );
};

export default Contact;
