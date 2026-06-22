"use client";
import { useEffect, useRef, useState } from "react";
import { processSteps } from "../data/process";

export default function Process() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -120px 0px" }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="process" ref={ref} className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-semibold">Our Process</h2>
      <p className="mt-2 text-zinc-400 max-w-2xl">A simple, proven process to take projects from idea to growth.</p>

      <ol className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {visible
          ? processSteps.map((step, idx) => (
              <li key={step.id} className="rounded-lg border border-white/6 bg-white/3 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white">{idx + 1}</div>
                  <div>
                    <h3 className="font-medium">{step.title}</h3>
                    <p className="mt-1 text-sm text-zinc-300">{step.description}</p>
                  </div>
                </div>
              </li>
            ))
          : Array.from({ length: processSteps.length }).map((_, i) => (
              <li key={i} className="animate-pulse rounded-lg border border-white/6 bg-white/3 p-6">
                <div className="h-6 w-6 rounded bg-white/6" />
                <div className="mt-2 h-4 w-1/2 rounded bg-white/6" />
              </li>
            ))}
      </ol>
    </section>
  );
}
