"use client";
import Sidebar from "./vslayout/Sidebar";
import Topbar from "./vslayout/Topbar";
import Screen from "./vslayout/Screen";
import { useState } from "react";

export default function VSLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  return (
    <div className="flex flex-col min-h-[100svh] p-2">
      <Topbar />
      <div className="grid grid-cols-1 lg:grid-cols-12 flex-1">
        <Sidebar />
        <Screen>{children}</Screen>
      </div>
    </div>
  );
}
