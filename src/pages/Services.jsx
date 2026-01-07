import React, { useState } from "react";
import { motion } from "framer-motion";
import { animationProperties } from "../../Constants";
import { FaShieldAlt, FaCubes, FaLayerGroup, FaGlobe } from "react-icons/fa";
function Services(props) {
  const services = [
    {
      icon: FaShieldAlt,
      title: "Smart Contract Development",
      subtitle:
        "Secure, audit-ready smart contracts for Ethereum-based systems.",
    },
    {
      icon: FaCubes,
      title: "Web3 Application Integration",
      subtitle:
        "Frontend applications that interact reliably with on-chain systems.",
    },
    {
      icon: FaLayerGroup,
      title: "Full-Stack Web Development",
      subtitle: "End-to-end web applications built with the MERN stack.",
    },
    {
      icon: FaGlobe,
      title: "Static Web Development",
      subtitle:
        "Fast, responsive websites for marketing and informational use cases.",
    },
  ];

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
        Services
      </motion.h1>
      <motion.p
        variants={animationProperties.item}
        className="mt-4 text-2xl text-slate-600 max-w-2xl mb-12"
      >
        I design and build reliable systems across smart contracts, Web3
        applications, and modern web platforms.
      </motion.p>

      <section className=" pb-36 mt-12 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="relative group rounded-3xl bg-white/10 backdrop-blur-lg border border-slate-200 p-10
                           shadow-sm transition
                           hover:shadow-xl hover:border-primaryPurple/40 hover:cursor-pointer"
              >
                {/* Purple ambient aura */}
                <div
                  className="absolute -top-20 -right-20 h-64 w-64 rounded-full
                             bg-primaryPurple
                             opacity-[0.08] blur-3xl
                             pointer-events-none
                             group-hover:opacity-[0.14] transition"
                />

                {/* Amber corner accent */}
                <div
                  className="absolute bottom-0 right-0 h-12 w-12
                             border-b-2 border-r-2
                             border-amber-500/50
                             duration-200
                             group-hover:h-24 group-hover:w-24
                             group-hover:border-b-3
                             group-hover:border-r-3
                             rounded-br-3xl"
                />

                {/* Icon badge */}
                <div
                  className="relative z-10 mb-8 inline-flex items-center justify-center
                             h-14 w-14 rounded-xl
                             bg-primaryPurple/10
                             text-primaryPurple
                             ring-1 ring-primaryPurple/20
                             group-hover:text-amber-500
                             group-hover:ring-amber-500/40
                             transition"
                >
                  <Icon className="text-2xl" />
                </div>

                <h3 className="relative z-10 text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>

                <p className="relative z-10 text-lg text-slate-600 leading-relaxed">
                  {service.subtitle}
                </p>

                {/* Subtle amber underline */}
                <div
                  className="mt-8 h-1 w-12 rounded-full
                             bg-amber-500/70
                             opacity-0
                             group-hover:opacity-100
                             transition"
                />
              </div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
}

export default Services;
