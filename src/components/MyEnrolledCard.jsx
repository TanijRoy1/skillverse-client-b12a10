import { FaTrashAlt, FaClock, FaBookOpen, FaTrash } from "react-icons/fa";

const MyEnrolledCard = ({ course }) => {
  const { title, image, category, duration, price, _id, description, enrolled_by } = course;

  return (
    <div className=" bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100">
          <div className="">
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
    
          <div className="p-5 space-y-2">
            <h3 className="text-xl font-semibold text-gray-800 line-clamp-1">
              {title}
            </h3>
            <p className="text-gray-500 text-sm line-clamp-2">{description}</p>
    
            <div className="flex justify-between text-sm text-gray-600">
              <p>
                <span className="font-semibold">Category:</span> {category}
              </p>
              <p>
                <span className="font-semibold">Price:</span> ${price}
              </p>
            </div>
    
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Duration:</span> {duration}
            </p>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Enrolled By:</span> {enrolled_by}
            </p>
    
            <div className="flex items-center justify-between pt-3">
              <button className="btn bg-indigo-600 hover:bg-indigo-700 text-white border-0 w-full">Delete</button>
            </div>
          </div>
        </div>
  );
};

export default MyEnrolledCard;
