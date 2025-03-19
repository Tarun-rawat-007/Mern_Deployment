import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUserEdit } from "react-icons/fa";

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL; // Get backend URL from environment variable

const Profile = () => {
  const email = localStorage.getItem("email");
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ name: "", age: "", address: "" });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${VITE_BACKEND_URL}/api/profile/${email}`);
        setProfile(res.data);
      } catch (error) {
        setEditMode(true);
        console.log(error);
      }
    };
    fetchProfile();
  }, [email]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${VITE_BACKEND_URL}/api/profile/update`, { email, ...formData });
      setProfile(res.data.profile);
      setEditMode(false);
    } catch (error) {
      alert("Error updating profile", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  p-6 bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg text-black">
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 text-2xl font-bold">
            {profile?.name ? profile.name[0].toUpperCase() : "?"}
          </div>
          <h2 className="text-2xl font-bold mt-2">{profile?.name || "No Name"}</h2>
          <p className="text-gray-600">{profile?.email}</p>
        </div>

        {editMode ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button type="submit" className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">Save</button>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="p-2 border border-gray-200 rounded-lg shadow-sm">
              <p className="text-gray-600 text-sm">Age:</p>
              <p className="text-lg font-medium">{profile?.age || "Not Set"}</p>
            </div>
            <div className="p-2 border border-gray-200 rounded-lg shadow-sm">
              <p className="text-gray-600 text-sm">Address:</p>
              <p className="text-lg font-medium">{profile?.address || "Not Set"}</p>
            </div>
            <button
              onClick={() => setEditMode(true)}
              className="w-full flex items-center justify-center gap-2 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
            >
              <FaUserEdit /> Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
