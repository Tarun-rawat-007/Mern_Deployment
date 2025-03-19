import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import axios from "axios";

const COLORS = ["#0088FE", "#FF6384", "#FFCE56"];
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Users = () => {
  const [userData, setUserData] = useState([]);
  const [formData, setFormData] = useState({ males: "", females: "", children: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/demographics/getdata`);
        const { males, females, children } = response.data;

        setUserData([
          { name: "Males", value: males },
          { name: "Females", value: females },
          { name: "Children", value: children }
        ]);

        setFormData({ males, females, children });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${BACKEND_URL}/api/demographics`, formData);

      setUserData([
        { name: "Males", value: formData.males },
        { name: "Females", value: formData.females },
        { name: "Children", value: formData.children }
      ]);
      
      alert("User demographics updated successfully!");
    } catch (error) {
      console.error("Error updating user data:", error);
      alert("Failed to update demographics.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">User Demographics</h2>
      <div className="flex flex-col md:flex-row gap-6 bg-white p-6 shadow-lg rounded-lg">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold text-center mb-4">User Age Distribution</h3>
          {loading ? (
            <p className="text-center text-gray-500">Loading data...</p>
          ) : (
            <PieChart width={300} height={300}>
              <Pie data={userData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
                {userData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          )}
        </div>

        <div className="w-96">
          <h3 className="text-xl font-semibold text-center mb-4">Edit User Data</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Males:</label>
              <input type="number" name="males" value={formData.males} onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg" required />
            </div>

            <div>
              <label className="block text-gray-700">Females:</label>
              <input type="number" name="females" value={formData.females} onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg" required />
            </div>

            <div>
              <label className="block text-gray-700">Children:</label>
              <input type="number" name="children" value={formData.children} onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg" required />
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Update Data
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Users;