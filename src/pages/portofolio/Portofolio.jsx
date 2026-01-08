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
      <section className=" flex items-center w-full mx-auto mb-16 ">
        <div className="flex flex-col justify-center w-7/12 ">
          <motion.h1
            variants={animationProperties.item}
            className="font-bold text-6xl text-slate-800 mb-2"
          >
            Portofolios
          </motion.h1>
          <motion.p
            variants={animationProperties.item}
            className="mt-4 text-2xl text-slate-600 max-w-2xl"
          >
            Until this moment, I’ve built projects that blend smart contract
            precision with intuitive user experiences — from secure,
            gas-optimized dApps to full-stack Web2 solutions. Each one tells a
            story of problem-solving, learning, and shipping code that matters.
          </motion.p>

          {/* Add amber divider for rhythm & visual closure */}
          <motion.div
            variants={animationProperties.item}
            className="w-24 h-0.5 bg-amber-500 mt-6 "
          />
        </div>

        <motion.div
          className="w-full md:w-5/12 order-first md:order-last flex justify-center"
          initial={{ opacity: 0, scale: 0.95, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 600, damping: 20 }}
        >
          <img
            className={`md:p-6 h-auto duration-1000 block`}
            src="/images/header_porto.png"
          />
        </motion.div>
      </section>

      <motion.div
        variants={animationProperties.fade}
        className="flex items-center gap-x-4"
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

        <div className="flex flex-col w-5/12 px-6 items-start ">
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
