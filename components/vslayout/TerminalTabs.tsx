import { Play } from "lucide-react";
export default function TerminalTabs({ errs = 0 }: { errs?: number }) {
  return (
    <div className="flex items-center gap-4 mb-4 justify-between">
      <div className="flex items-center gap-4">
        <span>
          <span className="opacity-25 mr-1">PROBLEMS</span>
          <span className="bg-gray-800 rounded-full px-3">{errs}</span>
        </span>

        <span className="opacity-70">TERMINAL</span>
      </div>
      <Play className="w-4 h-4" />
    </div>
  );
}
