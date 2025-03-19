import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // ✅ Import Link for Login
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_BACKEND_URL; // ✅ Fetch Vite env variable

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("User Data:", user); // Debugging: Check what data is being sent
    try {
      const res = await axios.post(`${API_URL}/api/auth/register`, user);
      toast.success("Registered Successfully !!", res.data.name);
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-700 p-4">
      <div className="hidden md:block w-1/2 justify-center">
        <img src="https://images.unsplash.com/photo-1706879349461-1fdfb4f7d519?w=500&auto=format&fit=crop&q=60"
          alt="Register" className="w-3/4 h-auto rounded-lg shadow-lg grayscale" />
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2 max-w-md">
        <h2 className="text-2xl font-bold text-center text-white mb-4">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 font-medium">Username</label>
            <input type="text" name="name" value={user.name} onChange={handleChange}
              required autoComplete="username"
              className="w-full px-3 py-2 bg-gray-700 text-white border rounded-md focus:ring-gray-500" />
          </div>
          <div>
            <label className="block text-gray-300 font-medium">Email</label>
            <input type="email" name="email" value={user.email} onChange={handleChange}
              required autoComplete="email"
              className="w-full px-3 py-2 bg-gray-700 text-white border rounded-md focus:ring-gray-500" />
          </div>
          <div>
            <label className="block text-gray-300 font-medium">Password</label>
            <input type="password" name="password" value={user.password} onChange={handleChange}
              required autoComplete="new-password"
              className="w-full px-3 py-2 bg-gray-700 text-white border rounded-md focus:ring-gray-500" />
          </div>
          <button type="submit" className="w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-600">
            Register
          </button>
        </form>

        {/* ✅ Login Link */}
        <p className="text-gray-300 text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
