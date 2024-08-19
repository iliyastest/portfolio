import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="mt-12 text-white/70 max-w-[1000px] mx-auto border-t border-gray-700 py-4 px-6 md:px-0 flex justify-between items-center">
      <h1 className="text-2xl font-bold">El Amine Iliass</h1>
      <div className="flex space-x-6 mt-4">
        <a href="" className=" hover:text-gray-300">
          <FaLinkedin size={24} />
        </a>
        <a href="" className=" hover:text-gray-300">
          <FaTwitter size={24} />
        </a>
        <a
          href="https://github.com/iliyastest"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-gray-300"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
