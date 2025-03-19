import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [services, setServices] = useState([]);
  const [activeSection, setActiveSection] = useState("users");
  const [newService, setNewService] = useState({ title: "", description: "", icon: "" });

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;

    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/admin/users`, {
          headers: { Authorization: token },
        });
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error.message);
      }
    };

    const fetchServices = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/admin/services`, {
          headers: { Authorization: token },
        });
        setServices(res.data);
      } catch (error) {
        console.error("Error fetching services:", error.message);
      }
    };

    fetchUsers();
    fetchServices();
  }, [token]);

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/admin/users/${id}`, {
        headers: { Authorization: token },
      });
      setUsers(users.filter((user) => user._id !== id));
      toast.info("User deleted Successfully 🎯");
    } catch (error) {
      console.error("Error deleting user:", error.response?.data?.message || error.message);
      toast.error("User Cannot be deleted 🚫 ");
    }
  };

  const handleDeleteService = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/admin/services/${id}`, {
        headers: { Authorization: token },
      });
      setServices(services.filter((service) => service._id !== id));
      toast.info("Service deleted Successfully 🎯");
    } catch (error) {
      console.error("Error deleting service:", error.message);
      toast.error("You are Not an Admin 🚫 ");
    }
  };

  const handleAddService = async () => {
    try {
      const res = await axios.post(
        `${API_URL}/api/admin/services`,
        newService,
        { headers: { Authorization: token } }
      );
      setServices([...services, res.data]);
      setNewService({ title: "", description: "", icon: "" });
      toast.success("Service added Successfully ✅");
    } catch (error) {
      console.error("Error adding service:", error.message);
    }
  };

  return (
    <div className="flex min-h-screen">
      <nav className="w-64 bg-gray-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <ul>
          <li className={`p-3 cursor-pointer ${activeSection === "users" && "bg-gray-700"}`}
              onClick={() => setActiveSection("users")}>
            Manage Users
          </li>
          <li className={`p-3 cursor-pointer ${activeSection === "services" && "bg-gray-700"}`}
              onClick={() => setActiveSection("services")}>
            Manage Services
          </li>
        </ul>
      </nav>

      <div className="flex-1 p-6 bg-gray-100">
        {activeSection === "users" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Users</h2>
            <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-3 px-5 text-left">Name</th>
                  <th className="py-3 px-5 text-left">Email</th>
                  <th className="py-3 px-5 text-left">Admin</th>
                  <th className="py-3 px-5 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id} className="border-b">
                    <td className="py-3 px-5">{user.name}</td>
                    <td className="py-3 px-5">{user.email}</td>
                    <td className="py-3 px-5">{user.isAdmin ? "Yes" : "No"}</td>
                    <td className="py-3 px-5">
                      <button 
                        onClick={() => handleDeleteUser(user._id)} 
                        className="bg-red-500 text-white px-4 py-2 rounded">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeSection === "services" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Services</h2>
            <input
              type="text"
              placeholder="Title"
              value={newService.title}
              onChange={(e) => setNewService({ ...newService, title: e.target.value })}
              className="border p-2 mr-2"
            />
            <input
              type="text"
              placeholder="Description"
              value={newService.description}
              onChange={(e) => setNewService({ ...newService, description: e.target.value })}
              className="border p-2 mr-2"
            />
            <input
              type="text"
              placeholder="Icon URL"
              value={newService.icon}
              onChange={(e) => setNewService({ ...newService, icon: e.target.value })}
              className="border p-2 mr-2"
            />
            <button onClick={handleAddService} className="bg-green-500 text-white px-4 py-2 rounded">
              Add Service
            </button>

            <ul>
              {services.map((service) => (
                <li key={service._id}>
                  {service.title} - {service.description}
                  <button onClick={() => handleDeleteService(service._id)} className="text-red-500 ml-4">Delete</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
