import React from "react";
import { Link, useNavigate,Outlet } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token
    localStorage.removeItem("email"); // Clear email
    navigate("/login"); // Redirect to login
  };
 

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-5 space-y-4">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <nav>
  <ul className="space-y-2">
    <li><Link to="/dashboard/dhome" className="block py-2 px-4 hover:bg-gray-700 rounded">Home</Link></li>
    <li><Link to="/dashboard/profile" className="block py-2 px-4 hover:bg-gray-700 rounded">Profile</Link></li>
    <li><Link to="/dashboard/settings" className="block py-2 px-4 hover:bg-gray-700 rounded">Settings</Link></li>
    <li><Link to="/dashboard/users" className="block py-2 px-4 hover:bg-gray-700 rounded">Users</Link></li>
  </ul>
</nav>
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 hover:bg-red-500 py-2 rounded mt-4"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Navbar */}
        <header className="bg-white p-4 shadow flex justify-between items-center">
          <h2 className="text-xl font-bold">Welcome, {localStorage.getItem("email")}</h2>
        </header>

        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
