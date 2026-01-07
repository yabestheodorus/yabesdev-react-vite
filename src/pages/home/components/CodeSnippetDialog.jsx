// components/CodeSnippetDialog.jsx
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CodeSnippetDialog({ isOpen, onClose, snippet }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Add listener when dialog opens
    document.addEventListener("keydown", handleEscape);
    // Focus the dialog to trap focus (optional but good for a11y)
    dialogRef.current?.focus();

    // Cleanup
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            ref={dialogRef}
            tabIndex={-1}
          />
          <motion.div
            layoutId={`snippet-${snippet.id}`} // ← Must match GridItem!
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 z-50 flex items-center justify-center"
            onClick={onClose}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden p-6 "
            >
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 bg-ceramic-dots">
                <div className="mockup-code font-mono text-xs leading-relaxed bg-white text-slate-400 ">
                  <div className="max-h-158 overflow-y-scroll text-sm">
                    {snippet.expanded}
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="mt-4 px-4 py-2 bg-primaryPurple text-white rounded-lg hover:bg-purple-700"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
