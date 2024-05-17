"use client";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { Menu } from "lucide-react";
import Filename from "./Filename";
import Link from "next/link";
import { useContext } from "react";
import { useMenuStore } from "@/lib/menuStore";
export default function Topbar() {
  const toggleMenu = useMenuStore((state: any) => state.toggleMenu);
  return (
    <div className="bg-gray-950 p-3 flex items-center justify-between rounded rounded-t-lg gap-6">
      <Link href="/" className="">
        <Image width={30} src={logo} alt="vs_code" />
      </Link>
      <div className="flex-auto max-w-[500px]">
        <Filename />
      </div>

      <div>
        <Menu onClick={toggleMenu} className="h-4 w-4 cursor-pointer" />
      </div>
    </div>
  );
}
