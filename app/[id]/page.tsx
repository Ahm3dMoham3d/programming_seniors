"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { unique } from "@/api/actions";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
type memories = {
  id: number;
  name: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};
export default function Page() {
  const [data, setData] = useState<memories | null>(null);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const params = useParams<{ id: string }>();
  useEffect(() => {
    unique(Number(params.id)).then((e) => {
      setData(e as memories);
      setLoading(false);
    });
  }, []);

  const date = new Date();
  const formattedDate = format(date, "MM/dd/yyyy");
  if (loading) {
    return (
      <div className="flex flex-col gap-2 p-4">
        <Skeleton className="bg-gray-600 w-[25%] h-[20px] rounded-md" />
        <Skeleton className="bg-gray-600 w-[20%] h-[20px] rounded-md" />
        <Skeleton className="bg-gray-600 w-[70%] h-[80px] rounded-md" />
      </div>
    );
  } else {
    return (
      <div className="p-4  opacity-80">
        <p className="text-blue-400">{"{"}</p>
        <p className="text-blue-400">
          <span className="mr-4"></span> &quot;{"name"}&quot; :{" "}
          <span className="text-green-500">&quot;{data?.name}&quot; </span>
        </p>
        <p className="text-blue-400">
          <span className="mr-4"></span> &quot;{"content"}&quot; :{" "}
          <span className="text-green-500">&quot;{data?.content}&quot; </span>
        </p>
        <p className="text-blue-400">
          <span className="mr-4"></span> &quot;{"date"}&quot; :{" "}
          <span className="text-green-500">
            &quot;{format(data?.createdAt || "", "dd/MM/yyyy")}&quot;{" "}
          </span>
        </p>
        <p className="text-blue-400">{"}"}</p>
      </div>
    );
  }
}
