import React from "react";
import { motion } from "framer-motion";
import { animationProperties } from "../../Constants";
import {
  FaCube,
  FaCodeBranch,
  FaWallet,
  FaRocket,
  FaCode,
  FaMobileAlt,
} from "react-icons/fa";
import { FaGithub, FaLinkedin, FaInstagram, FaGlobe } from "react-icons/fa";
function Experience() {
  const experiences = [
    {
      title: "Web3 / Smart Contract Developer",
      company: "Independent Projects",
      period: "2024 – Present",
      location: "Remote",
      highlights: [
        "Built secure, gas-optimized Solidity smart contracts (ERC-20, ERC-721, ERC-4337).",
        "Integrated Chainlink VRF for provable randomness in gacha NFT minting (EtherBeast).",
        "Followed CEI pattern and audit-ready practices with full NatSpec documentation.",
        "Wrote comprehensive test suites with Foundry (fuzzing, invariants).",
      ],
      icon: <FaRocket className="text-amber-500" />,
      color: "border-l-amber-500",
    },
    {
      title: "Full-Stack Developer (MERN)",
      company: "Project-based",
      period: "2021 – 2024",
      location: "Remote",
      highlights: [
        "Developed full-stack dApps and Web2 applications using React, Node.js, Express, and MongoDB.",
        "Integrated Wagmi and WalletConnect for seamless wallet interactions.",
        "Built responsive UIs with Tailwind CSS and Framer Motion.",
      ],
      icon: <FaCode className="text-purple-500" />,
      color: "border-l-purple-500",
    },
    {
      title: "Project Manager · iOS App Developer",
      company: "Walletku",
      period: "December 2017 – Present",
      location: "Jakarta, Indonesia",
      highlights: [
        "Led long-term mobile product development as Project Manager.",
        "Coordinated cross-functional teams across engineering, product, and business.",
        "Developed and maintained native iOS applications for core financial services.",
      ],
      icon: <FaMobileAlt className="text-purple-500" />,
      color: "border-l-purple-500",
    },
    {
      title: "Android & iOS App Developer",
      company: "Walden Global Services",
      period: "November 2015 – May 2017",
      location: "Bandung, Indonesia",
      highlights: [
        "Built production-ready native Android and iOS apps with Java, Swift, and REST APIs.",
        "Collaborated with designers and backend engineers to deliver user-centric features.",
        "Implemented application logic, UI components, and third-party integrations.",
      ],
      icon: <FaMobileAlt className="text-slate-500" />,
      color: "border-l-slate-400",
    },
  ];
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={animationProperties.container}
      className="flex flex-col items-start pb-48"
    >
      <section className=" flex items-center w-full mx-auto ">
        <div className="flex flex-col justify-center w-7/12">
          <motion.h1
            variants={animationProperties.item}
            className="font-bold text-6xl text-slate-800 mb-2"
          >
            Experience
          </motion.h1>
          <motion.p
            variants={animationProperties.item}
            className="mt-4 text-2xl text-slate-600 max-w-2xl "
          >
            A journey through mobile, full-stack, and Web3 — always shipping
            secure, user-focused software.
          </motion.p>
          <motion.div
            variants={animationProperties.item}
            className="w-24 h-0.5 bg-amber-500 mt-6 mb-16  rounded-full"
          />
        </div>

        <motion.div
          className="w-full md:w-5/12 order-first md:order-last flex justify-center"
          initial={{ opacity: 0, scale: 0.95, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 600, damping: 20 }}
        >
          <img
            className={`relative w-3/4 mx-auto md:w-full h-auto duration-1000 block`}
            src="/images/header_exp.png"
          />
        </motion.div>
      </section>

      <div className="relative z-10 px-6 ">
        {/* Vertical Timeline */}
        <div className="relative">
          {/* Amber center line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-amber-500/30 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="pl-24 relative">
                {/* Timeline dot with icon */}
                {/* <div className="absolute -left-24 top-1 w-12 h-12 flex items-center justify-center rounded-full bg-white border-2 border-amber-500 shadow-sm">
                  {exp.icon}
                </div> */}

                {/* Content */}
                <h3 className="text-2xl font-semibold text-slate-700">
                  {exp.title}
                </h3>
                <p className="text-xl font-semibold text-primaryPurple mb-1">
                  {exp.company}
                </p>
                <p className="text-lg text-slate-600 mb-3">
                  {exp.period} • {exp.location}
                </p>
                <ul className="space-y-2 text-slate-700">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-center gap-x-4 text-lg">
                      <span className="bg-slate-500 w-3 h-3 rounded-sm" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;
