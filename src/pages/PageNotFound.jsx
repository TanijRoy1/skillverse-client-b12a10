import { Link } from "react-router";
import { FaHome } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500 text-white px-6 text-center">
      <h1 className="text-8xl font-extrabold mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-2">Page Not Found 🚧</h2>
      <p className="text-white/80 max-w-md mb-8">
        Oops! The page you’re looking for doesn’t exist or has been moved.  
        Let’s get you back to learning something new!
      </p>

      <Link
        to="/"
        className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-200 shadow-lg"
      >
        <FaHome />
        Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
