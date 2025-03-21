import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold mt-2">Oops! Page Not Found</h2>
      <p className="text-lg text-gray-600 mt-2">
        The page you're looking for doesn't exist or has been moved.
      </p>
      
      <Link
        to ="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Go Back Home
      </Link>
      <Link
        to ="/contact"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-200 transition"
      >
        Contact us
      </Link>
    </div>
  );
};

export default ErrorPage;
