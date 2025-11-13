import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Link } from "react-router";

const ProgressPage = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "dark");
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const progressData = [
    { task: "Lessons Completed", completed: 8, total: 10 },
    { task: "Quizzes Completed", completed: 4, total: 5 },
    { task: "Assignments Submitted", completed: 3, total: 3 },
    { task: "Projects Done", completed: 1, total: 2 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-600 to-blue-500 text-white p-6">
      <div className="max-w-4xl mx-auto  rounded-2xl shadow-md p-6 bg-white/10 border border-white/20">
        <h1 className="text-2xl font-bold mb-6 text-white">
          Student Progress Overview
        </h1>

        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={progressData}
              layout="horizontal"
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <XAxis
                type="number"
                domain={[0, (dataMax) => dataMax]}
                stroke="#FFFFFF"
              />
              <YAxis type="category" dataKey="task" stroke="#FFFFFF" />
              <Tooltip
                formatter={(value, name, props) =>
                  `${value} / ${props.payload.total}`
                }
              />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Bar
                dataKey="completed"
                fill="#06D6A0"
                barSize={25}
                radius={[5, 5, 5, 5]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6">
          <Link
            to="/dashboard/myEnrolledCourses"
            className="btn bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
