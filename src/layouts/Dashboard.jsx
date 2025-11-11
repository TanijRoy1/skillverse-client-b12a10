import { NavLink, Outlet } from "react-router";
import { FaUserGraduate, FaPlusCircle, FaBookOpen } from "react-icons/fa";
import MyContainer from "../components/MyContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DashboardLayout = () => {
  return (
    <div>
      <Header></Header>
      <MyContainer className="grid grid-cols-1 md:grid-cols-9 gap-6 min-h-[80vh] my-10">
        <aside className="bg-gray-50 shadow-md border border-gray-200 rounded-2xl col-span-2 py-6 px-3 flex flex-col gap-3">
          <h2 className="text-xl font-bold text-indigo-600 mb-4 text-center">
            Dashboard
          </h2>

          <NavLink
            to="/dashboard/myEnrolledCourses"
            className={`dashboardLink`}
          >
            <FaUserGraduate />
            My Enrolled Courses
          </NavLink>

          <NavLink to="/dashboard/addCourse" className={`dashboardLink`}>
            <FaPlusCircle />
            Add Course
          </NavLink>

          <NavLink to="/dashboard/myAddedCourses" className={`dashboardLink`}>
            <FaBookOpen />
            My Added Courses
          </NavLink>
        </aside>

        <main className="col-span-7">
          <Outlet />
        </main>
      </MyContainer>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
