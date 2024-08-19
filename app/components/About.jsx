import React from "react";
import Image from "next/image";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";

const sections = [
  {
    imgSrc: book,
    title: "Education",
    description:
      "I have a diploma in web development and am concentrating on technologies such as React, Next.js, and Tailwind CSS.",
    colSpan: "col-span-5",
  },
  {
    imgSrc: pc,
    title: "Problem-Solving",
    description: "I approach challenges with a logical and systematic mindset.",
    colSpan: "lg:col-span-3 col-span-5",
  },
  {
    imgSrc: card,
    title: "Experience",
    description: "I have a diverse portfolio of projects.",
    colSpan: "lg:col-span-3 col-span-5",
  },
  {
    imgSrc: finance,
    title: "Technical Skills",
    description:
      "As a Front-end web developer, I specialize in React.js, Next.js, and Tailwind CSS. My expertise extends to the creation of responsive, user-friendly interfaces and efficient backend solutions.",
    colSpan: "col-span-5",
  },
];

const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto" id="about">
      <h1 className=" text-white text-6xl w-[320px] mx-auto font-semibold p-4 mb-4">
        About <span className="text-orange-400">me</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-8 gap-6 place-items-center px-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`w-full ${section.colSpan} relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to bg-orange-800 opacity-30 animate-gradient-xy"></div>
            <div className="flex flex-row p-6">
              <Image
                src={section.imgSrc}
                alt={section.title}
                className="w-auto h-[130px]"
              />
              <div className="flex flex-col mt-4">
                <h2 className="text-2xl font-bold text-white/80">
                  {section.title}
                </h2>
                <p className="text-lg text-white/70 mt-2">
                  {section.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
