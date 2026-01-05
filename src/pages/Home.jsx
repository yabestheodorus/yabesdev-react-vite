import React from "react";
import { FaReact } from "react-icons/fa";
import { HiMiniDocumentArrowDown } from "react-icons/hi2";
import { RiJavascriptFill } from "react-icons/ri";
import {
  SiChainlink,
  SiOpenzeppelin,
  SiSolidity,
  SiTailwindcss,
  SiWagmi,
  SiWalletconnect,
} from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import HorizontalSpringAnimation from "../components/HorizontalSpringAnimation";
import { motion } from "framer-motion";
function Home(props) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // delay between each child
        delayChildren: 0.3, // optional: wait 0.3s before starting
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 600, damping: 20 },
    },
  };

  const fade = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 600, damping: 20 },
    },
  };

  return (
    <section className=" flex items-center max-w-7xl mx-auto mt-24">
      <motion.div
        className="flex flex-col justify-center w-1/2 h-full gap-y-4"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.div variants={item}>
          <TypeAnimation
            className="text-3xl  text-slate-800 "
            sequence={[
              "hello, 👋",
              1000,
              "halo, 👋",
              1000,
              "你好, 👋",
              1000,
              "こんにちは, 👋",
              1000,
              "hola, 👋",
              1000,
              "bonjour, 👋",
              1000,
              "안녕하세요, 👋",
              1000,
              "Привет, 👋",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.div variants={item}>
          <span className="flex items-center gap-x-2 font-jakarta mb-6 text-6xl">
            <h1 className="font-extrabold text-slate-800">I’m</h1>{" "}
            <h1 className="font-extrabold text-primaryPurple">Yabes</h1>
            <h1 className="font-extrabold text-slate-800">Theodorus,</h1>
          </span>
        </motion.div>

        {/* 2. Tagline / role */}
        <motion.div variants={item}>
          <p className="text-xl font-semibold text-gray-700 -mb-3">
            Blockchain & Smart Contract Developer |
          </p>
        </motion.div>

        <motion.div variants={item}>
          <p className="text-xl text-gray-700 mb-6">Full-Stack Web3 Engineer</p>
        </motion.div>
        {/* 3. Short value proposition */}
        {/* <p className="text-gray-600 mb-8 text-lg">
          I build production-ready smart contracts and full-stack DApps with
          React, Node.js, and Solidity. My focus is on delivering secure,
          scalable, and user-friendly Web3 solutions.
        </p> */}

        <motion.div variants={item}>
          <div className="flex items-center w-fit gap-x-6 mb-28">
            <button className="bg-primaryPurple px-4 py-2 text-white rounded-lg hover:cursor-pointer">
              Contact me
            </button>
            <button className="text-slate-600 group flex items-center gap-x-1 px-4 py-2 font-medium hover:cursor-pointer">
              <HiMiniDocumentArrowDown
                size={30}
                className="group-hover:animate-bounce"
              />{" "}
              Resume
            </button>
          </div>
        </motion.div>

        <motion.div variants={item}>
          <p className="text-gray-600 text-md">Tech stack :</p>
        </motion.div>

        <motion.div
          variants={container}
          className="flex items-center gap-x-4  mb-8"
        >
          <motion.div variants={fade} className="tooltip" data-tip="solidity">
            <SiSolidity
              className="text-slate-600 hover:text-primaryPurple"
              size={25}
            />
          </motion.div>
          <motion.div variants={fade} className="tooltip" data-tip="foundry">
            <img src="/images/foundry.svg" className="w-7 h-7 " />
          </motion.div>

          <motion.div
            variants={fade}
            className="tooltip"
            data-tip="openzeppelin"
          >
            <SiOpenzeppelin
              className="text-slate-600 hover:text-primaryPurple"
              size={25}
            />
          </motion.div>

          <motion.div variants={fade} className="tooltip" data-tip="chainlink">
            <SiChainlink
              className="text-slate-600 hover:text-primaryPurple"
              size={25}
            />
          </motion.div>

          <div className="divider divider-horizontal -mx-3 py-1 " />

          <motion.div variants={fade} className="tooltip" data-tip="react">
            <FaReact
              className="text-slate-600 hover:text-primaryPurple"
              size={25}
            />
          </motion.div>

          <motion.div
            variants={fade}
            className="tooltip"
            data-tip="tailwindcss"
          >
            <SiTailwindcss
              className="text-slate-600 hover:text-primaryPurple"
              size={25}
            />
          </motion.div>

          <motion.div variants={fade} className="tooltip" data-tip="javascript">
            <RiJavascriptFill
              className="text-slate-600 hover:text-primaryPurple"
              size={30}
            />
          </motion.div>

          <motion.div variants={fade} className="tooltip" data-tip="wagmi">
            <SiWagmi
              className="text-slate-600 hover:text-primaryPurple"
              size={30}
            />
          </motion.div>

          <motion.div
            variants={fade}
            className="tooltip"
            data-tip="walletconnect"
          >
            <SiWalletconnect
              className="text-slate-600 hover:text-primaryPurple"
              size={30}
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2 order-first md:order-last flex justify-center"
        initial={{ opacity: 0, scale: 0.95, x: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 600, damping: 20 }}
      >
        <img
          className={`relative w-3/4 mx-auto md:w-full h-auto duration-1000 `}
          src="/images/header.png"
        />
      </motion.div>
    </section>
  );
}

export default Home;
