import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center">
      {/* Main Title */}
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide mb-6">
        Bello Zainab Portfolio
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-2xl text-gray-400 mb-12">
        A combination of Social Media Manager and Web Developer
      </p>

      {/* Links */}
      <div className="flex gap-8">
        <Link
          to="/social"
          className="text-lg md:text-xl font-semibold px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition duration-300"
        >
          Social Media Manager
        </Link>
        <Link
          to="/home"
          className="text-lg md:text-xl font-semibold px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition duration-300"
        >
          Web Developer
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
