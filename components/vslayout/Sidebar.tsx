"use client";
import {
  Files,
  Search,
  BugPlay,
  Blocks,
  ChevronDown,
  LoaderCircle,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import MemoryFile from "../MemoryFile";
import { useState, useEffect } from "react";
import { index } from "@/api/actions";
import { useMenuStore } from "@/lib/menuStore";
import { useMemoryStore } from "@/lib/memoriesStore";
export default function Sidebar() {
  const menu = useMenuStore((state: any) => state.isOpened);

  const memories = useMemoryStore((state: any) => state.memories);
  const setMemories = useMemoryStore((state: any) => state.setData);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    index().then((e) => {
      setMemories(e);
      setLoading(false);
    });
  }, [setMemories]);
  return (
    <div
      className={`${
        !menu ? "hidden" : ""
      } lg:grid lg:col-span-3 bg-gray-950 border-t lg:border-r rounded-bl-lg p-4`}
    >
      <div className="grid grid-cols-12">
        <div className="flex flex-col gap-8 col-span-2">
          <Files className="opacity-75 w-6 h-6" />
          <Search className="opacity-40 w-6 h-6" />
          <BugPlay className="opacity-40 w-6 h-6" />
          <Blocks className="opacity-40 w-6 h-6" />
        </div>
        <div className="col-span-10">
          <div className="flex items-center gap-1">
            <ChevronDown />
            <h4 className="text-sm font-bold uppercase">our_memories</h4>
          </div>
          <ScrollArea className="h-[85svh]">
            {loading ? (
              <LoaderCircle className="mt-2 w-8 h-8 animate-spin" />
            ) : (
              memories.map((e: any, i: number) => {
                return <MemoryFile id={e.id} name={e.name} key={i} />;
              })
            )}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
