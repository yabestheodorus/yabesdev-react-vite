import { motion } from "framer-motion";
import React from "react";

function Quote(props) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <p className="text-gray-600 max-w-5xl text-center mx-auto mt-4 text-3xl leading-relaxed font-geistmono">
        I build{" "}
        <span className="relative inline-block">
          <span className="relative z-10 bg-amber-500/10 text-amber-700 px-1.5 py-0.5 rounded-sm">
            <svg
              className="absolute -top-1 -left-1 w-3 h-3 text-amber-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.828 14.828a2 2 0 01-2.828 0l-4-4a2 2 0 112.828-2.828L12 10.172l2.828-2.828a2 2 0 012.828 2.828l-4 4z" />
            </svg>
            secure
          </span>
          ,
          <span className="relative z-10 bg-amber-500/10 text-amber-700 px-1.5 py-0.5 rounded-sm">
            gas-efficient
            <svg
              className="absolute -bottom-1 -right-1 w-3 h-3 text-amber-400 rotate-180"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.828 14.828a2 2 0 01-2.828 0l-4-4a2 2 0 112.828-2.828L12 10.172l2.828-2.828a2 2 0 012.828 2.828l-4 4z" />
            </svg>
          </span>
          &nbsp;smart contracts
        </span>
        {" and "}
        <span className="text-primaryPurple font-medium">
          Full-stack Web3 application
        </span>
        , prioritizing{" "}
        <span className="font-semibold text-slate-800">
          correctness, readability,
        </span>
        {" and "}
        <span className="font-semibold text-slate-800">audit readiness</span>
        {" from day one."}
      </p>
    </motion.span>
  );
}

export default Quote;
