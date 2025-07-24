import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
    <h1 className="text-6xl font-bold mb-4 text-red-500">404</h1>
    <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
    <p className="mb-6 text-gray-500 dark:text-gray-300">Sorry, the page you are looking for does not exist or has been moved.</p>
    <Link to="/" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Go Home</Link>
  </div>
);

export default NotFound; 