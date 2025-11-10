import React from "react";
import Header from "../components/Header";
import { NavLink, Outlet } from "react-router";
import Footer from "../components/Footer";
import MyContainer from "../components/MyContainer";
import { FaBookOpen, FaPlusCircle, FaUserGraduate } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Header></Header>
      <MyContainer className="flex gap-2 border min-h-[80vh]">
        <div className="border min-h-[80vh] w-[23%] h-full flex flex-col p-3">
          <NavLink
            to={`/dashboard/myEnrolledCourses`}
            className={`flex items-center gap-1`}
          >
            <FaUserGraduate />
            My Enrolled Courses
          </NavLink>
          <NavLink
            to={`/dashboard/addCourse`}
            className={`flex items-center gap-1`}
          >
            <FaPlusCircle />
            Add Course
          </NavLink>
          <NavLink
            to={`/dashboard/myAddedCourses`}
            className={`flex items-center gap-1`}
          >
            <FaBookOpen />
            My Added Courses
          </NavLink>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </MyContainer>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
