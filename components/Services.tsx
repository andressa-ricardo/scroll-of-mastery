"use client";
import { useEffect, useRef, useState } from "react";
import services from "../data/services";

export default function Services() {
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
    <section id="services" ref={ref} className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-semibold">Our Services</h2>
      <p className="mt-2 text-zinc-400 max-w-2xl">We offer targeted services to help your small business grow.</p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {visible
          ? services.map((s) => (
              <article key={s.id} className="rounded-xl border border-white/6 bg-white/2 p-6 transition-shadow hover:shadow-lg">
                <div className="flex items-center gap-4">
                  <s.Icon className="h-6 w-6 text-blue-400" />
                  <h3 className="text-lg font-medium">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm text-zinc-300">{s.description}</p>
              </article>
            ))
          : Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="animate-pulse rounded-xl border border-white/6 bg-white/2 p-6">
                <div className="h-6 w-6 rounded bg-white/6" />
                <div className="mt-3 h-4 w-3/4 rounded bg-white/6" />
                <div className="mt-2 h-3 w-full rounded bg-white/6" />
              </div>
            ))}
      </div>
    </section>
  );
}
