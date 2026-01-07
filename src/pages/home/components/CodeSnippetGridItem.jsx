// components/CodeSnippetGridItem.jsx
import { motion } from "framer-motion";

export default function CodeSnippetGridItem({ snippet, onClick }) {
  if (!snippet) return null;
  return (
    <motion.div
      layoutId={`snippet-${snippet.id}`}
      className=" rounded-xl cursor-pointer hover:shadow-lg transition-shadow "
      onClick={onClick}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 bg-ceramic-dots">
        <div className="mockup-code font-mono text-xs leading-relaxed bg-white text-slate-400 overflow-hidden">
          {snippet.compact}
        </div>
      </div>
    </motion.div>
  );
}
