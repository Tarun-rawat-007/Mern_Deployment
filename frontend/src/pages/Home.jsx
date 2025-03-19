import React, { useEffect, useState } from "react";

const Home = () => {
  
  const [email, setEmail] = useState("");

   useEffect(() => {
    // ✅ Retrieve email from localStorage
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
      
    }
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold">Welcome to Our Company</h1>
        <p className="mt-4 text-lg text-gray-300">
          Delivering excellence through innovation and technology.
        </p>
        <h1>Welcome to Home Page   {email && <p> {email}</p>}</h1>
    
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 px-6 py-2 text-lg rounded-lg">
          Get Started
        </button>
      </section>

      <section className="bg-gray-800 text-white py-16 px-8 text-center relative overflow-hidden">
  <h2 className="text-4xl font-bold">About Our Company</h2>
  <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
    We are a technology-driven company focused on building scalable and innovative solutions for our clients.
  </p>

  {/* Image Slider Section */}
  <div className="relative mt-8 w-full overflow-hidden ">
    <div className="scrolling-wrapper">
      <div className="scrolling-content gap-12">
        <img src="https://images.unsplash.com/photo-1643208589891-ba2ed985fb5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9nJTIwaW4lMjBhbmltYXRpb258ZW58MHx8MHx8fDA%3D" alt="Company 1" className="w-40 h-40 object-cover rounded-lg" />
        <img src="https://images.unsplash.com/photo-1732353216401-fe1d1e6cb826?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9nJTIwaW4lMjBhbmltYXRpb258ZW58MHx8MHx8fDA%3D" alt="Company 2" className="w-40 h-40 object-cover rounded-lg" />
        <img src="https://images.unsplash.com/photo-1543525090-07dc28d19bb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxvZyUyMGluJTIwYW5pbWF0aW9ufGVufDB8fDB8fHww" alt="Company 3" className="w-40 h-40 object-cover rounded-lg" />
        <img src="https://media.istockphoto.com/id/1722480280/photo/concept-of-system-login-to-protect-security-and-collect-user-data.webp?a=1&b=1&s=612x612&w=0&k=20&c=zSY3BJGXxREN60DdKLP5mgz-gagG-kqBXlEsFHFPqX0=" alt="Company 4" className="w-40 h-40 object-cover rounded-lg" />
        <img src="https://images.unsplash.com/photo-1732353216401-fe1d1e6cb826?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9nJTIwaW4lMjBhbmltYXRpb258ZW58MHx8MHx8fDA%3D" alt="Company 5" className="w-40 h-40 object-cover rounded-lg" />
        <img src="https://images.unsplash.com/photo-1694878981856-7fb3b09598a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxvZyUyMGluJTIwYW5pbWF0aW9ufGVufDB8fDB8fHww" alt="Company 6" className="w-40 h-40 object-cover rounded-lg" />
        <img src="https://images.unsplash.com/photo-1643208589891-ba2ed985fb5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9nJTIwaW4lMjBhbmltYXRpb258ZW58MHx8MHx8fDA%3D" alt="Company 1" className="w-40 h-40 object-cover rounded-lg" />
        <img src="https://images.unsplash.com/photo-1732353216401-fe1d1e6cb826?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9nJTIwaW4lMjBhbmltYXRpb258ZW58MHx8MHx8fDA%3D" alt="Company 2" className="w-40 h-40 object-cover rounded-lg" />
        <img src="https://images.unsplash.com/photo-1543525090-07dc28d19bb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxvZyUyMGluJTIwYW5pbWF0aW9ufGVufDB8fDB8fHww" alt="Company 3" className="w-40 h-40 object-cover rounded-lg" />
        <img src="https://media.istockphoto.com/id/1722480280/photo/concept-of-system-login-to-protect-security-and-collect-user-data.webp?a=1&b=1&s=612x612&w=0&k=20&c=zSY3BJGXxREN60DdKLP5mgz-gagG-kqBXlEsFHFPqX0=" alt="Company 4" className="w-40 h-40 object-cover rounded-lg" />
        <img src="https://images.unsplash.com/photo-1732353216401-fe1d1e6cb826?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9nJTIwaW4lMjBhbmltYXRpb258ZW58MHx8MHx8fDA%3D" alt="Company 5" className="w-40 h-40 object-cover rounded-lg" />
        <img src="https://images.unsplash.com/photo-1694878981856-7fb3b09598a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxvZyUyMGluJTIwYW5pbWF0aW9ufGVufDB8fDB8fHww" alt="Company 6" className="w-40 h-40 object-cover rounded-lg" />
       
      </div>
    </div>
  </div>

  {/* Extra Styling for Infinite Slow Scroll */}
  <style>
    {`
      .scrolling-wrapper {
        display: flex;
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
      }

      .scrolling-content {
        display: flex;
        animation: infiniteScroll 20s linear infinite;
      }

      @keyframes infiniteScroll {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
    `}
  </style>
</section>


      {/* Services Section */}
<section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20 px-8 text-center">
  <h2 className="text-5xl font-extrabold text-white">Our Services</h2>
  
  {/* Services Cards */}
  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
    
    <div className="p-8 bg-gray-100 rounded-lg shadow-xl border border-gray-300">
      <h3 className="text-2xl font-bold text-gray-900">Web Development</h3>
      <p className="text-gray-600 mt-2">
        We build dynamic and scalable web applications.
      </p>
    </div>
    
    <div className="p-8 bg-gray-100 rounded-lg shadow-xl border border-gray-300">
      <h3 className="text-2xl font-bold text-gray-900">Mobile Apps</h3>
      <p className="text-gray-600 mt-2">
        Creating seamless experiences across all devices.
      </p>
    </div>
    
    <div className="p-8 bg-gray-100 rounded-lg shadow-xl border border-gray-300">
      <h3 className="text-2xl font-bold text-gray-900">Cloud Solutions</h3>
      <p className="text-gray-600 mt-2">
        Secure and scalable cloud-based solutions.
      </p>
    </div>

  </div>

  {/* Stats Section */}
  <div className="mt-16 flex flex-wrap justify-center gap-52 text-center bg-gray-100 rounded p-2 ">
    
    <div className="flex flex-col ">
      <span className="text-4xl font-extrabold text-blue-600 animate-pulse">500+</span>
      <span className="text-gray-600">Projects Delivered</span>
    </div>

    <div className="flex flex-col">
      <span className="text-4xl font-extrabold text-green-600 animate-pulse">1K+</span>
      <span className="text-gray-600">Happy Clients</span>
    </div>

    <div className="flex flex-col">
      <span className="text-4xl font-extrabold text-purple-600 animate-pulse">9K+</span>
      <span className="text-gray-600">Connections Made</span>
    </div>

  </div>
</section>


<footer className="bg-gradient-to-r from-gray-900 to-gray-900 text-white py-12 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
    
    {/* Company Info */}
    <div>
      <h3 className="text-2xl font-bold">⌨️ Our Company</h3>
      <p className="text-gray-400 mt-2">
        Providing top-notch digital solutions to help businesses grow and innovate.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-2xl font-bold">⌨️ Quick Links</h3>
      <ul className="mt-2 space-y-2">
        <li><a href="/" className="text-gray-400 hover:text-blue-500">Home</a></li>
        <li><a href="/about" className="text-gray-400 hover:text-blue-500">About</a></li>
        <li><a href="/services" className="text-gray-400 hover:text-blue-500">Services</a></li>
        <li><a href="/contact" className="text-gray-400 hover:text-blue-500">Contact</a></li>
      </ul>
    </div>

    {/* Contact Info & Social Media */}
    <div>
      <h3 className="text-2xl font-bold">📞 Contact Us</h3>
      <p className="text-gray-400 mt-2">Email: support@ourcompany.com</p>
      <p className="text-gray-400">Phone: +91-1234567890</p>
      
      {/* Social Icons */}
      <div className="mt-4 flex justify-center md:justify-start gap-4">
        <a href="#" className="text-gray-400 hover:text-blue-500">🌐</a>
        <a href="#" className="text-gray-400 hover:text-blue-500">🐦</a>
        <a href="#" className="text-gray-400 hover:text-pink-500">📷</a>
      </div>
    </div>

  </div>

  {/* Copyright Section */}
  <div className="border-t border-gray-700 mt-4 p-3 text-center text-gray-400">
    <p>&copy; 2024 Our Company. All Rights Reserved.</p>
  </div>
</footer>


    </>
  );
};

export default Home;
