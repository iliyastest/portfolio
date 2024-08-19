"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import project from "../assets/proj2.png";
import project1 from "../assets/proj1.png";
import project2 from "../assets/proj3.png";

const projects = [
  {
    title: "Ecommerce Digital Products",
    description:
      "An online platform for selling digital products, offering secure payments, instant downloads, and user-friendly browsing. ",
    devStack: ["Next", "Tailwind", "Strapi"],
    link: "https://youtu.be/4tmL_lqhTN4?si=5B14IpC04bGu3qC2 ",
    git: "https://github.com/iliyastest/ecommerce-store",
    src: project,
  },
  {
    title: "Coffee Shop Landing Page",
    description:
      "A sleek and responsive website for a coffee shop, showcasing menu items, café details, and offering an online ordering system. Built with a focus on user experience and modern design.",
    devStack: ["React", "Tailwind", "AOS"],
    link: "https://coffee-shop-pearl-ten.vercel.app/",
    git: "https://github.com/iliyastest/coffee-shop",
    src: project1,
  },
  {
    title: "Personal Portfolio",
    description:
      "A personal portfolio website showcasing projects, skills, and experience. Includes an interactive resume and contact form.",
    devStack: ["Next", "Tailwind", "Framer Motion"],
    link: "#hero",
    git: "https://github.com/iliyastest/portfolio",
    src: project2,
  },
];

const Portfolio = () => {
  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 px-6 md:px-0 mt-52"
      id="portfolio"
    >
      <h1 className=" text-white text-6xl w-[320px] mx-auto font-semibold p-4 my-12">
        Selected <span className="text-orange-400">Projects</span>
      </h1>

      <div className="max-w-[1000px] mx-auto mt-40 space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-12 flex ${
              index % 2 === 1
                ? "flex-col-reverse items-center lg:flex-row-reverse gap-12"
                : "flex-col items-center lg:flex-row gap-12"
            }`}
          >
            <div className="space-y-2 max-w-[550px]  ">
              <h2 className="text-7xl my-4 font-bold text-purple-400">{`0${
                index + 1
              }`}</h2>
              <h2 className="text-4xl ">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">
                {project.description}
              </p>
              <p className="text-xl text-orange-400 font-semibold">
                Tech Stack: {project.devStack.join(", ")}
              </p>
              <div className="w-64 h-[1px] bg-gray-400 my-4"></div>
              <div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-6"
                >
                  Live Demo
                </a>
                <a href={project.git} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <Image
                src={project.src}
                alt={project.title}
                className="h-[350px] w-[500px] object-cover border rounded border-gray-700 "
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
