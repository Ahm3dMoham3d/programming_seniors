import { LoaderCircle } from "lucide-react";

export default function loading() {
  return (
    <div className="h-[20svh] w-full justify-center items-center">
      <LoaderCircle className="mt-2 w-8 h-8 animate-spin" />
    </div>
  );
}
