import React, { useEffect } from "react";
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
import { motion } from "framer-motion";
import Quote from "./components/Quote";
import Principles from "./components/Principles";
import { animationProperties } from "../../../Constants";
import { NavLink } from "react-router-dom";
function Home(props) {
  return (
    <div className="flex flex-col justify-center ">
      <section className=" flex items-start w-full mx-auto mt-12">
        <motion.div
          className="flex flex-col justify-center w-7/12 h-full gap-y-4"
          initial="hidden"
          animate="visible"
          variants={animationProperties.container}
        >
          <motion.div variants={animationProperties.item}>
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

          <motion.div variants={animationProperties.item}>
            <span className="flex items-center gap-x-2 font-jakarta mb-6 text-6xl">
              <h1 className="font-extrabold text-slate-800">I’m</h1>{" "}
              <h1 className="font-extrabold text-primaryPurple">Yabes</h1>
              <h1 className="font-extrabold text-slate-800">Theodorus,</h1>
            </span>
          </motion.div>

          {/* 2. Tagline / role */}
          <motion.div variants={animationProperties.item}>
            <p className="text-xl font-semibold text-gray-700 -mb-3">
              Blockchain & Smart Contract Developer |
            </p>
          </motion.div>

          <motion.div variants={animationProperties.item}>
            <p className="text-xl text-gray-700 mb-6">
              Full-Stack Web3 Engineer
            </p>
          </motion.div>

          <motion.div variants={animationProperties.item}>
            <div className="flex items-center w-fit gap-x-6 mb-28">
              <NavLink
                to={"/contact"}
                className="bg-primaryPurple px-4 py-2 text-white rounded-lg hover:cursor-pointer hover:scale-110 duration-200"
              >
                Contact me
              </NavLink>

              <a
                href="/resume.pdf"
                download="Yabes-Theodorus-Resume.pdf"
                className="text-slate-600 group flex items-center gap-x-1 px-4 py-2 font-medium hover:text-amber-600 transition"
              >
                <span className="inline-block group-hover:animate-bounce">
                  <HiMiniDocumentArrowDown size={30} />
                </span>
                Resume
              </a>
            </div>
          </motion.div>

          <motion.div variants={animationProperties.item}>
            <p className="text-gray-600 text-md">Tech stack :</p>
          </motion.div>

          <motion.div
            variants={animationProperties.container}
            className="flex items-center gap-x-4  mb-8"
          >
            <div className="tooltip" data-tip="solidity">
              <SiSolidity
                className="text-slate-600 hover:text-primaryPurple"
                size={25}
              />
            </div>
            <div className="tooltip" data-tip="foundry">
              <img src="/images/foundry.svg" className="w-7 h-7 " />
            </div>

            <div className="tooltip" data-tip="openzeppelin">
              <SiOpenzeppelin
                className="text-slate-600 hover:text-primaryPurple"
                size={25}
              />
            </div>

            <div className="tooltip" data-tip="chainlink">
              <SiChainlink
                className="text-slate-600 hover:text-primaryPurple"
                size={25}
              />
            </div>

            <div className="divider divider-horizontal -mx-3 py-1 " />

            <div className="tooltip" data-tip="react">
              <FaReact
                className="text-slate-600 hover:text-primaryPurple"
                size={25}
              />
            </div>

            <div className="tooltip" data-tip="tailwindcss">
              <SiTailwindcss
                className="text-slate-600 hover:text-primaryPurple"
                size={25}
              />
            </div>

            <div className="tooltip" data-tip="javascript">
              <RiJavascriptFill
                className="text-slate-600 hover:text-primaryPurple"
                size={30}
              />
            </div>

            <div className="tooltip" data-tip="wagmi">
              <SiWagmi
                className="text-slate-600 hover:text-primaryPurple"
                size={30}
              />
            </div>

            <div className="tooltip" data-tip="walletconnect">
              <SiWalletconnect
                className="text-slate-600 hover:text-primaryPurple"
                size={30}
              />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full md:w-5/12 order-first md:order-last flex justify-center"
          initial={{ opacity: 0, scale: 0.95, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 600, damping: 20 }}
        >
          <img
            className={`relative w-3/4 mx-auto md:w-full h-auto duration-1000 block`}
            src="/images/header.png"
          />
        </motion.div>
      </section>
      <section className="my-20">
        <Quote />
      </section>

      <section className="mt-10 mb-20">
        <Principles />
      </section>
    </div>
  );
}

export default Home;
