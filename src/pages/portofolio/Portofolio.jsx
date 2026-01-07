import React from "react";
import { GiPlayButton } from "react-icons/gi";
import { HiHashtag } from "react-icons/hi2";
import { IoEyeSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { animationProperties, portofolios } from "../../../Constants";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";
function Portofolio(props) {
  const hashtags = [
    "React",
    "Solidity",
    "Gatcha",
    "Blockchain",
    "ChainlinkVRF",
    "TailwindCSS",
    "NFT",
    "ERC20",
  ];

  const etherbeast = portofolios.etherbeast;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animationProperties.container}
      className="flex flex-col items-start "
    >
      <motion.h1
        variants={animationProperties.item}
        className="font-bold text-6xl text-slate-800 mb-2"
      >
        Portofolios
      </motion.h1>
      <motion.p
        variants={animationProperties.item}
        className="mt-4 text-2xl text-slate-600 max-w-2xl mb-36"
      >
        Here are some projects I’ve built.
      </motion.p>

      <motion.div
        variants={animationProperties.fade}
        className="flex items-start gap-x-4"
      >
        <div className="flex flex-col w-7/12 items-start">
          <h6 className="text-amber-500 text-xl font-semibold">
            {etherbeast.id}
          </h6>

          <h4 className="text-3xl text-slate-800 font-semibold mb-2 mt-4">
            {etherbeast.title}
          </h4>
          <h6 className="text-slate-600 text-lg mb-4 ">
            {etherbeast.shortDescription}
          </h6>

          <div className="flex flex-wrap gap-x-4 max-w-3/4 space-y-1">
            {etherbeast.hashtags.map((hashtag, index) => (
              <div
                key={index}
                className="flex items-center text-md text-slate-400"
              >
                <HiHashtag size={15} />
                {hashtag}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-x-3">
            <NavLink
              to="/etherbeast"
              state={{ etherbeast }}
              className="flex items-center gap-x-3 rounded-lg bg-primaryPurple text-white px-8 py-2 mt-4 hover:cursor-pointer hover:-translate-y-1 duration-300"
            >
              See Details
              <GiPlayButton className="mt-0.5" />
            </NavLink>
            <a
              href={etherbeast.link}
              target="blank"
              className="flex items-center gap-x-3 rounded-lg border border-primaryPurple bg-transparent text-primaryPurple px-8 py-2 mt-4 hover:cursor-pointer hover:-translate-y-1 duration-300"
            >
              Demo
              <IoEyeSharp className="mt-0.5" />
            </a>
          </div>

          <div className="flex items-center gap-x-3">
            <a
              href={etherbeast.github}
              target="new"
              className="flex items-center gap-x-3 rounded-lg border border-primaryPurple bg-transparent text-primaryPurple px-8 py-2 mt-4 hover:cursor-pointer hover:-translate-y-1 duration-300"
            >
              <FaGithub className="mt-0.5" />
              Smart Contracts on
              <span className="font-medium -ml-2">Github</span>
            </a>

            <a
              href={etherbeast.githubFrontend}
              target="new2"
              className="flex items-center gap-x-3 rounded-lg border border-primaryPurple bg-transparent text-primaryPurple px-8 py-2 mt-4 hover:cursor-pointer hover:-translate-y-1 duration-300"
            >
              <FaGithub className="mt-0.5" />
              Frontend on<span className="font-medium -ml-2">Github</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col w-5/12 items-start ">
          <div className="mockup-browser border-base-300 border w-full bg-slate-200">
            <div className="mockup-browser-toolbar ">
              <div className="input ">https://etherbeast.yabestheo.dev</div>
            </div>
            <div className="grid place-content-center border-t border-base-300 h-auto bg-white">
              <img src="/images/etherbeast.png" />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mb-36"></div>
    </motion.div>
  );
}

export default Portofolio;
