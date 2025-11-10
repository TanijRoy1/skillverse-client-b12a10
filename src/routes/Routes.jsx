import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Dashboard from "../layouts/Dashboard";
import MyEnrolledCourses from "../pages/MyEnrolledCourses";
import AddCourse from "../pages/AddCourse";
import MyAddedCourses from "../pages/MyAddedCourses";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "courses",
                Component: Courses
            },
            
        ]
    },
    {
        path: "/dashboard",
        Component: Dashboard,
        children: [
            {
                path: "myEnrolledCourses",
                Component: MyEnrolledCourses
            },
            {
                path: "addCourse",
                Component: AddCourse
            },
            {
                path: "myAddedCourses",
                Component: MyAddedCourses
            }
        ]
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                path: "login",
                Component: Login
            },
            {
                path: "register",
                Component: Register
            },
        ]
    },
])

export default router;