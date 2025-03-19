import React from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FaUserFriends, FaProjectDiagram, FaNetworkWired } from "react-icons/fa";

const salesData = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 300 },
  { name: "Mar", sales: 500 },
  { name: "Apr", sales: 700 },
  { name: "May", sales: 600 },
  { name: "Jun", sales: 800 },
];

const pieData = [
  { name: "Product A", value: 300 },
  { name: "Product B", value: 500 },
  { name: "Product C", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const Dhome = () => {
  return (
    <div className="p-4  bg-gray-500 text-white">
      <h1 className="text-3xl font-bold text-center mb-4">Dashboard Overview</h1>
      
      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg flex items-center gap-4">
          <FaUserFriends className="text-3xl text-blue-400" />
          <div>
            <p className="text-gray-400 text-sm">Total Users</p>
            <h2 className="text-xl font-semibold">5,230</h2>
          </div>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg flex items-center gap-4">
          <FaProjectDiagram className="text-3xl text-green-400" />
          <div>
            <p className="text-gray-400 text-sm">Total Projects</p>
            <h2 className="text-xl font-semibold">1,280</h2>
          </div>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg flex items-center gap-4">
          <FaNetworkWired className="text-3xl text-yellow-400" />
          <div>
            <p className="text-gray-400 text-sm">Connections</p>
            <h2 className="text-xl font-semibold">3,750</h2>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-3">Sales Overview</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={salesData}>
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip cursor={{ fill: "#333" }} contentStyle={{ background: "#222", color: "#fff" }} />
              <Bar dataKey="sales" fill="#0088FE" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-3">Product Sales Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
                {pieData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: "#222", color: "#fff" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dhome;