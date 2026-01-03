import { Link } from "react-router";
import MyContainer from "./MyContainer";

const blogs = [
  {
    id: 5,
    title: "Why Learning React Is Still Worth It in 2026",
    excerpt:
      "React continues to dominate the frontend ecosystem. Learn why it remains a valuable skill for modern developers.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    date: "Jan 03, 2026",
  },
  {
    id: 6,
    title: "Top Skills Every Developer Should Learn in 2026",
    excerpt:
      "Discover the most in-demand technical and soft skills that will shape developer careers this year.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    date: "Jan 02, 2026",
  },
  {
    id: 7,
    title: "How Online Learning Is Changing Tech Education",
    excerpt:
      "Online platforms are reshaping how developers learn, grow, and build careers worldwide.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    date: "Dec 29, 2025",
  },
  {
    id: 8,
    title: "Tips for Building Projects That Impress Employers",
    excerpt:
      "Learn how to structure projects and showcase your skills to stand out in interviews and portfolios.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    date: "Dec 27, 2025",
  },
];

const LatestBlogs = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="false"
      className="bg-base-100 py-16"
    >
      <MyContainer>
        <div className="text-center mb-12">
          <h2 className="sm:text-4xl text-2xl font-bold text-primary mb-3">
            Latest Blog Posts
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Read expert insights, learning tips, and industry trends from the
            SkillVerse blog.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              data-aos-duration="800"
              data-aos-once="false"
              className="bg-base-200 rounded shadow hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6 flex-1 flex flex-col">
                <span className="text-sm text-accent-content mb-2">
                  {blog.date}
                </span>

                <h3 className="text-lg font-semibold text-accent mb-3">
                  {blog.title}
                </h3>

                <p className="text-sm text-accent-content flex-1">
                  {blog.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/blogs" className="btn btn-outline btn-primary">
            View All Blogs
          </Link>
        </div>
      </MyContainer>
    </section>
  );
};

export default LatestBlogs;
