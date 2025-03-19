import React from "react";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex items-center justify-center px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 w-full">
        
        {/* Left - Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl font-extrabold mb-6 text-gray-100">
            About Us
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Welcome to our platform! We are dedicated to providing the best
            services and solutions to our users. Our mission is to create
            innovative and user-friendly applications that enhance everyday life.
          </p>
          <p className="mt-4 text-gray-300">
            With a team of passionate developers and designers, we focus on
            quality, efficiency, and seamless user experience.
          </p>
        </div>

        {/* Right - Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://media.istockphoto.com/id/1647931875/photo/into-the-blockchain-businessman-working-and-touching-with-augmented-virtual-reality-at-night.webp?a=1&b=1&s=612x612&w=0&k=20&c=w3qEiH6YVHfrDS59-ZqWSwNHxkoFEmWrmL5fqOboq4A="
            alt="About"
            className="w-[450px] h-[300px] object-cover rounded-xl shadow-lg border-4 border-gray-700 transform transition-all duration-300 hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
};

export default About;
