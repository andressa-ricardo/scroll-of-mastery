"use client";
import { useRef } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-2 text-zinc-400 max-w-2xl">Get in touch to discuss your project or book a consultation.</p>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <form ref={formRef} className="space-y-4 rounded-lg border border-white/6 bg-white/3 p-6">
          <label className="block">
            <span className="text-sm text-zinc-300">Name</span>
            <input className="mt-1 w-full rounded bg-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
          </label>

          <label className="block">
            <span className="text-sm text-zinc-300">Email</span>
            <input type="email" className="mt-1 w-full rounded bg-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@company.com" />
          </label>

          <label className="block">
            <span className="text-sm text-zinc-300">Message</span>
            <textarea className="mt-1 w-full rounded bg-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4} placeholder="Tell us about your project" />
          </label>

          <div>
            <button type="button" className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 font-medium">Send Message</button>
          </div>
        </form>

        <div className="space-y-3">
          <div className="rounded-lg border border-white/6 bg-white/3 p-6">
            <h3 className="font-medium">Book a Consultation</h3>
            <p className="mt-2 text-sm text-zinc-300">Prefer to schedule a call? Click the button below.</p>
            <a href="#" className="mt-4 inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2">Book a Consultation</a>
          </div>

          <div className="rounded-lg border border-white/6 bg-white/3 p-6">
            <h4 className="font-medium">Email</h4>
            <div className="mt-2 text-sm text-zinc-300">hello@scrollofmastery.com</div>
          </div>
        </div>
      </div>
    </section>
  );
}
