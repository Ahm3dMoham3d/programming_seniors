"use client";
import { FileJson } from "lucide-react";
import Link from "next/link";
import { useMenuStore } from "@/lib/menuStore";
export default function MemoryFile({ name, id }: { name: string; id: number }) {
  const toggleMenu = useMenuStore((state: any) => state.toggleMenu);
  return (
    <Link
      onClick={toggleMenu}
      href={`/${id}`}
      className="flex items-center gap-2 my-2"
    >
      <FileJson className="w-4 h-4" />
      {name}.js
    </Link>
  );
}
