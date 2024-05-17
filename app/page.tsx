"use client";
import { useState } from "react";

import { TypeAnimation } from "react-type-animation";
import { text } from "@/lib/writing_text";

export default function Home() {
  const [renderedCount, setRenderedCount] = useState(0);
  const [form, setForm] = useState(false);

  const handleAnimationComplete = (index: number) => {
    if (index + 1 < text.length) {
      setRenderedCount(index + 1);
    }
    if (renderedCount + 1 == text.length) setForm(true);
  };

  return (
    <section className="pl-4 flex flex-col gap-2 py-2 pr-2">
      {text.map((e: string, i) => {
        return (
          i <= renderedCount && (
            <div key={i} className="flex items-center gap-6">
              <div className="opacity-50 w-2">{i + 1}</div>
              <div className="opacity-50">
                <TypeAnimation
                  sequence={[
                    e,
                    1000,
                    () => {
                      handleAnimationComplete(i);
                    },
                  ]}
                  wrapper="span"
                  speed={80}
                  cursor={false}
                />
              </div>
            </div>
          )
        );
      })}
    </section>
  );
}
