import React from "react";
import { animationProperties } from "../../Constants";
import { motion } from "framer-motion";
function Credits(props) {
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
            Credits
          </motion.h1>
          <motion.p
            variants={animationProperties.item}
            className="mt-4 text-2xl text-slate-600 max-w-2xl "
          >
            I stand on the shoulders of giants. These are the open-source
            projects, tools, and communities that made my work possible — and
            the people who inspired me along the way.
          </motion.p>
          <motion.div
            variants={animationProperties.item}
            className="w-24 h-0.5 bg-amber-500 mt-6   rounded-full"
          />
        </div>

        <motion.div
          className="w-full md:w-5/12 order-first md:order-last flex justify-center  "
          initial={{ opacity: 0, scale: 0.95, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 600, damping: 20 }}
        >
          <img
            className={`relative w-3/4 block mx-auto md:w-full h-auto duration-1000 `}
            alt="Portfolio header"
            src="/images/header_thanks.png"
            loading="eager" // optional: load immediately
          />
        </motion.div>
      </section>

      <motion.div
        variants={animationProperties.container}
        className="mb-8 -mt-16"
      >
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          Open Source & Tools
        </h2>
        <p className="text-lg text-slate-700 mb-4">
          My projects rely on incredible open-source libraries and platforms.
        </p>
      </motion.div>

      {/* Section: Design & Assets */}
      <motion.div variants={animationProperties.container} className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          Design & Assets
        </h2>
        <ul className="space-y-2 text-slate-700">
          <li className="flex items-center gap-x-4">
            <span className="bg-slate-500 w-3 h-3 rounded-sm" />
            <b>Plus Jakarta Sans & Fredoka & Geist Mono</b> – typography via
            Google Fonts.
          </li>
          <li className="flex items-center gap-x-4">
            <span className="bg-slate-500 w-3 h-3 rounded-sm" />
            <b>React Icons</b> – clean, consistent iconography.
          </li>
          <li className="flex items-center gap-x-4">
            <span className="bg-slate-500 w-3 h-3 rounded-sm" />
            <b>Dreamina</b> – AI image generator (customized for my avatar
            illustration).
          </li>
        </ul>
      </motion.div>

      {/* Section: Inspiration & Community */}
      <motion.div variants={animationProperties.container} className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          Special Thanks
        </h2>
        <p className="text-lg text-slate-700 mb-4 flex items-center gap-x-4">
          <span className="bg-slate-500 w-3 h-3 rounded-sm" />
          <a
            href="https://enji.dev/" // 👈 Replace with their URL
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center group text-primaryPurple font-medium text-lg hover:text-amber-600 transition"
          >
            <span>Enji Kusnadi </span> {/* 👈 Replace with their name */}
            <svg
              className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          - This website’s design and content were deeply inspired by his work.
        </p>
      </motion.div>

      {/* Closing Note */}
      <motion.div
        variants={animationProperties.item}
        className="border-l-4 border-amber-500 pl-6 py-1 max-w-2xl"
      >
        <p className="text-slate-700 italic">
          If I’ve used your work and forgotten to credit you — please reach out.
          I deeply value the open-source ethos, and I’m committed to giving
          credit where it’s due.
        </p>
      </motion.div>
    </motion.section>
  );
}

export default Credits;
