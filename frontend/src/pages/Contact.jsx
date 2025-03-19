import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    toast.success("Message Sent Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-700 text-white flex flex-col justify-center items-center p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <div className="bg-[#222] p-6 rounded-lg shadow-lg w-full max-w-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-400 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-white  border border-gray-700 rounded-md text-black focus:outline-none focus:ring-2 "
            />
          </div>
          
          <div>
            <label className="block  font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-white border border-gray-700 rounded-md text-black focus:outline-none focus:ring-2 "
            />
          </div>
          <div>
            <label className="block text-gray-400 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-3 py-2  bg-white border border-gray-700 rounded-md text-black focus:outline-none focus:ring-2 "
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-green-900 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="w-full flex justify-center items-center pt-8 m-0">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.8110149900444!2d78.08943897685342!3d30.384723879588147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d7977871be95%3A0x61fb194fac36a435!2sIAS%20Officers%20Colony%2C%20Rajpur%2C%20Dehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1742028891262!5m2!1sen!2sin"
    className="w-full h-[300px] rounded-lg shadow-lg border-0"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

    </div>
  );
};

export default Contact;
