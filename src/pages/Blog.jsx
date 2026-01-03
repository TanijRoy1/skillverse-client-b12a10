import BlogCard from "../components/BlogCard";
import MyContainer from "../components/MyContainer";

const blogs = [
  {
    id: 1,
    title: "How to Start Learning MERN Stack in 2025",
    description:
      "A complete roadmap for beginners to become job-ready MERN stack developers.",
    category: "Web Development",
    author: "SkillVerse Team",
    date: "Jan 02, 2026",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: 2,
    title: "Top 10 Programming Skills Employers Want",
    description:
      "Discover the most in-demand programming skills that companies are hiring for.",
    category: "Career",
    author: "Admin",
    date: "Dec 28, 2025",
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
  },
  {
    id: 3,
    title: "Data Science vs Web Development",
    description:
      "Confused between Data Science and Web Development? This guide helps you decide.",
    category: "Tech Comparison",
    author: "Instructor",
    date: "Dec 20, 2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    id: 4,
    title: "React Performance Optimization Tips for Production Apps",
    description:
      "Learn practical techniques like memoization, code splitting, and lazy loading to make your React apps faster and production-ready.",
    category: "React",
    author: "SkillVerse Team",
    date: "Jan 05, 2026",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
  },
  
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <section className="py-16 bg-linear-to-br from-indigo-700 via-purple-600 to-blue-500 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            SkillVerse Blog
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Learn, grow, and stay updated with the latest trends in tech,
            programming, and career development.
          </p>
        </div>
      </section>

      <MyContainer className="py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default Blog;
