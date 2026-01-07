import React from "react";
import { motion } from "framer-motion";
import { animationProperties } from "../../Constants";
import { FaCube, FaCodeBranch, FaWallet } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaInstagram, FaGlobe } from "react-icons/fa";
function Experience() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={animationProperties.container}
      className="flex flex-col items-start pb-36"
    >
      <motion.h1
        variants={animationProperties.item}
        className="font-bold text-6xl text-slate-800 mb-4"
      >
        Experience
      </motion.h1>

      <motion.p
        variants={animationProperties.item}
        className="text-2xl text-slate-600 max-w-3xl mb-16"
      >
        Project-driven engineering experience across smart contracts, Web3
        systems, and full-stack web development.
      </motion.p>

      <section class="relative w-[210mm] h-[297mm] overflow-hidden mx-auto bg-slate-50 p-10 font-jakarta text-slate-900">
        {/* <!-- PAPER ORNAMENTS --> */}
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-primaryPurple/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 -left-32 w-[420px] h-[420px] bg-amber-500/10 rounded-full blur-3xl"></div>
        <div class="absolute inset-0 bg-ceramic-dots opacity-40 pointer-events-none"></div>

        {/* <!-- CONTENT WRAPPER --> */}
        <div class="relative z-10">
          {/* <!-- HEADER --> */}
          <header class="grid grid-cols-[150px_1fr] gap-8 mb-6">
            {/* <!-- PHOTO --> */}
            <div>
              <div class="w-32 h-47 rounded-xl border-2 overflow-hidden p-0.5 border-primaryPurple/30 bg-slate-200 flex items-center justify-center text-slate-500 text-sm">
                <img
                  src="/images/profile.jpg"
                  className="overflow-hidden rounded-xl h-auto object-contain"
                />
              </div>
            </div>

            {/* <!-- IDENTITY --> */}
            <div>
              <h1 class="text-3xl font-bold tracking-tight">Yabes Theodorus</h1>
              <p class="mt-1 text-lg font-semibold text-primaryPurple">
                Web3 / Smart Contract Developer · Full-Stack Developer
              </p>

              {/* <!-- HIGHLIGHTS --> */}
              <div class="flex flex-wrap gap-2 mt-4 text-sm">
                <span class="px-3 py-1 rounded-full bg-amber-500/20 text-amber-700 font-medium">
                  8+ Years Experience
                </span>

                <span class="px-3 py-1 rounded-full bg-primaryPurple/10 text-primaryPurple font-medium">
                  Security-Focused
                </span>

                <span class="px-3 py-1 rounded-full bg-primaryPurple/10 text-primaryPurple font-medium">
                  Audit-Ready
                </span>
              </div>

              {/* <!-- CONTACT --> */}
              <div class="mt-4 grid grid-cols-2 gap-y-1 text-sm text-slate-600">
                <span>Email: me@yabestheo.dev</span>
                <span>Phone: +62851-5528-7233</span>
                <span>Location: Indonesia</span>
                <span>Portfolio: yabestheo.dev</span>
              </div>
            </div>

            {/* <!-- SOCIALS --> */}
            <div className="flex items-center gap-2  text-sm">
              {/* GitHub */}
              <a
                href="https://github.com/yabestheodorus"
                className="flex items-center justify-center whitespace-nowrap px-4 gap-x-2 h-8 rounded-full bg-gray-800/10 border border-gray-800 text-gray-800 hover:bg-gray-800/20 transition"
              >
                <FaGithub className="w-4 h-4" /> /yabestheodorus
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/yabestheodorus"
                className="flex items-center justify-center whitespace-nowrap px-4 gap-x-2 h-8 rounded-full bg-blue-600/20 border border-blue-600 text-blue-600 hover:bg-blue-600/30 transition"
              >
                <FaLinkedin className="w-4 h-4" /> /yabestheodorus
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/yabestheodorus"
                className="flex items-center justify-center px-4 gap-x-2 h-8 rounded-full bg-pink-500/20 border border-pink-500 text-pink-500 hover:bg-pink-500/30 transition"
              >
                <FaInstagram className="w-4 h-4" /> @yabestheo.dev
              </a>

              {/* Personal Website */}
              <a
                href="https://yabestheo.dev"
                className="flex items-center justify-center px-4 gap-x-2 h-8 rounded-full bg-amber-500/20 border border-amber-500 text-amber-500 hover:bg-amber-500/30 transition"
              >
                <FaGlobe className="w-4 h-4" /> yabestheo.dev
              </a>
            </div>
          </header>

          {/* <!-- AMBER DIVIDER --> */}
          <div class="h-0.5 w-full bg-amber-500/50 rounded-full mb-6"></div>

          {/* <!-- BODY --> */}
          <main class="grid grid-cols-[1.3fr_0.7fr] gap-4">
            {/* <!-- LEFT --> */}
            <div>
              {/* <!-- EXPERIENCE --> */}
              <section>
                <h2 class="text-lg font-bold mb-4">Experience</h2>

                <div class="mb-4">
                  <h3 class="font-semibold">Web3 / Smart Contract Developer</h3>
                  <p class="text-xs text-slate-500">
                    Independent Projects · 2024–Present
                  </p>
                  <ul class="mt-2 space-y-1 text-sm text-slate-700">
                    <li>
                      • Solidity smart contracts (ERC-20, ERC-721, ERC-4337)
                    </li>
                    <li>• Chainlink VRF & oracle integrations</li>
                    <li>• Audit-ready structure, NatSpec documentation</li>
                  </ul>
                </div>

                <div class="mb-4">
                  <h3 class="font-semibold">Full-Stack Developer (MERN)</h3>
                  <p class="text-xs text-slate-500">Project-based</p>
                  <ul class="mt-2 space-y-1 text-sm">
                    <li>• React frontends & Node.js APIs</li>
                    <li>• MongoDB data modeling</li>
                  </ul>
                </div>

                <section class="relative mb-4">
                  {/* <!-- WALLETKU --> */}
                  <article class="mb-4">
                    <h3 class="text-lg font-semibold text-slate-900">
                      Walletku
                    </h3>
                    <p class="text-sm text-slate-600">
                      Project Manager · iOS App Developer
                    </p>
                    <p class="text-xs text-slate-500 mb-3">
                      December 2017 – Present · Jakarta, Indonesia
                    </p>

                    <ul class="list-disc pl-5 space-y-1 text-sm text-slate-700 leading-relaxed">
                      <li>
                        Led long-term mobile product development and delivery as
                        Project Manager.
                      </li>
                      <li>
                        Coordinated cross-functional teams across engineering,
                        product, and business stakeholders.
                      </li>
                      <li>
                        Developed and maintained iOS applications supporting
                        Walletku’s core services.
                      </li>
                    </ul>
                  </article>

                  {/* <!-- WALDEN GLOBAL SERVICES --> */}
                  <article class="mb-4">
                    <h3 class="text-lg font-semibold text-slate-900">
                      Walden Global Services
                    </h3>
                    <p class="text-sm text-slate-600">
                      Android Developer · iOS App Developer
                    </p>
                    <p class="text-xs text-slate-500 mb-3">
                      November 2015 – May 2017
                    </p>

                    <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700 leading-relaxed">
                      <li>
                        Developed native Android and iOS mobile applications for
                        production environments, implemented application logic,
                        UI components, and API integrations.
                      </li>
                      <li>
                        Collaborated closely with designers and backend
                        engineers to deliver complete features.
                      </li>
                    </ul>
                  </article>
                </section>
              </section>
            </div>

            {/* <!-- RIGHT --> */}
            <aside>
              {/* <!-- SUMMARY --> */}
              <section class="mb-6">
                <h2 class="text-lg font-bold mb-2">Professional Summary</h2>
                <p class="text-sm leading-relaxed text-slate-700">
                  Web3 and full-stack developer with strong focus on secure
                  Ethereum smart contracts, production-grade Web3 systems, and
                  long-term maintainability. Experienced across startups,
                  enterprise, and independent projects.
                </p>
              </section>
              <div class="h-0.5 bg-amber-500/50 rounded-full mb-4"></div>
              {/* <!-- EDUCATION --> */}
              <section className="mb-4">
                <h2 class="text-lg font-bold mb-2">Education</h2>
                <p class="text-sm font-semibold">
                  Bachelor of Information Technology
                </p>
                <p class="text-xs text-slate-600">
                  Institut Teknologi Harapan Bangsa Bandung
                </p>
                <p class="text-xs text-slate-600">2011–2015 · GPA 3.41</p>
              </section>

              <div class="h-0.5 bg-amber-500/50 rounded-full mb-6"></div>

              {/* LEGEND */}
              <div className="mb-3 text-[10px] text-slate-600">
                <div>
                  <span className="border-b-2 border-amber-500">
                    Bold underline
                  </span>
                  &nbsp; Frequent
                </div>
                <div>
                  <span className="border-b border-slate-400">
                    Thin underline
                  </span>
                  &nbsp; Occasional
                </div>
              </div>

              {/* SKILLS MATRIX */}
              <section className="space-y-3">
                <div>
                  <h3 className="font-bold text-xs mb-1">Languages</h3>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs">
                    <span className="border-b-2 border-amber-500">
                      Solidity
                    </span>
                    <span className="border-b-2 border-amber-500">
                      TypeScript
                    </span>
                    <span className="border-b-2 border-amber-500">
                      JavaScript
                    </span>
                    <span className="border-b border-slate-400">HTML</span>
                    <span className="border-b border-slate-400">
                      CSS / SCSS
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-xs mb-1">
                    Blockchain & Backend
                  </h3>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs">
                    <span className="border-b-2 border-amber-500">
                      Ethereum
                    </span>
                    <span className="border-b-2 border-amber-500">Foundry</span>
                    <span className="border-b-2 border-amber-500">Express</span>
                    <span className="border-b border-slate-400">Redis</span>
                    <span className="border-b border-slate-400">MongoDB</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-xs mb-1">Frontend</h3>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs">
                    <span className="border-b-2 border-amber-500">React</span>
                    <span className="border-b border-slate-400">Next.js</span>
                    <span className="border-b border-slate-400">
                      Framer Motion
                    </span>
                    <span className="border-b border-slate-400">Redux</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-xs mb-1">Tools & Software</h3>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs">
                    <span className="border-b-2 border-amber-500">VS Code</span>
                    <span className="border-b-2 border-amber-500">Git</span>
                    <span className="border-b border-slate-400">Figma</span>
                  </div>
                </div>
              </section>
            </aside>
          </main>
        </div>
      </section>
    </motion.section>
  );
}

export default Experience;
