"use client";

import AddMemory from "../AddMemory";
import TerminalTabs from "./TerminalTabs";

export default function Terminal() {
  return (
    <div className=" bg-gray-950 rounded-b-lg border-t h-full py-4 px-4">
      <TerminalTabs />
      <AddMemory />
    </div>
  );
}
