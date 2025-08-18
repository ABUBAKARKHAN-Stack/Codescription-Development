import React, { Dispatch, FC, SetStateAction } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TechStackTabs } from "@/types/main.types";

type Props = {
  label: TechStackTabs;
  setActiveTab: Dispatch<SetStateAction<TechStackTabs>>;
  activeTab: string;
  category: string;
};

const StarButton: FC<Props> = ({
  activeTab,
  label,
  setActiveTab,
  category,
}) => {
  return (
    <motion.button
      key={label}
      className={`relative w-fit cursor-pointer overflow-hidden rounded-full bg-gradient-to-r px-6 py-3 text-sm font-semibold text-white shadow-lg ${
        label === activeTab
          ? "from-purple-800 to-purple-900 shadow-purple-500/25"
          : "from-purple-600 to-purple-700"
      } `}
      onClick={() => setActiveTab(label)}
      animate={{
        scale: label === activeTab ? 1.1 : 1,
      }}
      whileHover={{
        scale: label === activeTab ? 1.1 : 1.05,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <AnimatePresence>
        {label === activeTab && (
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 opacity-20 blur-lg"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ zIndex: -1 }}
          />
        )}
      </AnimatePresence>

      <motion.span
        animate={{
          y: label === activeTab ? [0, -2, 0] : 0,
        }}
        transition={{
          duration: 1,
          repeat: label === activeTab ? Infinity : 0,
          ease: "easeInOut",
        }}
      >
        {category}
      </motion.span>

      <AnimatePresence>
        {label === activeTab && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-purple-300"
                initial={{
                  opacity: 0,
                  x: 0,
                  y: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  x: Math.cos((i * 60 * Math.PI) / 180) * 30,
                  y: Math.sin((i * 60 * Math.PI) / 180) * 30,
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default StarButton;
