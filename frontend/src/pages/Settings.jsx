import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoSettingsSharp } from "react-icons/io5";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_BACKEND_URL; // ✅ Fetch Vite env variable

const Settings = () => {
  const email = localStorage.getItem("email");
  const [settings, setSettings] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ name: "", age: "", address: "" });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/profile/${email}`);
        setSettings(res.data);
      } catch (error) {
        setEditMode(true);
        console.log(error);
      }
    };
    fetchSettings();
  }, [email]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/api/profile/update`, { email, ...formData });
      setSettings(res.data.profile);
      setEditMode(false);
    } catch (error) {
      toast.error("Error updating settings", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  p-6 bg-gradient-to-r from-gray-00 to-gray-700 text-white">
      <div className="bg-gray-800 p-3 rounded-2xl shadow-2xl w-full max-w-lg text-white">
        <div className="flex items-center gap-3 mb-6 border-b border-gray-600 pb-4">
          <IoSettingsSharp className="text-4xl text-yellow-400" />
          <h2 className="text-3xl font-bold">Settings</h2>
        </div>

        {editMode ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button type="submit" className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-bold hover:bg-yellow-500">
              Save Settings
            </button>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="p-4 border border-gray-600 rounded-lg bg-gray-700 shadow-md">
              <p className="text-gray-400 text-sm">Name:</p>
              <p className="text-lg font-semibold">{settings?.name || "Not Set"}</p>
            </div>
            <div className="p-4 border border-gray-600 rounded-lg bg-gray-700 shadow-md">
              <p className="text-gray-400 text-sm">Age:</p>
              <p className="text-lg font-semibold">{settings?.age || "Not Set"}</p>
            </div>
            <div className="p-4 border border-gray-600 rounded-lg bg-gray-700 shadow-md">
              <p className="text-gray-400 text-sm">Address:</p>
              <p className="text-lg font-semibold">{settings?.address || "Not Set"}</p>
            </div>
            <button
              onClick={() => setEditMode(true)}
              className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-bold hover:bg-yellow-500 flex items-center justify-center gap-2"
            >
              <IoSettingsSharp /> Edit Settings
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
