import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import CodeSnippetGridItem from "./CodeSnippetGridItem";
import CodeSnippetDialog from "./CodeSnippetDialog";
import { codeSnippets } from "../../../lib/CodeSnippets";
function Principles(props) {
  const principles = [
    {
      id: "gas",
      title: "Gas Efficiency",
      subtitle: "Minimize costs, maximize clarity.",
      description:
        "Write highly gas-optimized smart contracts by leveraging tight struct packing, strategic storage layout, and custom error types that reduce calldata size and avoid expensive revert strings—all while maintaining clean, readable, and maintainable code that lowers transaction fees for end users.",
    },
    {
      id: "cei",
      title: "Reentrancy Safety",
      subtitle: "Secure by default, resilient by design.",
      description:
        "Enforce the Checks-Effects-Interactions (CEI) pattern as a foundational rule across all state-modifying functions, and selectively apply reentrancy guards as a defense-in-depth measure—ensuring contracts are protected against reentrancy attacks from the first deployment without over-engineering.",
    },
    {
      id: "customError",
      title: "Audit-Ready Quality",
      subtitle: "Tested thoroughly, documented completely.",
      description:
        "Every contract includes comprehensive NatSpec documentation (@notice, @param, @return, @dev) and follows a consistent architectural flow: errors → events → constructor → external → internal → private. Rigorous invariant and fuzz testing in Foundry guarantees correctness under edge cases, making codebase both production-ready and auditor-friendly.",
    },
  ];

  const [selectedSnippet, setSelectedSnippet] = useState(null);
  const renderPrinciples = () => {
    return principles.map((principle, index) => (
      <div key={index} className="flex items-center gap-x-8">
        <div
          className={`flex flex-col ${
            index % 2 == 0 ? "items-start  " : "items-end order-2 "
          }  w-2/3 space-y-4`}
          key={index}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-primary font-medium text-xl ">
              {principle.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h3 className="text-slate-800 font-semibold text-4xl ">
              {principle.subtitle}
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p
              className={`text-slate-400  font-base text-md ${
                index % 2 == 0 ? "text-left " : "text-right "
              }`}
            >
              {principle.description}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={
            index % 2 == 0 ? { opacity: 0, x: 50 } : { opacity: 0, x: -50 }
          }
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-1/3"
        >
          <CodeSnippetGridItem
            snippet={codeSnippets[principle.id]}
            onClick={() => setSelectedSnippet(codeSnippets[principle.id])}
          />
        </motion.div>
      </div>
    ));
  };

  return (
    <div className="flex flex-col gap-y-16 w-full ">
      {renderPrinciples()}

      <CodeSnippetDialog
        isOpen={!!selectedSnippet}
        onClose={() => setSelectedSnippet(null)}
        snippet={selectedSnippet}
      />
    </div>
  );
}

export default Principles;
