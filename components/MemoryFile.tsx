import { FileJson } from "lucide-react";
import Link from "next/link";
export default function MemoryFile({ name, id }: { name: string; id: number }) {
  return (
    <Link href={`/${id}`} className="flex items-center gap-2 my-2">
      <FileJson className="w-4 h-4" />
      {name}.js
    </Link>
  );
}
