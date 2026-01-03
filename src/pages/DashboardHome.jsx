import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaUserEdit } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Spinner from "../components/Spinner";

const DashboardHome = () => {
  const { user, loading, setUser, updateUser } = useAuth();
  const [editing, setEditing] = useState(false);
  const axiosSecure = useAxiosSecure();
  const [DBUser, setDBUser] = useState(null);

  useEffect(() => {
    axiosSecure.get(`/users/${user?.email}`).then((res) => {
      console.log(res.data);
      setDBUser(res.data);
    });
  }, [user, axiosSecure, setUser, loading]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoUrl.value;

    updateUser({ displayName: name, photoURL })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL });
        axiosSecure
          .patch(`/users/${DBUser._id}`, { displayName: name, photoURL })
          .then((res) => {
            if (res.data.modifiedCount) {
              toast.success("Profile updated");
            }
          });
        setEditing(false);
      })
      .catch(() => toast.error("Update failed"));
  };

  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      <div className="bg-base-200 rounded p-6 shadow-md text-center">
        <div className="avatar mb-4">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
            <img src={user?.photoURL} alt={user?.displayName} />
          </div>
        </div>

        <h2 className="text-xl font-bold text-primary">{user?.displayName}</h2>
        <p className="text-sm text-base-content/70 mb-4">{user?.email}</p>

        <button
          onClick={() => setEditing(!editing)}
          className="btn btn-outline btn-primary btn-sm"
        >
          <FaUserEdit className="mr-2" />
          Edit Profile
        </button>
      </div>

      <div className="lg:col-span-2 bg-base-100 rounded p-6 shadow-md">
        <h3 className="text-lg font-semibold text-primary mb-4">
          Account Information
        </h3>

        {!editing ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-base-content/60">Full Name</p>
              <p className="font-medium">{user?.displayName}</p>
            </div>
            <div>
              <p className="text-base-content/60">Email Address</p>
              <p className="font-medium">{user?.email}</p>
            </div>
            <div>
              <p className="text-base-content/60">Account Type</p>
              <p className="font-medium capitalize">
                {DBUser?.role || "Student"}
              </p>
            </div>
            <div>
              <p className="text-base-content/60">Member Since</p>
              <p className="font-medium">
                {" "}
                {DBUser?.createdAt
                  ? new Date(DBUser.createdAt).toLocaleDateString()
                  : "—"}
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleUpdate} className="space-y-4 max-w-md">
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="photoUrl"
              defaultValue={user?.photoURL}
              className="input input-bordered w-full"
              required
            />
            <div className="flex gap-3">
              <button className="btn btn-primary text-white">Save</button>
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="btn btn-ghost"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default DashboardHome;
