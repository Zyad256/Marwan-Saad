import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { CyberHeader } from "./CyberHeader";
import { CyberFooter } from "./CyberFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <CyberHeader />
      <motion.main
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 py-10 sm:py-16"
      >
        {children}
      </motion.main>
      <CyberFooter />
    </div>
  );
}
