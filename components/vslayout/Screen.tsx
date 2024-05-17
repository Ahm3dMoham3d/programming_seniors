"use client";
import { useEffect, useState } from "react";
import Terminal from "./Terminal";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Screen({ children }: { children: React.ReactNode }) {
  const [showTerminal, setShowTerminal] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowTerminal(true);
    }, 7500);
  });
  return (
    <div className="border-t grid grid-rows-2 lg:col-span-9 bg-gray-900 text-sm rounded-b-lg ">
      <ScrollArea className="h-[42svh]">{children}</ScrollArea>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.4 }}
      >
        <Terminal />
      </motion.div>
    </div>
  );
}
