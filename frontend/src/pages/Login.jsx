import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // ✅ Use environment variable for backend URL
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, user);
      toast.success("Login Successful");

      // ✅ Store email & token in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("email", user.email);
      navigate("/"); // ✅ Navigate to Home/Profile page
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-700 p-4">
      {/* Image Section */}
      <div className="hidden md:block w-1/2 justify-center">
        <img 
          src="https://images.unsplash.com/photo-1675937695032-e0ef7f5c1644?w=500&auto=format&fit=crop&q=60"
          alt="Login" 
          className="w-3/4 h-auto rounded-lg shadow-lg grayscale" 
        />
      </div>

      {/* Login Form */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2 max-w-md">
        <h2 className="text-2xl font-bold text-center text-white mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-gray-300 font-medium">Email</label>
            <input 
              type="email" 
              name="email" 
              value={user.email} 
              onChange={handleChange}
              required 
              autoComplete="email" 
              className="w-full px-3 py-2 bg-gray-700 text-white border rounded-md focus:ring-gray-500" 
            />
          </div>

          {/* Password Field with Toggle */}
          <div>
            <label className="block text-gray-300 font-medium">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                name="password" 
                value={user.password} 
                onChange={handleChange} 
                required 
                autoComplete="current-password"
                className="w-full px-3 py-2 bg-gray-700 text-white border rounded-md focus:ring-gray-500" 
              />
              <button 
                type="button" 
                className="absolute inset-y-0 right-3 flex items-center text-gray-400" 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-600"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Register Link */}
          <p className="text-gray-300 text-center mt-4">
            Register Yourself here?{" "}
            <Link to="/register" className="text-blue-400 hover:underline">Sign Up !!</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
