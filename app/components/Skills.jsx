import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoStripe } from "react-icons/bi";
import { GiProgression } from "react-icons/gi";
const skillIcons = [
  { icon: <FaHtml5 size={140} />, label: "HTML" },
  { icon: <FaCss3Alt size={140} />, label: "CSS" },
  { icon: <RiTailwindCssFill size={140} />, label: "Tailwind" },
  { icon: <FaJsSquare size={140} />, label: "JavaScript" },
  { icon: <FaReact size={140} />, label: "React" },
  { icon: <RiNextjsFill size={140} />, label: "Next" },
  { icon: <BiLogoStripe size={140} />, label: "Strapi" },
  { icon: <GiProgression size={140} />, label: "SEO" },
];

const Skills = () => {
  return (
    <div className=" bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32">
      <div className=" text-white max-w-[400px] sm:max-w-[950px] mx-auto p-8 text-center">
        <h2 className="text-6xl font-bold mb-4">What I Do</h2>
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
          {skillIcons.map((skill, index) => (
            <div
              key={index}
              className="h-[160px] w-[160px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl"
            >
              {skill.icon}
              <p className=" mt-2">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
