import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiClock, FiX } from "react-icons/fi";

/**
 * Props:
 *  - open:    boolean, whether the modal is visible
 *  - onClose: function, called on backdrop click, Esc key, or button click
 *  - name:    optional string, e.g. "Cephas Books" (shown in the message)
 */
export default function ComingSoonModal({ open, onClose, name }) {
  // Close on Escape + lock page scroll while open
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="coming-soon-title"
            className="relative w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 text-center shadow-xl"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
            >
              <FiX size={18} />
            </button>

            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
              className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-500"
            >
              <FiClock size={26} />
            </motion.div>

            <span className="text-[11px] font-semibold tracking-wide text-indigo-500">
              COMING SOON
            </span>

            <h2
              id="coming-soon-title"
              className="mt-2 text-xl sm:text-2xl font-bold text-slate-900"
            >
              {name ? `${name} is on the way` : "We're working on it"}
            </h2>

            <p className="mt-3 text-[14px] leading-relaxed text-slate-500">
              This feature isn't available yet. We're putting the finishing
              touches on it and it will be live soon. Thanks for your patience.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-7 w-full rounded-xl bg-indigo-500 py-3 text-[14px] font-semibold text-white hover:bg-indigo-600 transition-colors"
            >
              Got it
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}