"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function Filename() {
  const [text, setText] = useState("programming_seniors_2024");
  const changeText = () => {
    if (text === "programming_seniors_2024") {
      setText("the_best_programming_team");
    } else {
      setText("programming_seniors_2024");
    }
  };
  return (
    <div
      onClick={() => changeText()}
      className="flex items-center gap-1 justify-center text-sm bg-gray-800 hover:bg-gray-700 transition-colors p-1 rounded-lg border flex-auto text-center max-w-[500px] cursor-pointer"
    >
      <motion.div
        key={text}
        className="flex items-center gap-1 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Search className="h-4 w-4 scale-x-[-1]" />
        <p>{text}</p>
      </motion.div>
    </div>
  );
}
