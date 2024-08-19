"use client";
import React from "react";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import profilepic from "../assets/profilepic.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className=" py-24 relative overflow-clip bg-[linear-gradient(to_bottom,_#000,_#2B1942_35%,_#8F5C55_60%,_#DBAF6E_80%)]"
      id="hero"
    >
      <div className=" absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>
      <div className=" relative">
        <div className=" text-8xl font-bold text-center">
          <h1 className="text-[#9884CE]">Hi, I am</h1>
          <h1 className="text-[#E48A57]">El Amine Iliass</h1>
        </div>
        <motion.div
          className=" hidden lg:block absolute left-[100px] top-[170px]"
          drag
        >
          <Image
            src={cursor}
            height="190"
            width="190"
            alt="cursor"
            className=""
            draggable="false"
          />
        </motion.div>
        <motion.div
          className=" hidden lg:block absolute right-[200px] top-[20px]"
          drag
        >
          <Image
            src={lightning}
            height="120"
            width="120"
            alt="cursor"
            className=""
            draggable="false"
          />
        </motion.div>

        <p className=" text-center max-w-[500px] mx-auto mt-8 text-white/80">
          I am a front-end developer focused on creating websites that provide
          the best experience for users.
        </p>
        <Image
          src={profilepic}
          alt="profilepic"
          className="h-auto w-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
